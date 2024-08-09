import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchStatisticsStart } from './statisticsSlice';
import Statistics from '../../components/Statistics';
import { Statistics as StatisticsType } from '../../types/statistics';

const StatisticsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { statistics, loading, error } = useSelector((state: RootState) => state.statistics);

  useEffect(() => {
    dispatch(fetchStatisticsStart());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {statistics && <Statistics statistics={statistics as StatisticsType} />}
    </div>
  );
};

export default StatisticsContainer;
