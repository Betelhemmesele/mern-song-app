
// /** @jsxImportSource @emotion/react */
// import React, { useState } from 'react';
// import styled from '@emotion/styled';
// import { Song } from '../types/song';
// import { useNavigate } from 'react-router-dom';

// interface SongCardProps {
//   song: Song;
//   onDelete: (id: string) => void;
//   onUpdate: (song: Song) => void;
// }

// const CardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 20px 0;
// `;

// const Card = styled.div`
//   width: 700px;
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   background-color: #d9dde9;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// const SideButtons = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   margin-right: 20px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   margin: 5px 0;
//   font-size: 16px;
//   color: #fff;
//   background-color: #333;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-family: 'Dancing Script';
//   &:hover {
//     background-color: #555;
//   }
// `;

// const Image = styled.img`
//   width: 400px;
//   height: 400px;
//   border-radius: 8px;
//   margin-bottom: 10px;
// `;

// const Title = styled.h3`
//   margin: 0;
//   font-size: 24px;
//   font-family: 'Dancing Script', cursive;
//   color: #333;
//   text-align: center;
// `;

// const Text = styled.p`
//   margin: 5px 0;
//   font-family: 'Dancing Script', cursive;
//   font-size: 18px;
//   color: #333;
//   text-align: center;
// `;

// const Input = styled.input`
//   padding: 10px;
//   margin-bottom: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: calc(100% - 22px);
//   &:focus {
//     border-color: #007bff;
//     box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
//     outline: none;
//   }
// `;

// const CancelButton = styled(Button)`
//   background-color: #6c757d;
//   font-family: 'Dancing Script';
//   &:hover {
//     background-color: #5a6268;
//   }
// `;

// const SongCard: React.FC<SongCardProps> = ({ song, onDelete, onUpdate }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedSong, setEditedSong] = useState(song);
//   const navigate = useNavigate();

//   const handleDelete = () => {
//     onDelete(song._id);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEditedSong({ ...editedSong, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = () => {
//     onUpdate(editedSong);
//     setIsEditing(false);
//   };

//   return (
//     <CardContainer>
//       <Card>
//         <SideButtons>
//           <Button onClick={() => navigate('/add-song')}>Add Song</Button>
//           <Button onClick={() => navigate('/statistics')}>View Statistics</Button>
//         </SideButtons>
//         {isEditing ? (
//           <div>
//             <Input
//               type="text"
//               name="title"
//               value={editedSong.title}
//               onChange={handleChange}
//               placeholder="Title"
//             />
//             <Input
//               type="text"
//               name="artist"
//               value={editedSong.artist}
//               onChange={handleChange}
//               placeholder="Artist"
//             />
//             <Input
//               type="text"
//               name="album"
//               value={editedSong.album}
//               onChange={handleChange}
//               placeholder="Album"
//             />
//             <Input
//               type="text"
//               name="genre"
//               value={editedSong.genre}
//               onChange={handleChange}
//               placeholder="Genre"
//             />
//             <Button onClick={handleUpdate}>Update</Button>
//             <CancelButton onClick={() => setIsEditing(false)}>Cancel</CancelButton>
//           </div>
//         ) : (
//           <div>
//             <Image src='https://media.istockphoto.com/id/1369907103/vector/vector-illustration-of-modern-playback-of-music-application-multimedia-navigation-on.jpg?s=612x612&w=0&k=20&c=RpR-_IVWVOTLrJ_glKw7m-WGE8tpvEhz3H8jBDfhIwU=' alt={song.title} />
//             <Title>{song.title}</Title>
//             <Text>{song.artist}</Text>
//             <Text>{song.album}</Text>
//             <Text>{song.genre}</Text>
//             <Button onClick={handleEdit}>Edit</Button>
//             <CancelButton onClick={handleDelete}>Delete</CancelButton>
//           </div>
//         )}
//       </Card>
//     </CardContainer>
//   );
// };

// export default SongCard;
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Song } from '../types/song';
import { useNavigate } from 'react-router-dom';

interface SongCardProps {
  song: Song;
  onDelete: (id: string) => void;
  onUpdate: (song: Song) => void;
}

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Card = styled.div`
  width: 700px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #d9dde9;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SideButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
`;

const Button = styled.button`
  width: 150px; /* Fixed width to ensure equal length */
  padding: 10px 20px;
  margin: 5px 0;
  font-size: 16px;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left:20px;
  font-family: 'Dancing Script';
  text-align: center;
  &:hover {
    background-color: #555;
  }
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 24px;
  font-family: 'Dancing Script', cursive;
  color: #333;
  text-align: center;
`;

const Text = styled.p`
  margin: 5px 0;
  font-family: 'Dancing Script', cursive;
  font-size: 18px;
  color: #333;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
 
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: calc(100% - 22px);
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  font-family: 'Dancing Script';
   margin-left:20px;
  &:hover {
    background-color: #5a6268;
  }
`;

const SongCard: React.FC<SongCardProps> = ({ song, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSong, setEditedSong] = useState(song);
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(song._id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedSong({ ...editedSong, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    onUpdate(editedSong);
    setIsEditing(false);
  };

  return (
    <CardContainer>
      <Card>
        <SideButtons>
          <Button onClick={() => navigate('/add-song')}>Add Song</Button>
          <Button onClick={() => navigate('/statistics')}>View Statistics</Button>
          <Button onClick={handleEdit}>Edit</Button>
          <CancelButton onClick={handleDelete}>Delete</CancelButton>
        </SideButtons>
        {isEditing ? (
          <div>
            <Input
              type="text"
              name="title"
              value={editedSong.title}
              onChange={handleChange}
              placeholder="Title"
            />
            <Input
              type="text"
              name="artist"
              value={editedSong.artist}
              onChange={handleChange}
              placeholder="Artist"
            />
            <Input
              type="text"
              name="album"
              value={editedSong.album}
              onChange={handleChange}
              placeholder="Album"
            />
            <Input
              type="text"
              name="genre"
              value={editedSong.genre}
              onChange={handleChange}
              placeholder="Genre"
            />
            <Button onClick={handleUpdate}>Update</Button>
            <CancelButton onClick={() => setIsEditing(false)}>Cancel</CancelButton>
          </div>
        ) : (
          <div>
            <Image src='https://media.istockphoto.com/id/1369907103/vector/vector-illustration-of-modern-playback-of-music-application-multimedia-navigation-on.jpg?s=612x612&w=0&k=20&c=RpR-_IVWVOTLrJ_glKw7m-WGE8tpvEhz3H8jBDfhIwU=' alt={song.title} />
            <Title>{song.title}</Title>
            <Text>{song.artist}</Text>
            <Text>{song.album}</Text>
            <Text>{song.genre}</Text>
          </div>
        )}
      </Card>
    </CardContainer>
  );
};

export default SongCard;

