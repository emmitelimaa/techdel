import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CompanyCard from "./Card";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { URL } from "../constants";
import { CompanyContext } from "../App";
import Typography from "@mui/material/Typography";

export default function CompaniesView() {
  const companies = useContext(CompanyContext);
  return (
    <>
      <Container>
        <Typography variant="h2" component="div">
          Company List
        </Typography>
        <Grid container spacing={2}>
          {companies.map((company) => (
            <Grid spacing={3} item key={company.id}>
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
