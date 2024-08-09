import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  fetchStatisticsStart,
  fetchStatisticsSuccess,
  fetchStatisticsFailure,
} from './statisticsSlice';
import { Statistics } from '../../types/statistics';

function* fetchStatistics(): Generator<any, void, AxiosResponse<Statistics>> {
  try {
    const response: AxiosResponse<Statistics> = yield call(axios.get, 'http://localhost:8000/api/statistics');
    console.log("ghgh")
    yield put(fetchStatisticsSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchStatisticsFailure(error.message));
    } else {
      yield put(fetchStatisticsFailure('An unknown error occurred.'));
    }
  }
}

function* statisticsSaga() {
  yield takeEvery(fetchStatisticsStart.type, fetchStatistics);
}

export default statisticsSaga;
