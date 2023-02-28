import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import BusinessIcon from "@mui/icons-material/Business";

export default function CompanyCard(props) {
  return (
    <Box sx={{ width: 275 }}>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Private
            </Typography>
            <Typography variant="h6" className="truncate-single">
              <div style={{ display: "flex", alignItems: "center" }}>
                <BusinessIcon style={{ marginRight: 10 }}></BusinessIcon>
                {props.companyInfo.company_name}
              </div>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.companyInfo.repos.length} Repos
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </CardActionArea>
      </Card>
    </Box>
  );
}
