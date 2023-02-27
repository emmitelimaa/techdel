import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { URL } from "../constants";
import "./Header.scss";
// import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link style={{ color: "#fff", textDecoration: "none" }} to={URL.HOME}>
            <div className="logo">
              Techdel Test
              <span className="subtext"> The Bechdel Test for Tech</span>
            </div>
          </Link>

          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "right", flexGrow: 1, marginRight: 10 }}
          >
            <Link
              style={{ color: "#F5E9CF", textDecoration: "none" }}
              to={URL.COMPANIES}
            >
              View Companies
            </Link>
          </Typography>

          <Avatar sx={{ bgcolor: "#609EA2" }}>N</Avatar>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
