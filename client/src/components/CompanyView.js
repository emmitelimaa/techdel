import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { API } from "../constants";
export default function CompanyView(props) {
  const { id } = useParams();
  const [company, setCompany] = useState([]);

  const getData = async () => {
    try {
      let response = await fetch(API.GET_COMPANY(id));
      if (response.ok) {
        let listItem = await response.json();
        setCompany(listItem);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server Error`, err);
    }
  };
  useEffect(() => {
    getData();
  }, [id]);
  return (
    <>
      <h2>{company.company_name}</h2>
    </>
  );
}
