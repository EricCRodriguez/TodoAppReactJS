import {
  ListItemText,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import "./Todo.css";
import React from "react";

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary="Deadline" />
      </ListItem>
    </List>
  );
}

export default Todo;
