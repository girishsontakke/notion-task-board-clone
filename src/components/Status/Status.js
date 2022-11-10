import React from "react";
import styles from "./Status.module.scss";

function Status(props) {
  const { title, bgcolor, color } = props.status;
  return (
    <div className={styles.statusContainer}>
      <div
        style={{ backgroundColor: bgcolor, color: color }}
        className={styles.status}
      >
        {title}
      </div>
      <span className={styles.count}>{props.count}</span>
    </div>
  );
}

export default Status;
