import { useState } from "react";
import type { Theme } from "@mui/material";
import { Box, Drawer, ListItemButton, Typography } from "@mui/material";
import type { FC } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Setting from "../../../img/settings-sliders.png";
import bat from "../../../img/coupon.png";
import batting from "../../../img/value.png";
import tennis from "../../../img/tennis-ball.png";
import time from "../../../img/clock.png";
import lock from "../../../img/lock.png";
import doc from "../../../img/document1.png";
import kyc from "../../../img/information.png";
import gamming from "../../../img/file-check.png";
import policy from "../../../img/error.png";
import download from "../../../img/down-arrow.png";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import React from "react";
import { useNavigate } from "react-router-dom";
import { loginSelector } from "../../../utils/slice/loginSlice";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useSelector } from "react-redux";

interface Props {
  openRight: boolean;
  drawerWidth: number;
  handleDrawerClose: () => void;
  theme: Theme;
  userData: User
}

const menuItems = [
  { link: "/m/settings", icon: Setting, text: "Setting"},
  { link: "/m/open-bets", icon: bat, text: "Open Bet",  },
  { link: "/m/betting-pnl", icon: batting, text: "Betting P&L"},
  { link: "/m/transfer", icon: tennis, text: "Transfer Statement" },
  {link: "/m/time-settings", icon: time,text: "Time Setting"},
  { link: "/m/change-password", icon: lock, text: "Change Password"},
  {link: "/m/rules-regs",icon: doc,text: "Rule & Regulation"},
  {link: "/m/kyc",icon: kyc,text: "KYC"},
  { link: "/m/responsible-gambling", icon: gamming, text: "Responsive Gamming"},
  { link: "/m/exclusion-policy", icon: policy, text: "Exclusion Policy"},
  { link: "#", icon: download, text: "Download App"},
  { link: "", icon: AccountBalanceIcon, text: "Sign Out"},
];

const RightsideBar: FC<Props> = ({
  openRight,
  drawerWidth,
  handleDrawerClose,
  theme,
  userData
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const nav  = useNavigate();
  const loginData = useSelector(loginSelector);

  const handleListItemClick = (index: number, link:string) => {
    setSelectedIndex(index);
    handleDrawerClose();
    nav(link)
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
                  <strong>{userData?.balance}</strong>
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
                    color:   Number(userData?.profit_loss) > 0?"green":"red",
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <strong>{userData?.profit_loss}</strong>
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
                  <strong>{userData?.liability}</strong>
                </Typography>
              </Box>
            </div>
          </ListItemButton>
        </ListItem>
        {menuItems.map((item, index) => (
          <ListItem
            key={item.text}
            disablePadding
            onClick={() => handleListItemClick(index, item?.link)}
           
          >
            <ListItemButton
              sx={{
                padding: "5px 16px !important",
                borderTop: "1px solid #f2f2f2",
              }}
            >
              <ListItemIcon
                sx={{
                 
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
