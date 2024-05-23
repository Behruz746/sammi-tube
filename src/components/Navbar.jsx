import React from "react";
import { SearchBar } from "./";
import { NavLink } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import { logo } from "../constants/index";
import { colors } from "../constants/colors";

function Navbar() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 999,
        backgroundColor: colors.primary,
      }}
    >
      <NavLink to={"/"} style={{ cursor: "pointer" }}>
        <img width={55} height={55} src={logo} alt="katalog img" />
      </NavLink>
      <SearchBar />
      <Box />
    </Stack>
  );
}

export default Navbar;
