import React from "react";
import {ChatUI} from "@/components/chatUI"

import styles from "./style.module.css"

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <ChatUI />
    </div>
  ) 
}
