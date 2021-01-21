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
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.text} secondary="Deadline" />
      </ListItem>
    </List>
  );
}

export default Todo;
