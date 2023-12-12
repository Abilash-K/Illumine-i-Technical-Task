import React, { useEffect, useState } from "react";
import { styles } from "./FooterStyles";
import { Button } from "@mui/material";
import { Save } from "@mui/icons-material";

const Footer = ({ saveData }) => {
    // State hook to manage the current date
  const [date, setDate] = useState("");

    // useEffect to set the current date when the component mounts
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString() + "";
    setDate(currentDate);
  }, []);

    // Container for the footer with defined styles
  return (
    <div style={styles.container}>
      <div style={styles.containerItems}>
        <p>Date : {date} </p>
      </div>
      <div style={styles.containerItems}>
        <Button
          sx={{
            borderRadius: "12px",
            marginRight: "1rem",
            width: "150px",
            height: "50px",
          }}
          size="Large"
          variant="contained"
          color="success"
          startIcon={<Save />}
          onClick={saveData}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Footer;
