/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { createSongStart } from '../features/songs/songSlice';
import { Song } from '../types/song';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftHalf = styled.div`
  flex: 1;
  background-image: url('https://is.zobj.net/image-server/v1/images?r=QEaOtbHrJwo27SmHHgJ3_YcTJ6C3c0nu4xLGiuS63C0ag7Weu5YmUkkGcZd-MO5mLNOx2J1-QY3GK4oMoSGQydUAcoq6vVqWfH0ms1HTxr5sicCf0QOSURRBn0N2BlUFnnZIORbONpdaKuMkzn-LDFj7Vof1y_vhDtbEwI-zbuvTaEpwM4YkggYZpIRkkuu5u0XZkdCN2kAhuwDB'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 48px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-family: 'Dancing Script';
`;

const RightHalf = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5; /* Adjust the background color as needed */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  width: 100%;
  padding: 10px;
  margin-top:0px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #000; /* Black background */
  border: none;
  border-radius: 4px;
  font-family: 'Dancing Script'
  cursor: pointer;
  &:hover {
    background-color: #333; /* Darker shade of black on hover */
  }
`;
const Image = styled.img`
  width: 500px;
  height: 400px;
  border-radius: 8px;
  margin-bottom: 10px;
`;


const SongForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [song, setSong] = useState<Omit<Song, '_id'>>({
    title: '',
    artist: '',
    album: '',
    genre: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createSongStart(song));
    setSong({ title: '', artist: '', album: '', genre: '' });
    navigate('/songs');
  };

  return (
    <Container>
      <LeftHalf>
        Dj Oria
      </LeftHalf>
      <RightHalf>
       
        <Form onSubmit={handleSubmit}>
        <Image src='https://img.freepik.com/free-photo/volumetric-musical-background-with-treble-clef-notes-generative-ai_169016-29576.jpg' alt={song.title} />
           
          <Input
            type="text"
            name="title"
            value={song.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <Input
            type="text"
            name="artist"
            value={song.artist}
            onChange={handleChange}
            placeholder="Artist"
          />
          <Input
            type="text"
            name="album"
            value={song.album}
            onChange={handleChange}
            placeholder="Album"
          />
          <Input
            type="text"
            name="genre"
            value={song.genre}
            onChange={handleChange}
            placeholder="Genre"
          />
          <Button type="submit">Add Song</Button>
        </Form>
      </RightHalf>
    </Container>
  );
};

export default SongForm;
