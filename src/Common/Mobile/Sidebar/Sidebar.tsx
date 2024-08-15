import { useState } from "react";
import type { Theme } from "@mui/material";
import { Drawer, ListItemButton } from "@mui/material";
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
import home from "../../../img/home.png";
import { useNavigate } from "react-router-dom";

interface Props {
  open: boolean;
  drawerWidth: number;
  handleDrawerClose: () => void;
  theme: Theme;
}

const menuItems = [
  { link: "/m", icon: home, text: 'Home' },
  { link: "/m/casino/super-casino/tab", icon: casino, text: "Live Casino", className: "exchangegame" },
  { link: "/m/sport/4", icon: bat, text: "Cricket", className: "cricket" },
  { link: "/m/sport/1", icon: football, text: "Football", className: "football" },
  { link: "/m/sport/2", icon: tennis, text: "Tennis", className: "tennis" },
  { link: "/m/sport/basketball", icon: sports_basketball, text: "Basketball", className: "basketball" },
  { link: "/m/sport/golf", icon: sports_golf, text: "Golf", className: "golf" },
  { link: "/m/sport/horse", icon: sports_horse, text: "Horse Racing", className: "horseracing" },
  { link: "/m/sport/greyhound", icon: sports_mma, text: "Greyhound Racing", className: "greyhoundracing" },
  { link: "/m/sport/esport", icon: esports, text: "E-Sports", className: "esports" },
  { link: "", icon: public_p, text: "Politics", className: "politics" },
  { link: "/m/sport/genie", icon: whatshot, text: "Genie Bet" },
];

const Sidebar: FC<Props> = ({
  open,
  drawerWidth,
  handleDrawerClose,
  theme,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nav = useNavigate();

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
      anchor="left"
      open={open}
    >
      <List
        sx={{
          paddingTop: 0,
        }}
      >
        {menuItems.map((item, index) => (
          <ListItem
            key={item.text}
            disablePadding
            onClick={() => handleListItemClick(index, item?.link)}
            className={selectedIndex === index ? "selected" : ""}
            sx={{
              margin:"0px"
            }}
          >
            <ListItemButton sx={{
              padding: "10px 16px !important",
              borderTop: "1px solid #f2f2f2",

            }}>
              <ListItemIcon
                sx={{
                  color: selectedIndex === index ? "#fff" : "#000",
                  minWidth: "30px",
                }}
              >
                <img src={item?.icon} alt="" width={20} className={selectedIndex === index ? "change_color" : ""} />
              </ListItemIcon>
              <ListItemText
                className="font_change"
                primary={item.text}
                sx={{

                  "& .MuiTypography-root": {
                    display: "flex",
                    alignItems: "center",
                    color: selectedIndex === index ? "#fff" : "#000",
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

export default Sidebar;
