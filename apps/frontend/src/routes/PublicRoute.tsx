import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "@/libs/redux";

export const PublicRoute: React.FC = () => {
	const isAuth = useAppSelector((state) => state.auth.isAuth);
	const location = useLocation();

	const params = new URLSearchParams(location.search);
	const redirect = params.get("redirect") || "/";

	if (isAuth) return <Navigate to={redirect} replace />;

	return <Outlet />;
};
