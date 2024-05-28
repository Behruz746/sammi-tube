import React from "react";
import { Typography } from "@mui/material";

const NotFoundEr = ({ error }) => (
  <div className="error-container">
    <Typography variant="h4" fontWeight={"bold"} p={2}>
      Error:{" "}
      {error?.request?.status === 0
        ? "networks not found"
        : error?.request?.status}
      ;
    </Typography>
  </div>
);

export default NotFoundEr;
