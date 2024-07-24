import * as React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Box } from "@mui/joy";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Box
      sx={{
        overflowY: { xs: "unset", lg: "hidden" },
        p: { xs: 0, md: 1 },
        height: { xs: "auto", lg: "100vh" },
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        width: "100%",
      }}
    >
      <Navbar />
      <Layout
        sx={{
          width: { xs: "100%", lg: "calc(100% - 75px)" },
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          height: "100%",
          overflowY: "auto",

        }}
      />
    </Box>
  );
}

export default App;
