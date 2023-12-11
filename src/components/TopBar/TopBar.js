import React from "react";
import { styles } from "./TopBarStyles";
import { RocketLaunchTwoTone } from "@mui/icons-material";

const TopBar = ({ headerMessage }) => {
  return (
    <div style={styles.container}>
      <div style={styles.containerItems}>
        <RocketLaunchTwoTone style={{ color: "white", height: "100%" }} />
      </div>
      <div style={styles.containerItems}>
        <p style={styles.headerText}>
          {!headerMessage ? "Please activate the status" : "Header Information"}
        </p>
      </div>
    </div>
  );
};

export default TopBar;
