import React, { useState, useEffect } from "react";
import { Loader, Videos } from "../components";
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { ApiService } from "../service/api.service";
import { colors } from "../constants/colors";

function Search() {
  const [videos, setVideos] = useState([]);
  const [load, setLoad] = useState(false);
  const { value } = useParams();

  useEffect(() => {
    setLoad(false);
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${value}`
        );
        setVideos(data.data.items);
        setLoad(true);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [value]);

  console.log(videos);

  if (!load) {
    return <Loader />;
  }

  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth={"90%"}>
        <Typography variant="h4" fontWeight={"bold"} mb={2}>
          Search result for {""}
          <span style={{ color: colors.secondary }}>{value}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
}

export default Search;
