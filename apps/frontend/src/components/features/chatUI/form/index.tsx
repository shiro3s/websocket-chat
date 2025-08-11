import { SendHorizonal } from "lucide-react";
import React from "react";
import { Btn } from "@/components/common/btn";
import { Editor } from "@/components/common/editor";
import { InputFile } from "@/components/common/inputFile";
import styles from "./style.module.css";

export const Form: React.FC = () => {
	return (
		<div className={styles.container}>
			<Editor />
			<div className={styles.action}>
				<InputFile />

				<Btn theme="success" size="small">
					<SendHorizonal />
				</Btn>
			</div>
		</div>
	);
};
