import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import usersSlice from "./slices/usersSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		users: usersSlice,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
