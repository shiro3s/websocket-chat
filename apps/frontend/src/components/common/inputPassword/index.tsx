import { Eye, EyeOff } from "lucide-react";
import type React from "react";
import { useCallback, useState } from "react";
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

export const InputPassword: React.FC<Props> = ({
	value,
	autoComplete = "off",
	placeholder,
	maxLength,
	minLength,
	register,
}) => {
	const [visible, setVisible] = useState(false);
	const handleClick = useCallback(() => {
		setVisible((pre) => !pre);
	}, []);

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
					type={visible ? "text" : "password"}
				/>

				<span
					className={styles.suffix}
					onClick={handleClick}
					role="presentation"
				>
					{visible ? (
						<Eye size={16} color="#606266" />
					) : (
						<EyeOff size={16} color="#606266" />
					)}
				</span>
			</div>
		</div>
	);
};
