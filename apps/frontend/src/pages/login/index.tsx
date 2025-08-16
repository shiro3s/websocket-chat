import React from "react";
import { Btn } from "@/components/common/btn";
import { InputPassword } from "@/components/common/inputPassword";
import { InputText } from "@/components/common/inputText";
import styles from "./style.module.css";
import { useLogin } from "./useLogin";

export const LoginPage: React.FC = () => {
	const { register, errors, isSubmitting, handleSubmit, onSubmit } = useLogin();

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Login</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.field}>
					<label className={styles.label}>Username</label>
					<InputText placeholder="Username" register={register("username")} />
					{!!errors.username?.message && (
						<div className={styles.error}>{errors.username?.message}</div>
					)}
				</div>

				<div className={styles.field}>
					<label className={styles.label}>Password</label>
					<InputPassword
						placeholder="Password"
						register={register("password")}
					/>
					{!!errors.password?.message && (
						<div className={styles.error}>{errors.password?.message}</div>
					)}
				</div>

				<div>
					<Btn block theme="dark" disabled={isSubmitting} type="submit">
						Login
					</Btn>
				</div>
			</form>
		</div>
	);
};
