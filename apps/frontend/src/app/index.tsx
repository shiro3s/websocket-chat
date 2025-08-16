import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "@/routes";
import { store } from "@/store";

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Provider>
	);
};
