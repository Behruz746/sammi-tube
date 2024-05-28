import React, { useEffect, useState } from "react";
import { Box, Chip, Stack, Typography, Avatar } from "@mui/material";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import { ApiService } from "../service/api.service";
import { Loader, NotFoundEr, Videos } from "../components";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import ReactPlayer from "react-player/lazy";

function VideoDetail() {
  const { id } = useParams();
  const [video, setVideo] = useState([]);
  const [channelImg, setChannelImg] = useState([]);
  const [relate, setRelate] = useState([]);
  const [load, setLoad] = useState(false);
  const [notFountm, setNotFount] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    // setNotFount(true);
    setLoad(false);
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet&statistics&contentDetails&id=${id}`
        );
        setVideo(data.data.items[0]);
        const relateData = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setRelate(relateData.data.items);
        const channel = await ApiService.fetching(
          `channels?part=snippet&id=${data?.data?.items[0]?.snippet?.channelId}`
        );
        setChannelImg(channel.data.items[0]);

        // const dataCom = await ApiService.fetching(
        //   `commentThreads?part=snippet&videoId=${id}`
        // );

        console.log(dataCom);
        setLoad(true);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoad(true);
        setNotFount(false);
      }
    };

    getData();
  }, [id]);

  console.log(video);

  const {
    snippet: { title, channelTitle, description, tags } = {},
    statistics: { viewCount, likeCount, commentCount } = {},
  } = video;

  if (!load) {
    return <Loader />;
  }

  return (
    <>
      {notFountm ? (
        <NotFoundEr error={error} />
      ) : (
        <Box minHeight={"90vh"} mb={10}>
          <Box
            display={"flex"}
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            <Box width={{ xs: "100%", md: "75%" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className={"react-player"}
                controls
              />
              {tags?.map((item, idx) => (
                <Chip
                  label={item}
                  key={idx}
                  sx={{ mt: "10px", cursor: "pointer", ml: "10px" }}
                  deleteIcon={<Tag />}
                  onDelete={() => {}}
                  variant="outlined"
                ></Chip>
              ))}

              <Typography variant="h5" fontWeight={"bold"} p={2}>
                {title}
              </Typography>
              <Typography variant="subtitle2" p={2} sx={{ opacity: "0.7" }}>
                {description}
              </Typography>
              <Stack
                direction={"row"}
                gap={"20px"}
                alignItems={"center"}
                py={1}
                px={2}
              >
                <Stack
                  sx={{ opacity: 0.7 }}
                  direction={"row"}
                  alignItems={"cemter"}
                  gap={"3px"}
                >
                  <Visibility />
                  {parseInt(viewCount).toLocaleString()} views
                </Stack>
                <Stack
                  sx={{ opacity: 0.7 }}
                  direction={"row"}
                  alignItems={"cemter"}
                  gap={"3px"}
                >
                  <FavoriteOutlined />
                  {parseInt(likeCount).toLocaleString()} like
                </Stack>
                <Stack
                  sx={{ opacity: 0.7 }}
                  direction={"row"}
                  alignItems={"cemter"}
                  gap={"3px"}
                >
                  <MarkChatRead />
                  {parseInt(commentCount).toLocaleString()} comment
                </Stack>
              </Stack>
              <Stack direction={"row"} py={1} px={2}>
                <NavLink to={`/channel/${video?.snippet?.channelId}`}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={"5px"}
                    marginTop={"5px"}
                  >
                    <Avatar
                      src={channelImg?.snippet?.thumbnails?.medium?.url}
                    />
                    <Typography variant="subtitle2" color={"gray"}>
                      {channelTitle}
                      <CheckCircle
                        sx={{
                          fontSize: "12px",
                          color: "gray",
                          marginLeft: "5px",
                        }}
                      />
                    </Typography>
                  </Stack>
                </NavLink>
              </Stack>
            </Box>
            <Box
              width={{ xs: "100%", md: "25%" }}
              px={2}
              py={{ md: 1, xs: 5 }}
              justifyContent={"center"}
              alignItems={"center"}
              overflow={"scroll"}
              maxHeight={"100vh"}
            >
              {relate && <Videos videos={relate} />}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default VideoDetail;
