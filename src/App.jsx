import React from "react";
// pages
import { Home, Channel, Search, VideoDetail } from "./pages";
// components
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:value" element={<Search />} />
      </Routes>
    </Box>
  );
}

export default App;
