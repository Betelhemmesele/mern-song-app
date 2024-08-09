import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse, AxiosError } from 'axios';
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongStart,
  createSongSuccess,
  createSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} from './songSlice';
import { Song } from '../../types/song';

function* fetchSongs() {
  try {
    const response: AxiosResponse<Song[]> = yield call(axios.get, 'http://localhost:8000/api/songs');
    console.log("eeeee")
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    console.log("eee",error);
    if (error instanceof AxiosError) {
      yield put(fetchSongsFailure(error.message));
    } else if (error instanceof Error) {
      yield put(fetchSongsFailure(error.message));
    } else {
      yield put(fetchSongsFailure('An unknown error occurred.'));
    }
  }
}

function* createSong(action: ReturnType<typeof createSongStart>) {
  try {
    const response: AxiosResponse<Song> = yield call(axios.post, 'http://localhost:8000/api/songs', action.payload);
    yield put(createSongSuccess(response.data));
  } catch (error) {
    if (error instanceof AxiosError) {
      yield put(createSongFailure(error.message));
    } else if (error instanceof Error) {
      yield put(createSongFailure(error.message));
    } else {
      yield put(createSongFailure('An unknown error occurred.'));
    }
  }
}

function* updateSong(action: ReturnType<typeof updateSongStart>) {
  try {
    if (!action.payload) {
      throw new Error('Song payload is undefined');
    }
    const response: AxiosResponse<Song> = yield call(axios.put, `http://localhost:8000/api/songs/${action.payload._id}`, action.payload);
    yield put(updateSongSuccess(response.data));
  } catch (error) {
    if (error instanceof AxiosError) {
      yield put(updateSongFailure(error.message));
    } else if (error instanceof Error) {
      yield put(updateSongFailure(error.message));
    } else {
      yield put(updateSongFailure('An unknown error occurred.'));
    }
  }
}

function* deleteSong(action: ReturnType<typeof deleteSongStart>) {
  try {
    if (!action.payload) {
      throw new Error('Song ID is undefined');
    }
    yield call(axios.delete, `http://localhost:8000/api/songs/${action.payload}`);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    if (error instanceof AxiosError) {
      yield put(deleteSongFailure(error.message));
    } else if (error instanceof Error) {
      yield put(deleteSongFailure(error.message));
    } else {
      yield put(deleteSongFailure('An unknown error occurred.'));
    }
  }
}

function* songSaga() {
  yield takeEvery(fetchSongsStart.type, fetchSongs);
  yield takeEvery(createSongStart.type, createSong);
  yield takeEvery(updateSongStart.type, updateSong);
  yield takeEvery(deleteSongStart.type, deleteSong);
}

export default songSaga;
