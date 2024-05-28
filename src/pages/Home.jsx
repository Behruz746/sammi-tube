import React, { useState, useEffect } from "react";
// componets
import { Category, Loader, Videos, NotFoundEr } from "../components";
// API service
import { ApiService } from "../service/api.service";
// ui elements
import { Stack, Box, Container, Typography } from "@mui/material";
// colors
import { colors } from "../constants/colors";

function Home() {
  const [videos, setVideos] = useState([]);
  const [load, setLoad] = useState(false);
  const [notFountm, setNotFount] = useState(true);
  const [error, setError] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Developers");
  const selectCategoryHandler = (category) => setSelectedCategory(category);

  useEffect(() => {
    setLoad(false);
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.data.items);
        setLoad(true);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoad(true);
        setNotFount(true);
      }
    };

    getData();
  }, [selectedCategory]);

  if (!load) {
    return <Loader />;
  }

  return (
    <>
      {notFountm ? (
        <NotFoundEr error={error} />
      ) : (
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
      )}
    </>
  );
}

export default Home;
