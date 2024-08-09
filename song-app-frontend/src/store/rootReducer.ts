import { combineReducers } from 'redux';
import songReducer from '../features/songs/songSlice';
import statisticsReducer from '../features/statistics/statisticsSlice';

const rootReducer = combineReducers({
  songs: songReducer,
  statistics: statisticsReducer,
});

export default rootReducer;
