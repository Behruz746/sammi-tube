import React from "react";
import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function ChannelCard({ video, marginTop }) {
  return (
    <NavLink
      to={`/channel/${
        video?.snippet?.channelId ? video?.snippet?.channelId : video?.id
      }`}
    >
      <Box
        sx={{
          boxShadow: "none",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "326px", md: "320px" },
          height: "326px",
          margin: "auto",
          marginTop: marginTop,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            loading={"lazy"}
            width={180}
            height={180}
            src={video?.snippet?.thumbnails?.url}
            alt={video?.snippet?.title}
            style={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {video?.snippet?.title}{" "}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
          </Typography>
          {video?.statistics?.subscripberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: "500", color: "gray" }}
            >
              {parseInt(
                video?.statistics?.subscripberCount.toLocaleString("en-US")
              )}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Box>
    </NavLink>
  );
}

export default ChannelCard;
