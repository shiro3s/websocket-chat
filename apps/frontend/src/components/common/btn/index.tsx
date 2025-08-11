import React from "react";
import styles from "./style.module.css";

type Size = "small" | "medium" | "large";
type Theme = "primary" | "success" | "dark" | "light";

interface Props {
	block?: boolean;
	children?: React.ReactNode;
	disabled?: boolean;
	round?: boolean;
	outlined?: boolean;
	size?: Size;
	theme?: Theme;
	type?: HTMLButtonElement["type"];
	onClick?: (event?: React.MouseEvent) => void;
}

export const Btn: React.FC<Props> = ({
	block,
	children,
	disabled,
	round,
	outlined,
	size = "medium",
	theme = "light",
	type = "button",
	onClick,
}) => {
	return (
		<button
			disabled={disabled}
			type={type}
			onClick={onClick}
			data-block={block}
			data-size={size}
			data-round={round}
			data-theme={theme}
			data-outlined={outlined}
			className={styles.container}
		>
			{children}
		</button>
	);
};
