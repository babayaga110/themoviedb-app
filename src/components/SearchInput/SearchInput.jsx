import { Box, Input } from "@mui/joy";
import * as React from "react";

export default function SearchInput({ sx, handleChange, ...rest }) {
  return (
    <Input
      type="text"
      placeholder="Search for movies, TV shows, genres, etc."
      sx={{
        ...sx,
      }}
      {...rest}
      onChange={handleChange}
    />
  );
}

<SearchInput />;
