import * as React from "react";
import {
  Avatar,
  Box,
  Dropdown,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  Menu,
  MenuButton,
  MenuItem,
} from "@mui/joy";

import {
  Bookmark,
  Dashboard,
  LiveTv,
  LocalMovies,
  Movie,
} from "@mui/icons-material";

export default function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 0, lg: 2 },
        height: { xs: "75px", lg: "100%" },
        width: { xs: "100%", lg: "75px" },
        flexDirection: { xs: "row", lg: "column" },
        alignItems: "center",
        justifyContent: { xs: "space-between", lg: "center" },
        backgroundColor: "#161D2F",
        borderRadius:{ xs: "0", md: "8px" },
        py: { xs: 0, lg: 2 },
        px: { xs: 2, lg: 0 },
      }}
    >
      <IconButton
        variant="plain"
        color="plain"
        sx={{
          [`&:focus`]: {
            outline: "none",
          },
        }}
      >
        <Movie
          sx={{
            fontSize: {
              xs: "2rem",
              lg: "2.2rem",
            },
          }}
          className="text-red"
        />
      </IconButton>
      <List
        role="menubar"
        sx={{
          "--List-radius": "8px",
          "--List-padding": "4px",
          "--List-gap": { xs: 0, lg: "8px" },
          "--ListItem-gap": "0px",
          "--ListItemButton-color": "#526688",
          [`& .MuiListItemButton-root`]: {
            color: "#526688",
            backgroundColor: "transparent",
            "&:hover": {
              color: "white",
              backgroundColor: "transparent !important",
            },
          },
          [`& .MuiListItemButton-root.Mui-selected`]: {
            color: "white",
            backgroundColor: "transparent",
          },
          flexDirection: { xs: "row", lg: "column" },
          justifyContent: { xs: "center", lg: "flex-start" },
        }}
      >
        <ListItem role="none">
          <ListItemButton role="menuitem" component="div" selected>
            <Dashboard />
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component="div">
            <LocalMovies />
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component="div">
            <LiveTv />
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component="div">
            <Bookmark />
          </ListItemButton>
        </ListItem>
      </List>
      <Dropdown>
        <MenuButton
          slots={{ root: IconButton }}
          slotProps={{ root: { variant: "outlined", color: "neutral" } }}
          sx={{
            borderRadius: "50%",
            p: 0,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{
              width: "40px",
              height: "40px",
            }}
          />
        </MenuButton>
        <Menu placement="bottom-end">
          <MenuItem>Profile</MenuItem>
        </Menu>
      </Dropdown>
    </Box>
  );
}
