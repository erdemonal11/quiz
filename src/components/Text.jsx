import { Box, FormControl, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { handleSizeChange } from "../redux/actions";

const Text = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newSize = parseInt(e.target.value, 10);  
    if (!isNaN(newSize) && newSize > 0) {
      
      dispatch(handleSizeChange(newSize));  
    }
  };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Size"
          type="number"
          size="small"
          inputProps={{ min: "1" }}  
        ></TextField>
      </FormControl>
    </Box>
  );
};

export default Text;
