import { call, put, takeLatest } from "redux-saga/effects";
import userActions from "../actions/userAction";
import { fetchUsersError, fetchUsersRequest, fetchUsersSuccess } from "../reducers/usersReducer";
import { getUsers } from "../services/usersService";

function* fetchUsersSaga(action) {
   try {
      yield put(fetchUsersRequest());
      const data = yield call(getUsers);
      yield put(fetchUsersSuccess(data.users));
   } catch (error) {
      yield put(fetchUsersError(error.message))
   }
}

export default function* usersSaga() {
   yield takeLatest(userActions.FETCH_USERS, fetchUsersSaga)
}

// 1.take -> wait
// yield take('FETCH_PRODUCTS')
// 2.takeLatest - before running latest, cancel previous sagas
// 3.takeEvery -creates a saga for every action of specific type
// 4.put -> dispatch an actions
// 4.fork -> non blocking task concurently asyncronously
// 4.call -> function call
// all

