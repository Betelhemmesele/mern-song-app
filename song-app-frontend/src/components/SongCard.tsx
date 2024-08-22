
import React, { useState,useEffect } from 'react';
import styled from '@emotion/styled';
import { Song } from '../types/song';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause ,faTrash , faEdit} from '@fortawesome/free-solid-svg-icons';


interface SongCardProps {
  song: Song;
  onDelete: (id: string) => void;
  onUpdate: (song: Song) => void;
}

// const CardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 20px;
// `;

// const Card = styled.div`
//   width: 700px;
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   box-shadow: 0 3px 5px #5c3b3b;
//   background-color: #d9dde9;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// const SideButtons = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   margin-right: 10px;
// `;

// const Button = styled.button`
//   width: 130px;
//   padding: 10px 20px;
//   margin: 5px 0;
//   font-size: 16px;
//   color: #fff;
//   background-color: #3d1616;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   margin-left: 20px;
//   font-family: 'Dancing Script';
//   text-align: center;
//   &:hover {
//     background-color:#663c3c;
//   }
// `;

// const Image = styled.img`
//   width: 400px;
//   height: 300px;
//   border-radius: 8px;
//   margin-bottom: 10px;
//   margin-top: 10px;
// `;

// const Title = styled.h3`
//   margin: 0 10px 0 0;
//   font-size: 24px;
//   font-family: 'Dancing Script', cursive;
//   color: #333;
//   text-align: center;
// `;

// const Text = styled.p`
//    margin: 0 10px;
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
//   background-color: #3d1616;
//   font-family: 'Dancing Script';
//   margin-left: 20px;
//   &:hover {
//     background-color: ##663c3c;
//   }
// `;

// const ProgressBarContainer = styled.div`
//   width: 100%;
//   height: 3px;
//   background-color: #f5f7fa; /* Lighter background for better contrast */
//   border-radius: 5px;
//   border: 1px solid #111317;
//   margin: 10px 0;
//   cursor: pointer; 
// `;

// const ProgressBar = styled.div<{ progress: number }>`
//   height: 100%;
//   width: ${(props) => props.progress}%;
//   background-color: #111317; /* Green color for the progress */
//   border-radius: 5px;
//   transition: width 0.1s ease; /* Smooth transition for the width */
// `;

// const TimeDisplay = styled.div`
//   font-size: 14px;
//   color: #333; /* Text color for the time display */
//   margin-top: 5px;
//   display: flex;
//   justify-content: space-between; /* Space out the time */
// `;
// const PlayButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   margin-bottom: 10px;
//   outline: none;
//   display: flex; /* Use flexbox for centering */
//   justify-content: center; /* Center horizontally */
//   align-items: center; /* Center vertically */
//   width: 100%; /* Ensure it takes full width of the container */
// `;
// const SongInfoContainer = styled.div`
//   display: flex;
//   flex-direction: row; /* Arrange items horizontally */
//   align-items: center; /* Center vertically */
//   margin-top: 10px; /* Add some space above */
//   font-family: 'Dancing Script', cursive; /* Use your preferred font */
//   color: #333; /* Text color */
//   text-align: left; /* Align text to the left */
// `;
// const SongContainer = styled.div`
//   display: flex; /* Use flexbox to align items in a row */
//   align-items: center; /* Center items vertically */
//   margin-top: 10px; /* Add some space above */
// `;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 3px 5px #5c3b3b;
  background-color: #d9dde9;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const SideButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  width: 130px;
  padding: 10px 20px;
  margin: 5px 0;
  font-size: 16px;
  color: #fff;
  background-color: #3d1616;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 20px;
  font-family: 'Dancing Script';
  text-align: center;
  &:hover {
    background-color: #663c3c;
  }
  @media (max-width: 768px) {
    width: 48%;
    margin-left: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-top: 10px;
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 10px 0;
  }
`;

const Title = styled.h3`
  margin: 0 10px 0 0;
  font-size: 24px;
  font-family: 'Dancing Script', cursive;
  color: #333;
  text-align: center;
`;

const Text = styled.p`
  margin: 0 10px;
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
  background-color: #3d1616;
  font-family: 'Dancing Script';
  margin-left: 20px;
  &:hover {
    background-color: ##663c3c;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 3px;
  background-color: #f5f7fa;
  border-radius: 5px;
  border: 1px solid #111317;
  margin: 10px 0;
  cursor: pointer;
`;

const ProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: #111317;
  border-radius: 5px;
  transition: width 0.1s ease;
`;

const TimeDisplay = styled.div`
  font-size: 14px;
  color: #333;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SongInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  font-family: 'Dancing Script', cursive;
  color: #333;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const SongContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SongCard: React.FC<SongCardProps> = ({ song, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSong, setEditedSong] = useState(song);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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

  // Function to format time in minutes and seconds
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const handlePlayPause = () => {
    const baseURL = 'http://localhost:8000/'; // Change this if your API URL is different
    const fileUrl = `${baseURL}${song.file_url}`; // Construct the full URL

    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    } else {
      const newAudio = new Audio(fileUrl);
      setAudio(newAudio);
      newAudio.play().catch(error => {
        console.error("Error playing audio:", error);
      });
      newAudio.onended = () => {
        setIsPlaying(false);
        setAudio(null); // Reset audio state when playback ends
        setProgress(0); // Reset progress
      };
      newAudio.onerror = (e) => {
        console.error("Audio playback error:", e);
      };
      newAudio.ontimeupdate = () => {
        const percentage = (newAudio.currentTime / newAudio.duration) * 100;
        setProgress(percentage);
      };
      setIsPlaying(true);
    }
  };

  // Function to handle mouse down event
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  // Function to handle mouse move event
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && audio) {
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) {
        const rect = progressBar.getBoundingClientRect();
        const offsetX = e.clientX - rect.left; // Calculate the offset
        const newWidth = Math.min(Math.max(offsetX / rect.width, 0), 1); // Clamp value between 0 and 1
        const newTime = newWidth * audio.duration; // Calculate new time based on progress
        audio.currentTime = newTime; // Update audio playback position
        setProgress(newWidth * 100); // Update progress bar state
      }
    }
  };

  // Function to handle mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add event listeners to the document when dragging starts and remove them when dragging ends
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <CardContainer>
      <Card>
        <SideButtons>
          <Button onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} size="1x" />
          </Button>
          <CancelButton onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} size="1x" />
          </CancelButton>
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
            <SongInfoContainer>
              <Title>
                [{song.title}, {song.artist}, {song.album}, {song.genre}]
              </Title>
            </SongInfoContainer>
            <Image src='https://img.freepik.com/premium-photo/photo-vintage-record-player_684882-814.jpg' alt={song.title} />
            <ProgressBarContainer id="progress-bar" onMouseDown={handleMouseDown}>
              <ProgressBar progress={progress} />
            </ProgressBarContainer>
            <TimeDisplay>
              <span>{formatTime(audio ? audio.currentTime : 0)}</span>
              <span>{audio ? formatTime(audio.duration) : '0:00'}</span>
            </TimeDisplay>
            <SongContainer>
              <PlayButton onClick={handlePlayPause}>
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="2x" />
              </PlayButton>
            </SongContainer>
          </div>
        )}
      </Card>
    </CardContainer>
  );
};

export default SongCard;