// Import the redux-saga/effects
import { put, call, takeLatest, takeEvery } from "redux-saga/effects";

// Import all actions and api's
import {
  SET_LOADING,
  GET_USERS,
  GET_USERS_REQUESTED,
  GET_USER,
  GET_USER_REQUESTED,
} from "../actions/user-action";

// Import all api's
import { 
  getAllUsers, 
  getUserById,
} from "../api/user-api";

function* getUsers() {
  yield put({ type: SET_LOADING });

  const users = yield call(getAllUsers);

  yield put({ type: GET_USERS, payload: users });
}

function* getUser({ payload }) {
  yield put({ type: SET_LOADING });

  const user = yield call(getUserById, payload);

  yield put({ type: GET_USER, payload: user });
}


export default function* userSaga() {
  yield takeEvery(GET_USERS_REQUESTED, getUsers);
  yield takeEvery(GET_USER_REQUESTED, getUser);
}
