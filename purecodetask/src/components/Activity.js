import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const Activity = () => {
  const list = [
    {
      id: 1,
      orderId: "#16708",
      time: "a day ago",
    },
    {
      id: 2,
      orderId: "#16709",
      time: "2 days ago",
    },
    {
      id: 3,
      orderId: "#16729",
      time: "2 days ago",
    },
  ];
  return (
    <Box>
      Activity
      <List display="flex" flexDirection="column">
        {list.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={`Order ${item.orderId} was placed`}    secondary={item.time}></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Activity;
