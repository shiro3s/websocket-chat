import { createAction, createSlice } from "@reduxjs/toolkit";

type State = {
	isAuth: boolean;
};

const initialState: State = {
	isAuth: false,
};

const ACTION = {
	LOGIN: "auth/login",
	LOGOUT: "auth/logout",
};

export const login = createAction(ACTION.LOGIN);
export const logout = createAction(ACTION.LOGOUT);

export const authStore = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login, (state) => {
			state.isAuth = true;
		});

		builder.addCase(logout, (state) => {
			state.isAuth = false;
		});
	},
});

export default authStore.reducer;
