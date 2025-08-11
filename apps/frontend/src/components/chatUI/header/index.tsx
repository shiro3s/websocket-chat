import React from "react";
import styles from "./style.module.css"

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <h3 className={styles.name}>Name</h3>
    </header>
  )
}
