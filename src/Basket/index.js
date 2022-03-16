import { bool, func } from "prop-types";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Image } from "@mui/icons-material";
import { List, Title, Total } from "./styles";
import { useBeers } from "../hooks";

export default function Basket({ open = false, toggle = Function.prototype }) {
  const [basket, reducer] = React.useReducer({
    name: "",
    price: "",
    imageUri: "",
  });
  return (
    <Drawer anchor="right" open={open} onClose={toggle}>
      <Title variant="h4" components="h6">
        Mon panier
      </Title>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
      <Box>
        <Typography variant="h5" component="h6">
          Total
        </Typography>

        <Typography variant="h5" component="h6">
          12.34 €
        </Typography>
      </Box>
    </Drawer>
  );
}

Basket.propTypes = {
  open: bool,
  toggle: func,
};
