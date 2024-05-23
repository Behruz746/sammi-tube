import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";

function Channel() {
  const params = useParams();
  return (
    <Box>
      <h1>Channel</h1>
      <NavLink to="/">
        <Button>Home</Button>
      </NavLink>
    </Box>
  );
}

export default Channel;
