import { createAction, createSlice } from "@reduxjs/toolkit";

type State = {
	isAuth: boolean;
};

const initialState: State = {
	isAuth: false,
};

export const authStore = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export default authStore.reducer;
