import { all } from 'redux-saga/effects';
import songSaga from '../features/songs/songSaga';
import statisticsSaga from '../features/statistics/statisticsSaga';

export default function* rootSaga() {
  yield all([songSaga(), statisticsSaga()]);
}
