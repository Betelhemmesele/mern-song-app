import React from 'react';
import styled from '@emotion/styled';
import { Song } from '../types/song';
import SongCard from './SongCard';
import { useNavigate } from 'react-router-dom';

interface SongListProps {
  songs: Song[];
  onDelete: (id: string) => void;
  onUpdate: (song: Song) => void;
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Dancing Script';
`;

const LeftHalf = styled.div`
  flex: 1;
  background-image: url('https://t4.ftcdn.net/jpg/01/60/51/51/360_F_160515126_qv9J0UWorMlKiNhLpSuRss32ghVRLii1.jpg'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 48px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const RightHalf = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5; /* Adjust the background color as needed */
  overflow-y: auto;
  padding: 20px;
`;
const SongList: React.FC<SongListProps> = ({ songs, onDelete, onUpdate }) => {
  

  return (
    <Container>
      <LeftHalf>
        Dj Oria
       
      </LeftHalf>
      <RightHalf>
        {songs.map((song) => (
          <SongCard key={song._id} song={song} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </RightHalf>
    </Container>
  );
};

export default SongList;
