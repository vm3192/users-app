import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	users: [],
	isLoading: false,
};

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		getUsers(state) {
			state.isLoading = true;
		},
		setUsers(state, action) {
			state.users = action.payload;
			state.isLoading = false;
		},
		postUsers(state) {
			state.isLoading = true;
		},
		putUsers(state, action) {
			const {id, name, surname, desc} = action.payload;
			state.users = state.users.map((user) =>
				user.user_id === id ? {...user, name, surname, desc} : user,
			);
		},
		deleteUsers(state, action) {
			state.users = state.users.filter(
				(user) => user.user_id !== action.payload,
			);
		},
	},
});

export const {getUsers, setUsers, postUsers, putUsers, deleteUsers} =
	usersSlice.actions;

export default usersSlice.reducer;
