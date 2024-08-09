
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchSongsStart, deleteSongStart, updateSongStart } from './songSlice';
import SongList from '../../components/SongList';
import { Song } from '../../types/song';

const SongCardContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state: RootState) => state.songs);
  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);
  const handleDelete = (id: string) => {
    dispatch(deleteSongStart(id));
  };

  const handleUpdate = (song: Song) => {
    dispatch(updateSongStart(song));
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <SongList songs={songs} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
};

export default SongCardContainer;
