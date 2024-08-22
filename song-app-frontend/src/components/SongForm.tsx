
// /** @jsxImportSource @emotion/react */
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import styled from '@emotion/styled';
// import { createSongStart } from '../features/songs/songSlice';
// import { Song } from '../types/song';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   overflow-y: auto;  // Allow vertical scrolling if content overflows

//   @media (min-width: 768px) {
//     flex-direction: row;
//   }
// `;

// const LeftHalf = styled.div`
//   flex: 1;
//   background-image: url('https://img.freepik.com/premium-photo/image-vintage-record-player-with-vinyl-records-music-generative-ai_635062-2817.jpg');
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   font-size: 36px;
//   font-weight: bold;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
//   font-family: 'Dancing Script';
//   padding: 20px;
//   text-align: center;
 
//   @media (min-width: 768px) {
//     font-size: 48px;
//   }
// `;

// const RightHalf = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #f5f5f5;
//   padding: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   width: 100%;
//   max-width: 400px;
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   background-color: white;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//   @media (min-width: 768px) {
//     max-width: 500px;
//   }
// `;

// const Input = styled.input`
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   &:focus {
//     border-color: #007bff;
//     box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   font-size: 16px;
//   color: #fff;
//   background-color: #3d1616;
//   border: none;
//   border-radius: 4px;
//   font-family: 'Dancing Script';
//   cursor: pointer;
//   text-align: center;
//   min-width: 150px;

//   &:hover {
//     background-color: #522e2e;
//   }

//   @media (max-width: 767px) {
//     padding: 10px;
//     font-size: 14px;
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 8px;
//   margin-bottom: 10px;

//   @media (max-width: 767px) {
//     width: 100%;  // Ensure it doesn't take too much space on small screens
//     max-height: 200px;  // Restrict height on small screens
//   }

//   @media (min-width: 768px) {
//     width: 500px;
//     height: 400px;
//   }
// `;


// const SongForm: React.FC = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [song, setSong] = useState<Omit<Song, '_id'> & { file: File | null }>({
//     title: '',
//     artist: '',
//     album: '',
//     genre: '',
//     file: null,
//     file_url: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSong({ ...song, [e.target.name]: e.target.value,file_url: song.file_url  });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const selectedFile = e.target.files[0];
//       setSong({ ...song, file: selectedFile });
//       console.log('Selected file:', selectedFile); // Log the selected file
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', song.title);
//     formData.append('artist', song.artist);
//     formData.append('album', song.album);
//     formData.append('genre', song.genre);
//     if (song.file) {
//       formData.append('musicFile', song.file!);
//     }

//     dispatch(createSongStart(formData));
//     setSong({ title: '', artist: '', album: '', genre: '', file: null,file_url: '' });
//     navigate('/songs');
//   };

//   return (
//     <Container>
//       <LeftHalf>
//         Dj Oria
//       </LeftHalf>
//       <RightHalf>
//         <Form onSubmit={handleSubmit}>
//           <Image src='https://img.freepik.com/premium-photo/vintage-record-player-collection-vinyl-records-old-style-generative-ai_773085-500.jpg' alt={song.title} />
//           <Input
//             type="text"
//             name="title"
//             value={song.title}
//             onChange={handleChange}
//             placeholder="Title"
//           />
//           <Input
//             type="text"
//             name="artist"
//             value={song.artist}
//             onChange={handleChange}
//             placeholder="Artist"
//           />
//           <Input
//             type="text"
//             name="album"
//             value={song.album}
//             onChange={handleChange}
//             placeholder="Album"
//           />
//           <Input
//             type="text"
//             name="genre"
//             value={song.genre}
//             onChange={handleChange}
//             placeholder="Genre"
//           />
//           <Input
//             type="file"
//             name="file"
//             onChange={handleFileChange}
//             accept="audio/*"
//           />
//           <Button type="submit">Add Song</Button>
//         </Form>
//       </RightHalf>
//     </Container>
//   );
// };

// export default SongForm;
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { createSongStart } from '../features/songs/songSlice';
import { Song } from '../types/song';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto; // Allow vertical scrolling if content overflows

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftHalf = styled.div`
  flex: 1;
  background-image: url('https://img.freepik.com/premium-photo/image-vintage-record-player-with-vinyl-records-music-generative-ai_635062-2817.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-family: 'Dancing Script';
  padding: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 767px) {
    display: none; // Hide the left side on small screens
  }
`;

const RightHalf = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 500px;
  }
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
  background-color: #3d1616;
  border: none;
  border-radius: 4px;
  font-family: 'Dancing Script';
  cursor: pointer;
  text-align: center;
  min-width: 150px;

  &:hover {
    background-color: #522e2e;
  }

  @media (max-width: 767px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    width: 100%; // Ensure it doesn't take too much space on small screens
    max-height: 200px; // Restrict height on small screens
  }

  @media (min-width: 768px) {
    width: 500px;
    height: 400px;
  }
`;

const SongForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [song, setSong] = useState<Omit<Song, '_id'> & { file: File | null }>({
    title: '',
    artist: '',
    album: '',
    genre: '',
    file: null,
    file_url: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value, file_url: song.file_url });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setSong({ ...song, file: selectedFile });
      console.log('Selected file:', selectedFile); // Log the selected file
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', song.title);
    formData.append('artist', song.artist);
    formData.append('album', song.album);
    formData.append('genre', song.genre);
    if (song.file) {
      formData.append('musicFile', song.file!);
    }

    dispatch(createSongStart(formData));
    setSong({ title: '', artist: '', album: '', genre: '', file: null, file_url: '' });
    navigate('/songs');
  };

  return (
    <Container>
      <LeftHalf>
        Dj Oria
      </LeftHalf>
      <RightHalf>
        <Form onSubmit={handleSubmit}>
          <Image src='https://img.freepik.com/premium-photo/vintage-record-player-collection-vinyl-records-old-style-generative-ai_773085-500.jpg' alt={song.title} />
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
          <Input
            type="file"
            name="file"
            onChange={handleFileChange}
            accept="audio/*"
          />
          <Button type="submit">Add Song</Button>
        </Form>
      </RightHalf>
    </Container>
  );
};

export default SongForm;
