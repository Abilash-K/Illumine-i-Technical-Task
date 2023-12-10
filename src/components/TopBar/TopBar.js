import React from "react";
import { styles } from "./TopBarStyles";

const TopBar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.containerItems}>
        <p style={styles.headerText}>Header Information</p>
      </div>
    </div>
  );
};

export default TopBar;
