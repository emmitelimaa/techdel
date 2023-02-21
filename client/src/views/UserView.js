import React from "react";
import { useParams } from "react-router-dom";
import users from "../database.json";

export default function UserView() {
  const { id } = useParams();
  const user = users.find((user) => +user.id === +id);
  return (
    <div>
      <h2>{user.name}'s page</h2>
    </div>
  );
}
