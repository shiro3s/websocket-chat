import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import { nonEmpty, object, pipe, string } from "valibot";

type FormState = {
	username: string;
	password: string;
};

const schema = object({
	username: pipe(string(), nonEmpty("Username is required")),
	password: pipe(string(), nonEmpty("Password is required")),
});

export const useLogin = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormState>({
		resolver: valibotResolver(schema),
	});

	const onSubmit = (formValue: FormState) => {
		console.log(formValue);
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		isSubmitting,
	};
};
