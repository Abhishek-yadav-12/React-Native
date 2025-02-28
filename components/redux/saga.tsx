// Here the * used with the function is because the function is a generator function. The generator function is used to pause and resume the function execution
// It handles the async data.
import {put, takeEvery} from 'redux-saga/effects';
import {USER_LIST, SET_USER_DATA} from './constants';

function* userList(): Generator<any, void, any> {
  const url = 'https://dummyjson.com/users';
  let data = yield fetch(url);
  data = yield data.json();
  yield put({type: SET_USER_DATA, data});
}

function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}

export default SagaData;
