import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { ApiService } from "../service/api.service";
import { ChannelCard, Videos } from "../components";

function Channel() {
  const { channel } = useParams();
  const [channelDetail, setChannelDetail] = useState([]);
  const [vieos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `channels?part=snippet&statistics&id=${channel}`
        );
        setChannelDetail(data.data.items[0]);
        const videosData = await ApiService.fetching(
          `search?channelId=${channel}&part=snippet%2Cid&order=date`
        );
        setVideos(videosData.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [channel]);

  console.log(channelDetail);
  console.log(vieos);

  return (
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"300px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ChannelCard video={channelDetail} marginTop={"-100px"} />
      </Box>
      <Container maxWidth={"90%"}>
        <Videos vieos={vieos} />
      </Container>
    </Box>
  );
}

export default Channel;
