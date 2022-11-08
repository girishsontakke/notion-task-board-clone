import React from "react";
import styles from "./Status.module.scss";

function Status(props) {
  const { title, bgcolor, color } = props.status;
  return (
    <div
      style={{ backgroundColor: bgcolor, color: color }}
      className={styles.status}
    >
      {title}
    </div>
  );
}

export default Status;
