import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authStore";
import chatReducer from "./chatStore";

export const store = configureStore({
	reducer: {
		chat: chatReducer,
		auth: authReducer,
	},
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
