import React, { useState, useEffect } from "react";
// componets
import { Category, Videos } from "../components";
// API service
import { ApiService } from "../service/api.service";
// ui elements
import { Stack, Box, Container, Typography } from "@mui/material";
// colors
import { colors } from "../constants/colors";

function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Web Developers");
  const selectCategoryHandler = (category) => setSelectedCategory(category);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [selectedCategory]);
  console.log(videos);

  return (
    <Stack>
      <Category
        selectCategoryHandler={selectCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectedCategory}{" "}
            <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
}

export default Home;
