import type React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import styles from "./style.module.css";

interface Props {
	value?: string | number;
	autoComplete?: string;
	placeholder?: string;
	maxLength?: number;
	minLength?: number;
	register?: UseFormRegisterReturn;
}

export const InputText: React.FC<Props> = ({
	value,
	autoComplete = "off",
	placeholder,
	maxLength,
	minLength,
	register,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<input
					{...register}
					className={styles.input}
					defaultValue={value}
					autoComplete={autoComplete}
					placeholder={placeholder}
					maxLength={maxLength}
					minLength={minLength}
				/>
			</div>
		</div>
	);
};
