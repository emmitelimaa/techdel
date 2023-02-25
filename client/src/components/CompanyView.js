import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

import ReposList from "./ReposList";
import { API } from "../constants";
export default function CompanyView() {
  const { id } = useParams();
  const [company, setCompany] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = (open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setIsOpen(!isOpen);
  };

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
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(isOpen)}>
        <div style={{ width: "700px", padding: "20px" }}>
          <Typography variant="h2">{company.company_name}</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            100,234 Empolyees • blah
          </Typography>
          {company.repos && <ReposList repos={company.repos} />}
        </div>
      </Drawer>
    </>
  );
}
