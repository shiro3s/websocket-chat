import { FilePlus2 } from "lucide-react";
import React from "react";

import styles from "./style.module.css"

export const InputFile: React.FC = () => {
	return (
		<label htmlFor="inputFile" className={styles.label}>
			<input type="file" id="inputFile" className={styles.input} />
			<FilePlus2 size={16} />
		</label>
	);
};
