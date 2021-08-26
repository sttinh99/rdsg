import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { increment } from './counterSlice';

export function* log(action: PayloadAction) {
  yield console.log('Log', action);
}

export default function* counterSaga() {
  console.log('counter');

  //   yield takeEvery('*', log);
  yield takeEvery(increment().type, log);
}
