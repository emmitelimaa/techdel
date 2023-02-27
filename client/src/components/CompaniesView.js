import React from "react";
import { Link, Outlet } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

import Container from "@mui/material/Container";
import CompanyCard from "./CompanyCard";
import { URL, API } from "../constants";
import useFetch from "../useFetch";

export default function CompaniesView() {
  const { data } = useFetch(`${API.GET_ALL}`);
  const handleClick = (e, id) => {
    const event = new CustomEvent("onDrawerOpen", { detail: id });
    document.dispatchEvent(event);
  };
  return (
    <>
      <Container>
        <h2 className="emphasis">Company Registry </h2>
        <Grid container spacing={2}>
          {data &&
            data.map((company) => (
              <Grid
                spacing={3}
                item
                key={company.id}
                onClick={(e) => {
                  handleClick(e, company.id);
                }}
              >
                <Link
                  to={URL.COMPANY(company.id)}
                  style={{ textDecoration: "none" }}
                >
                  <CompanyCard companyInfo={company} />
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>

      <Outlet />
    </>
  );
}
