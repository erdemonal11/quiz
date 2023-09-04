import React, { useState, useEffect } from "react";
import { Typography, Box, Button, CircularProgress } from "@mui/material";
import Axios from "../hooks/Axios";
import { useSelector, useDispatch } from "react-redux";
import { handleScoreChange } from "../redux/actions";
import { decode } from "html-entities";
import { useNavigate } from "react-router-dom";

const random = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Question = () => {
  const question_category = useSelector((state) => state.question_category);
  const question_difficulty = useSelector((state) => state.question_difficulty);
  const question_type = useSelector((state) => state.question_type);
  const size = useSelector((state) => state.size);
  const score = useSelector((state) => state.score);

  let apiUrl = `/api.php?amount=${size}`;
  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = Axios({ url: apiUrl });

  const [questInd, setQuestInd] = useState(0);
  const [option, setOption] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questInd];
      let answers = [...question.incorrect_answers];
      answers.splice(
        random(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOption(answers);
    }
  }, [response, questInd]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questInd];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questInd + 1 < response.results.length) {
      setQuestInd(questInd + 1);
    } else {
      navigate("/score");
    }
  };
  const handleBack = () => {
    navigate("/");
  };

  return (
    <Box>
      <Typography variant="h4">Questions {questInd + 1}</Typography>
      <Typography mt={5}>
        {decode(response.results[questInd].question)}
      </Typography>
      {option.map((data, id) => (
        <Box mt={2} key={id} style={{ width: "100%" }}>
          <Button variant="contained" onClick={handleClickAnswer}>
            {decode(data)}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        Score: {score} / {response.results.length}
      </Box>
      <Button onClick={handleBack} variant="contained">
        Go Back
      </Button>
    </Box>
  );
};

export default Question;
