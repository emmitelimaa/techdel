import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { URL } from "../constants";
import Typography from "@mui/material/Typography";

export default function CompaniesView(props) {
  return (
    <>
      <Container>
        <Typography variant="h2" component="div">
          Company List
        </Typography>
        <Grid container spacing={2}>
          {props.companies.map((company) => (
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
