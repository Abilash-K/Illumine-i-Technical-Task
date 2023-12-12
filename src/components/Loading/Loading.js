import React from "react";
import Load from "./Loading.gif";
import { styles } from "./LoadingStyles";
const Loading = () => {
  return (
    <div style={styles.container}>
      <div>
        <img src={Load} />
      </div>
    </div>
  );
};

export default Loading;
