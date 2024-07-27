import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./style.scss";
import type { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiAppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";
import Sidebar from "../Mobile/Sidebar/Sidebar";
import Navbar from "../Mobile/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import RightsideBar from "../Mobile/RightsideBar/RightsideBar";

const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  //   marginLeft: `-${drawerWidth}px`,
  ...(open && {
    marginLeft: `${drawerWidth}px`,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100%)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Mainlayout = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerOpenRight = () => {
    setOpenRight(!openRight);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpenRight(false);
  };
  return (
    <Box sx={{ background: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      {open && <div className="overlay" onClick={handleDrawerClose}></div>}
      {openRight && <div className="overlay" onClick={handleDrawerClose}></div>}
      <Navbar
        openApp={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpenRight={handleDrawerOpenRight}
        openRight={openRight}
      />

      <Sidebar
        drawerWidth={drawerWidth}
        open={open}
        handleDrawerClose={handleDrawerClose}
        theme={theme}
      />
      <RightsideBar
        openRight={openRight}
        handleDrawerClose={handleDrawerClose}
        theme={theme}
        drawerWidth={drawerWidth}
      />
      {openRight ? (
        <Main
          open={openRight}
          sx={{
            width: "100%",
            p: 0,
            marginLeft: openRight ? "-260px" : "0",
          }}
        >
          <Outlet />
        </Main>
      ) : (
        <Main
          open={open}
          sx={{
            width: "100%",
            p: 0,
          }}
        >
          <Outlet />
        </Main>
      )}
    </Box>
  );
};

export default Mainlayout;
