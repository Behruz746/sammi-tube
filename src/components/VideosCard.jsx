import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { colors } from "../constants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";

function VideosCard({ video }) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <CardMedia
        loading={"lazy"}
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.channelTitle}
        sx={{
          width: { xs: "100%", sm: "360px", md: "320px" },
          height: "180px",
        }}
        width={360}
        height={180}
      />
      <CardContent
        sx={{
          backgroundColor: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <>
          <Typography my={"5px"} sx={{ opacity: "0.4" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: "0.6" }}>
            {video?.snippet?.description.slice(0, 70)}
          </Typography>
        </>
        <>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography variant="subtitle2" color={"gray"}>
              {video?.snippet?.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", marginLeft: "5px" }}
              />
            </Typography>
          </Stack>
        </>
      </CardContent>
    </Card>
  );
}

export default VideosCard;
