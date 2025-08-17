import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ColumnLayout } from "@/layouts/column";
import { useAppSelector } from "@/libs/redux";

export const AuthRoute: React.FC = () => {
	const isAuth = useAppSelector((state) => state.auth.isAuth);

	if (isAuth)
		return (
			<ColumnLayout>
				<Outlet />
			</ColumnLayout>
		);

	return <Navigate to="/login" replace />;
};
