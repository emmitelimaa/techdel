import React from "react";
import users from "../database.json";
import { Link, Outlet } from "react-router-dom";

export default function UsersView() {
  return (
    <div>
      Users View:
      {users.map((user) => (
        <div key={user.id}>
          <p>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </p>
        </div>
      ))}
      <Outlet />
    </div>
  );
}
