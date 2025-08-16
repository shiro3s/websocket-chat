import React from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { AuthRoute } from "./AuthRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route element={<PublicRoute />}>
				<Route path="/login" Component={LoginPage} />
			</Route>

			<Route element={<AuthRoute />}>
				<Route path="/" Component={HomePage} />
			</Route>
		</Routes>
	);
};
