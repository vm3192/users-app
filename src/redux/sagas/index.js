import axios from "axios";
import {takeEvery, put, call, all, fork} from "redux-saga/effects";
import {
	getUsers,
	setUsers,
	postUsers,
	putUsers,
	deleteUsers
} from "../slices/usersSlice";

function* workerGetUsers() {
	try {
		const {data} = yield call(() => axios.get("http://23.88.43.148/users"));
		yield put(setUsers(data));
	} catch (error) {
		console.log(error);
	}
}

function* workerPostUsers(action) {
	try {
		yield call(() => axios.post("http://23.88.43.148/users", action.payload));
		const {data} = yield call(() => axios.get("http://23.88.43.148/users"));
		yield put(setUsers(data));
	} catch (error) {
		console.log(error);
	}
}

function* workerPutUsers(action) {
	const {id, name, surname, desc} = action.payload;
	try {
		yield call(() =>
			axios.put(`http://23.88.43.148/user/${id}`, {name, surname, desc}),
		);
	} catch (error) {
		console.log(error);
	}
}

function* workerDeleteUsers(action) {
	try {
		yield call(axios.delete(`http://23.88.43.148/user/${action.payload}`));
	} catch (error) {
		// console.log(error);
	}
}

function* watchGetUsers() {
	yield takeEvery(getUsers, workerGetUsers);
}

function* watchPostUsers() {
	yield takeEvery(postUsers, workerPostUsers);
}

function* watchPutUsers() {
	yield takeEvery(putUsers, workerPutUsers);
}

function* watchDeleteUsers() {
	yield takeEvery(deleteUsers, workerDeleteUsers);
}

export default function* rootSaga() {
	yield all([
		fork(watchGetUsers),
		fork(watchPostUsers),
		fork(watchPutUsers),
		fork(watchDeleteUsers),
	]);
}
