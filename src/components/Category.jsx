import React from "react";
import { Stack } from "@mui/material";
import { category } from "../constants/category";
import { colors } from "../constants/colors";
import { v4 as uuidv4 } from "uuid";

function Category({ selectCategoryHandler, selectedCategory }) {
  return (
    <Stack direction={"row"} sx={{ overflowX: "auto" }}>
      {category.map(({ name, icon }) => (
        <button
          type="button"
          className={`category-btn ${
            selectedCategory === name ? "btn-active" : ""
          }`}
          style={{ borderRadius: 0 }}
          onClick={() => selectCategoryHandler(name)}
          key={uuidv4()}
        >
          <span style={{ color: colors.secondary }}>{icon}</span>
          <span style={{ opacity: 1 }}>{name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default Category;
