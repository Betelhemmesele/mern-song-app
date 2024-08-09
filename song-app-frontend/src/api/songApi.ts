import axios from 'axios';
import { Song } from '../types/song';
import { Statistics } from '../types/statistics';

// Fetch all songs
export const getSongs = async (): Promise<Song[]> => {
  const response = await axios.get('/api/songs');
  console.log("response",response)
  return response.data;
};

// Create a new song
export const createSong = async (song: Omit<Song, '_id'>): Promise<Song> => {
  const response = await axios.post('/api/songs', song);
  return response.data;
};

// Update an existing song
export const updateSong = async (song: Song): Promise<Song> => {
  const response = await axios.put(`/api/songs/${song._id}`, song);
  return response.data;
};

// Delete a song
export const deleteSong = async (id: string): Promise<void> => {
  await axios.delete(`/api/songs/${id}`);
};

// Fetch statistics
export const getStatistics = async (): Promise<Statistics> => {
  const response = await axios.get('/api/statistics');
  return response.data;
};
export {};