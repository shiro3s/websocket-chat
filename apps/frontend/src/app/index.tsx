import React from "react";
import { ChatUI } from "@/components/features/chatUI";
import { useWebsocket } from "@/hooks/useWebsocket";

import styles from "./style.module.css";

export const App: React.FC = () => {
	useWebsocket();

	return (
		<div className={styles.container}>
			<ChatUI />
		</div>
	);
};
