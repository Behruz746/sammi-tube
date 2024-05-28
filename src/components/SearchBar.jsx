import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { colors } from "../constants/colors";

function SearchBar() {
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();

  // submit bolganda value navigate bilan search pagega otadiga qiluvchu function
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputVal) navigate(`/search/${inputVal}`);
    setInputVal("");
  };

  return (
    <Paper
      component={"form"}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
        mr: 5,
      }}
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="search..."
        className="search-bar"
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
      />
      <IconButton type="submit" title="search">
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
