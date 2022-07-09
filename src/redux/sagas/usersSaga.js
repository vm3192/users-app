// import axios from "axios";
// import {call, put, takeEvery} from "redux-saga/effects";
// import {getUsersSuccess} from "../slices/usersSlice";

// function* workGetUsesrFetch() {
// 	const {data} = yield call(() => axios.get("http://23.88.43.148/users"));
// 	yield put(getUsersSuccess(data));
// }

// function* usersSaga() {
// 	yield takeEvery("users/getUsersFetch", workGetUsesrFetch);
// }

// export default usersSaga;