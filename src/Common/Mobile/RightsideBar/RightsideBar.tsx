import { useState } from "react";
import type { Theme } from "@mui/material";
import { Box, Drawer, ListItemButton, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import type { FC } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import casino from "../../../img/casino.png";
import bat from "../../../img/cricket.png";
import football from "../../../img/football.png";
import tennis from "../../../img/tennis-ball.png";
import sports_basketball from "../../../img/basketball.png";
import sports_golf from "../../../img/golf-ball.png";
import sports_horse from "../../../img/horse-head.png";
import sports_mma from "../../../img/greyhound.png";
import esports from "../../../img/multiplayer.png";
import public_p from "../../../img/documents.png";
import whatshot from "../../../img/genie.png";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

interface Props {
  openRight: boolean;
  drawerWidth: number;
  handleDrawerClose: () => void;
  theme: Theme;
}

const menuItems = [
  { link: "", icon: "star_border", text: "Home" },
  { link: "", icon: casino, text: "Live Casino", className: "exchangegame" },
  { link: "", icon: bat, text: "Cricket", className: "cricket" },
  { link: "", icon: football, text: "Football", className: "football" },
  { link: "", icon: tennis, text: "Tennis", className: "tennis" },
  {
    link: "",
    icon: sports_basketball,
    text: "Basketball",
    className: "basketball",
  },
  { link: "", icon: sports_golf, text: "Golf", className: "golf" },
  {
    link: "",
    icon: sports_horse,
    text: "Horse Racing",
    className: "horseracing",
  },
  {
    link: "",
    icon: sports_mma,
    text: "Greyhound Racing",
    className: "greyhoundracing",
  },
  { link: "", icon: esports, text: "E-Sports", className: "esports" },
  { link: "", icon: public_p, text: "Politics", className: "politics" },
  { link: "", icon: whatshot, text: "Genie Bet" },
];

const RightsideBar: FC<Props> = ({
  openRight,
  drawerWidth,
  handleDrawerClose,
  theme,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
    handleDrawerClose();
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#ffffff",
          color: "#000",
          zIndex: 99999,
        },
      }}
      variant="persistent"
      anchor="right"
      open={openRight}
    >
      <List
        sx={{
          paddingTop: 0,
        }}
      >
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              padding: "10px 16px !important",
              borderTop: "1px solid #f2f2f2",
            }}
          >
            <ListItemText
              className="font_change"
              primary={"User Name"}
              sx={{
                "& .MuiTypography-root": {
                  color: "#000000",
                  fontSize: "16px",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: "bold !important",
                },
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              padding: "10px 16px !important",
              borderTop: "1px solid #f2f2f2",
            }}
          >
            <div className="account-item">
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  margin: "0px 0px 15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <AccountBalanceIcon /> Balance Information
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  Available Credit:
                </Typography>
                <Typography
                  sx={{
                    textAlign: "right",
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <strong>0.0</strong>
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  Credit Limit:
                </Typography>
                <Typography
                  sx={{
                    textAlign: "right",
                    fontSize: "14px",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <strong>0.0</strong>
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  {" "}
                  Winnings:
                </Typography>
                <Typography
                  sx={{
                    textAlign: "right",
                    fontSize: "14px",
                    color: "red",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <strong>0.0</strong>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  Net Exposure:
                </Typography>
                <Typography
                  sx={{
                    textAlign: "right",
                    fontSize: "14px",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <strong>0.0</strong>
                </Typography>
              </Box>
            </div>
          </ListItemButton>
        </ListItem>
        {menuItems.map((item, index) => (
          <ListItem
            key={item.text}
            disablePadding
            onClick={() => handleListItemClick(index)}
            className={selectedIndex === index ? "selected" : ""}
          >
            <ListItemButton
              sx={{
                padding: "10px 16px !important",
                borderTop: "1px solid #f2f2f2",
              }}
            >
              <ListItemIcon
                sx={{
                  color: selectedIndex === index ? "#fff" : "#000",
                  minWidth: "30px",
                }}
              >
                <img src={item?.icon} alt="" width={20} />
              </ListItemIcon>
              <ListItemText
                className="font_change"
                primary={item.text}
                sx={{
                  "& .MuiTypography-root": {
                    display: "flex",
                    alignItems: "center",

                    color: "#000000",
                    fontSize: "16px",
                    textAlign: "left",
                    textDecoration: "none",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default RightsideBar;
