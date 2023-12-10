import React from "react";
import { Button } from "@mui/material";
import { Save } from "@mui/icons-material";
import { styles } from "./TopBarStyles";

const TopBar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.containerItems}>
        <p style={styles.headerText}>Header Information</p>
      </div>
      <div style={styles.containerItems}>
        <Button
          sx={{ borderRadius: "12px", backgroundColor: "#F57170" }}
          size="Large"
          variant="contained"
          startIcon={<Save />}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
