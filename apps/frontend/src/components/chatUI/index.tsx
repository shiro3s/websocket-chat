import React from "react";
import { Content } from "./content";
import { Form } from "./form";
import { Header } from "./header";

import styles from "./style.module.css";

export const ChatUI: React.FC = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Content />
			<Form />
		</div>
	);
};
