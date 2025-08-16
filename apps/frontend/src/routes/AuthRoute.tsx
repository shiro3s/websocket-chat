import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/libs/redux";

export const AuthRoute: React.FC = () => {
	const isAuth = useAppSelector((state) => state.auth.isAuth);

	if (isAuth) return <Outlet />;

	return <Navigate to="/login" replace />;
};
