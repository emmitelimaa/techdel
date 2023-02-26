import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { URL, API } from "../constants";
import Typography from "@mui/material/Typography";
import useFetch from "../useFetch";
export default function CompaniesView() {
  const { data, loading, error } = useFetch(`${API.GET_ALL}`);
  const handleClick = (e, id) => {
    //First, we initialize our event
    const event = new CustomEvent("onDrawerOpen", { detail: id });

    // Next, we dispatch the event.
    document.dispatchEvent(event);
  };
  return (
    <>
      <Container>
        <Typography variant="h5" component="div">
          Company List
        </Typography>
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
