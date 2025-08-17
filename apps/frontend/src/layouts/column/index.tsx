import React from "react";
import { SideMenu } from "@/components/layouts/sidemenu";

import styles from "./style.module.css";

interface Props {
	children: React.ReactNode;
}

export const ColumnLayout: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<SideMenu />
			<main className={styles.main}>{children}</main>
		</div>
	);
};
