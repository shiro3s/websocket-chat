import React from "react";
import {Editor} from "@/components/common/editor"

import styles from "./style.module.css";

export const Form: React.FC = () => {
  return (
    <div className={styles.container}>
      <Editor />
    </div>
  )
}
