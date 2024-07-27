import type React from "react";
import {
  Toolbar,
  Button,
  Box,
  useMediaQuery,
  Modal,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FaSearch } from "react-icons/fa";
import logo from "../../../img/logo.svg";
import LoginModals from "../../LoginModals/LoginModals";
import { useState } from "react";
import { AppBar } from "../../Mainlayout/Mainlayout";
import PersonIcon from '@mui/icons-material/Person';

interface Props {
  openApp: boolean;
  openRight: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  handleDrawerOpenRight: () => void
}

const Navbar: React.FC<Props> = ({ openApp, handleDrawerOpen,handleDrawerOpenRight, openRight }) => {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isLogin = false;

  return (
    <Box sx={{ flexGrow: 1,
      marginLeft:openRight?"-260px":"0",
      width:"100%"
     }}>
      <AppBar
        position="sticky"
        open={openApp}
        color="primary"
        sx={{
          backgroundColor: "#000000",
          minHeight: "60px",
          paddingRight: { xs: "5px", md: "5px" },
          paddingLeft: { xs: "5px", md: "5px" },
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            padding: { xs: "0px", md: "0px" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ pt: 0, pb: 0, mr: 2, display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >{isSmallScreen && (<MenuIcon aria-label="open drawer" onClick={handleDrawerOpen}  style={{
              fontSize:"25px",
              marginLeft: "3px"
            }}/>)}</IconButton>
            <Box component="div">
              <img
                src={logo}
                alt=""
                style={{ marginLeft: "3px" }}
                height={40}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box><FaSearch className="font_searchs" /></Box>
            {
              isLogin ?
            <Button
              onClick={handleOpen}
              color="inherit"
              sx={{
                bgcolor: "#ffc629",
                border: "1px solid #ffc629",
                color: "#000000",
                fontSize: "12px",
                textTransform: "capitalize",
                padding: { sx: "0px 4px", md: "0px 10px" },
                minHeight: "35px",
                minWidth: "unset",
                fontFamily: "Lato",
                "&:hover": {
                  backgroundColor: "#ffc629",
                },
                "&:active": {
                  backgroundColor: "#ffc629",
                },
              }}
            >
             Login
            </Button>:
            <Button
            onClick={handleDrawerOpenRight}
              color="inherit"
              sx={{
                bgcolor: "#ffc629",
                border: "1px solid #ffc629",
                color: "#000000",
                fontSize: "12px",
                textTransform: "capitalize",
                padding: { sx: "4px 4px", md: "4px 10px" },
                minHeight: "35px",
                minWidth: "unset",
                fontFamily: "Lato",
                "&:hover": {
                  backgroundColor: "#ffc629",
                },
                "&:active": {
                  backgroundColor: "#ffc629",
                },
              }}
            >
             <Typography sx={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center",
              gap:"2px",
              fontSize:"14px",
              fontWeight:600
             }}>
             <PersonIcon /> 
             <span> 61.0</span>
             </Typography>
            </Button>   }
          </Box>
        </Toolbar>
      </AppBar>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <LoginModals handleClose={handleClose} />
      </Modal>
    </Box>
  );
};

export default Navbar;
