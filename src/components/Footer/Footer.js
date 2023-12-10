import React from "react";
import { styles } from "./FooterStyles";
import { Button } from "@mui/material";
import { Save } from "@mui/icons-material";

const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.containerItems}>
        <Button
          sx={{ borderRadius: "12px", backgroundColor: "#F57170" }}
          style={{ marginRight: "0.25rem" }}
          size="Large"
          variant="contained"
          startIcon={<Save />}
        >
          Reset
        </Button>
        <Button
          sx={{ borderRadius: "12px", backgroundColor: "white" }}
          size="Large"
          variant="outlined"
          startIcon={<Save />}
          color="error"
        >
          Cancel
        </Button>
      </div>
      <div style={styles.containerItems}>
        <Button
          sx={{ borderRadius: "12px" }}
          size="Large"
          variant="contained"
          color="success"
          startIcon={<Save />}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Footer;
