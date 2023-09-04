import { Typography, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { handleScoreChange, handleSizeChange } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Final = () => {
  const { score } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleSizeChange(50));

    navigate("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBack} variant="outlined">
        Go Back
      </Button>
    </Box>
  );
};

export default Final;
