import React from "react";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";

import { formatDate } from "../helpers";
export default function CompanyDrawer({ children, company, isOpen, onClose }) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      {company && (
        <div style={{ width: "700px", padding: "20px" }}>
          <Typography variant="h3">{company.company_name}</Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            <strong>Employees:</strong>100,230 • <strong>Date Added:</strong>
            &nbsp;{formatDate(company.created_date)} •
            <strong>Date Modified:</strong>
            &nbsp;{formatDate(company.modifed_date)}
          </Typography>

          {children}
        </div>
      )}
    </Drawer>
  );
}
