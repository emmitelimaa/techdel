import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/users">Users</Link>
        </nav>
      </header>
    </>
  );
}
