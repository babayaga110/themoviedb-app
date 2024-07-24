import { Box } from "@mui/joy";
import * as React from "react";
import SearchInput from "../components/SearchInput/SearchInput";
import { Search } from "@mui/icons-material";

export default function Layout({ sx, children }) {
  return (
    <Box
      sx={{
        ...sx,
      }}
    >
      <SearchInput
        sx={{
          width: "100%",
          padding: 2,
          minHeight: "55px",
          border: 'none',
          fontSize: ".95rem",
          backgroundColor: "#10141F",
          color: "#fff !important",
          "--Input-color": "#fff",
          "--Input-focusedThickness": "0px",
          "--Input-focusedBorderColor": "transparent",
          "& :hover": {
            color: "#fff",
          },
          [` .MuiInput-input::placeholder`]: {
            color: "#fff",
          },
        }}
        variant="plain"
        startDecorator={
          <Search
            sx={{
              color: "#fff",
              mr: 1.5,
            }}
          />
        }
      />
    {children}
    </Box>
  );
}
