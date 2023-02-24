import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
/*
 <Link to={`/companies/${company.id}`}>
                  {company.company_name}
                </Link>
*/

export default function CompanyCard(props) {
  return (
    <Box sx={{ width: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Public / Private
          </Typography>
          <Typography variant="h5" component="div">
            {props.companyInfo.company_name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.companyInfo.repos.length} Repos
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
