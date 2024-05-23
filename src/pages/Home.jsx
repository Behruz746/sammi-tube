import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

function Home() {
  return (
    <Box>
      <h1>Home</h1>
      <NavLink to="/channel">
        <Button>Channel</Button>
      </NavLink>
    </Box>
  );
}

export default Home;
