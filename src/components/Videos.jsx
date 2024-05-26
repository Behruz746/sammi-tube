import React from "react";
import { Stack, Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { VideosCard, ChannelCard } from "./";

function Videos({ videos }) {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
    >
      {videos?.map((item) => (
        <Box key={uuidv4()}>
          {item.id.videoId && <VideosCard video={item} />}
          {item.snippet.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
