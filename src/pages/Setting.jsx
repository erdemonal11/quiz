import React, { useEffect } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../redux/actions";
import Select from "../components/Field";
import Text from "../components/Text";
import { useNavigate } from "react-router-dom";
import Axios from "../hooks/Axios";  
import "../erdem.css"

const Setting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const diffOp = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOp = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];
 
  const { response, error, loading } = Axios({ url: "/api_category.php" });
 
  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong!{" "}
        <a href="https://github.com/erdemonal11" target="blank">
          Contact me
        </a>
      </Typography>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleCategoryChange(selectedCategory));
    dispatch(handleDifficultyChange(selectedDifficulty));
    dispatch(handleTypeChange(selectedType));
    navigate("/quest");
  };

  const selectedCategory = useSelector((state) => state.question_category);
  const selectedDifficulty = useSelector((state) => state.question_difficulty);
  const selectedType = useSelector((state) => state.question_type);
 
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
     
      <Select options={response?.trivia_categories || []} label="Category" />
      <Select
        options={diffOp}
        label="Difficulty"
        onChange={handleDifficultyChange}
      />
      <Select options={typeOp} label="Type" onChange={handleTypeChange} />
      <Text />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Start!
        </Button>
        <br /><br /><br /><br />
        <div className="erdemlabel">
        <a
          href="https://github.com/erdemonal11"
          target="_blank"
          className="erdemlabel"
        >
          erdemapps.
        </a>
      </div>
      </Box>
    </form>
  );
};

export default Setting;
