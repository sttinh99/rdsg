import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from '@redux-saga/core';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
// sagaMiddleware.run(rootSaga);
//nếu ms tạo mà chạy luôn như dòng 8 thì sẽ báo lỗi

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // add middleware sagaMiddleware và vẫn giữ những middleware default
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  //phải chạy trong cái configureStore -> apply cái middleware vào store cho mình -> mới chạy saga được (dòng 20) -> chạy sau
});
//run saga lên
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
