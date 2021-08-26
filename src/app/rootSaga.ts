import counterSaga from 'features/counter/couterSaga'; //từ counterSaga
import { all } from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello Saga');
}
//viết các middleware và cho chạy tất cả trong rootSaga -> gọi từ store
export default function* rootSaga() {
  console.log('Root Saga');
  yield all([helloSaga(), counterSaga()]);
}
