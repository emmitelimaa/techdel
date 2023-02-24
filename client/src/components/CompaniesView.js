import React from "react";
import { Link, Outlet } from "react-router-dom";
import CompanyCard from "./Card";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { URL } from "../constants";
export default function CompaniesView(props) {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {props.companies.map((company) => (
            <Grid spacing={3} item key={company.id}>
              <Link to={`/companies/${company.id}`}>
                <CompanyCard companyInfo={company} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Outlet />
    </div>
  );
}
