import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Statistics } from '../../types/statistics';

interface StatisticsState {
  statistics: Statistics | null;
  loading: boolean;
  error: string | null;
}

const initialState: StatisticsState = {
  statistics: null,
  loading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    fetchStatisticsStart(state) {
      state.loading = true;
    },
    fetchStatisticsSuccess(state, action: PayloadAction<Statistics>) {
      state.loading = false;
      state.statistics = action.payload;
    },
    fetchStatisticsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchStatisticsStart,
  fetchStatisticsSuccess,
  fetchStatisticsFailure,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
