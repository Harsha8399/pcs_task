import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Topbar from "./topbar";
import Grid from "@mui/material/Grid";
import { minWidth } from "@mui/system";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Card, CardContent, Stack, Icon, createTheme, ThemeProvider } from "@mui/material";
import BasicCard from "./Dashcards.js";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { sizing } from "@mui/system";
// import { minWidth } from '@mui/system';
import Activity from "./Activity";
import { purple } from "@mui/material/colors";

const drawerWidth = 240;

const leftmenu = [
  {
    id: 0,
    name: "Home",
    avatarIcon: DashboardOutlinedIcon,
  },
  {
    id: 1,
    name: "Catalog",
    avatarIcon: Inventory2OutlinedIcon,
  },
  {
    id: 2,
    name: "Orders",
    avatarIcon: ShoppingCartOutlinedIcon,
  },
  {
    id: 3,
    name: "Customers",
    avatarIcon: PermIdentityOutlinedIcon,
  },
  {
    id: 4,
    name: "Discounts",
    avatarIcon: LocalOfferOutlinedIcon,
  },
  {
    id: 5,
    name: "Pages",
    avatarIcon: DescriptionOutlinedIcon,
  },
  {
    id: 6,
    name: "Apps",
    avatarIcon: DashboardCustomizeOutlinedIcon,
  },
  {
    id: 7,
    name: "Translation",
    avatarIcon: LanguageOutlinedIcon,
  },
  {
    id: 8,
    name: "Configuration",
    avatarIcon: SettingsOutlinedIcon,
  },
];

export default function PermanentDrawerLeft() {
    const theme = createTheme({
        palette:{
          primary:{
            main: "#0052cc"
          },
          secondary:purple
        }
      })
  return (
    <ThemeProvider theme={theme}>
      <Topbar />
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        //   disableElevation
        >
          <Toolbar />
          <List>
            {leftmenu.map((list) => (
              <ListItem key={list.id} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <list.avatarIcon></list.avatarIcon>
                  </ListItemIcon>
                  <ListItemText primary={list.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
      <Box
        component="main"
        display="flex"
        // flexGrow="1"
        // z-index="3"
        sx={{ m: 10 }}
      >
        <Toolbar />
        <Box sx={{ ml: 3 }}>
          <Typography variant="h4">Hello there, admin@example.com</Typography>
          <Typography variant="h6" fontSize={14}>
            Here is some information we gathered about your store
          </Typography>
        </Box>
        <Box></Box>
      </Box>
    </ThemeProvider>
  );
}
