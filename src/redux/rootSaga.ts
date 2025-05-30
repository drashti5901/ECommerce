import { all, fork } from 'redux-saga/effects';
import { productSagas } from '../redux/features/product/productSaga';

export function* rootSaga() {
  yield all([
    fork(productSagas),
  ]);
} 