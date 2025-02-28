// Here the * used with the function is because the function is a generator function. The generator function is used to pause and resume the function execution
// It handles the async data.
import {takeEvery } from 'redux-saga/effects';
import { USER_LIST } from './constants';

function* userList() {
  console.warn('Saga Function Called!!');
}

function* SagaData() {
    yield takeEvery(USER_LIST, userList);
}

export default SagaData;
