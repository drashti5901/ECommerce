import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { productService } from '../../../services';
import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductById,
  fetchProductByIdSuccess,
  fetchProductByIdFailure,
} from './productSlice';
import { FetchProductByIdPayload } from './types';
import { Product } from '../../../services';

// Worker Sagas
function* fetchProductsSaga(): Generator<any, void, Product[]> {
  try {
    const data = yield call(productService.getAllProducts);
    yield put(fetchProductsSuccess(data));
  } catch (error) {
    yield put(fetchProductsFailure(error instanceof Error ? error.message : 'Failed to fetch products'));
  }
}

function* fetchProductByIdSaga(action: PayloadAction<FetchProductByIdPayload>): Generator<any, void, Product> {
  try {
    const { productId } = action.payload;
    const data = yield call(productService.getProductById, productId);
    yield put(fetchProductByIdSuccess(data));
  } catch (error) {
    yield put(fetchProductByIdFailure(error instanceof Error ? error.message : 'Failed to fetch product'));
  }
}

// Watcher Saga
export function* productSagas(): Generator {
  yield takeLatest(fetchProducts.type, fetchProductsSaga);
  yield takeLatest(fetchProductById.type, fetchProductByIdSaga);
} 