import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function ReposList(props) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Typography variant="h5">Repos</Typography>
      {props.repos.map((repo) => (
        <ListItem key={repo.id}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#332C39" }}>N</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={repo.repo_name}
            secondary={`<strong>Date Added:</strong> ${repo.created_date} • <strong>Team Name:</strong> • {})`}
          />
        </ListItem>
      ))}
    </List>
  );
}
