import React from "react";
import styles from "./style.module.css";
import { useEditor } from "./useEditor";

import "./style.css";

export const Editor: React.FC = () => {
	const { contentRef } = useEditor();

	return <div ref={contentRef} className={styles.editor} />;
};
