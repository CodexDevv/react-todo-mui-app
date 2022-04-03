import React from "react";
import { styled } from "@mui/system";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

const FlexDiv = styled("div")({
  display: "flex",
});

const StyledDiv = styled("div")({
  backgroundColor: "#f9f9f9",
  width: "100%",
});

export default function Layout({ children }) {
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <FlexDiv>
      <Drawer
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography
            variant="h5"
            sx={{
              padding: "1rem",
            }}
          >
            Notes App
          </Typography>
        </div>

        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              onClick={() => navigate(item.path)}
              key={index}
              sx={{
                background: location.pathname == item.path ? "#f4f4f4" : null,
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <StyledDiv>{children}</StyledDiv>
    </FlexDiv>
  );
}
