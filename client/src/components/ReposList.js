import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { formatDate } from "../helpers";
export default function ReposList(props) {
  return (
    <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
      <Typography variant="h5">Repos</Typography>
      {props.repos.map((repo) => (
        <ListItem key={repo.id}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#332C39" }}>N</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={repo.repo_name}
            secondary={`Date Added: ${formatDate(
              repo.created_date
            )} • Team Name: ${repo.team_name} • Primary Technology: ${
              repo.technology
            }`}
          />
        </ListItem>
      ))}
    </List>
  );
}
