
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Statistics as StatisticsType } from '../types/statistics';
import styled from '@emotion/styled';

interface StatisticsProps {
  statistics: StatisticsType;
}
const StatisticsContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  font-family: 'Dancing Script';
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 800px;
  }
  @media (max-width: 767px) {
    margin-bottom: 240px;
  }
`;

const ChartContainer = styled.div`
  margin: 20px 0;
  width: 100%;

  @media (min-width: 768px) {
    margin: 30px 0;
  }
`;
// const StatisticsContainer = styled.div`
//   padding: 30px;
  
//   background-color: #f5f5f5;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   max-width: 800px;
//   font-family: 'Dancing Script';
//   margin: 0 auto;
//   text-align: center;
// `;

// const ChartContainer = styled.div`
//   margin: 20px 0;
 
// `;

const Statistics: React.FC<StatisticsProps> = ({ statistics }) => {
  const genreData = statistics.songsByGenre.map((genre) => ({
    name: genre._id,
    count: genre.count,
  }));

  const artistData = statistics.songsByArtist.map((artist) => ({
    name: artist._id,
    count: artist.count,
  }));

  const albumData = statistics.songsByAlbum.map((album) => ({
    name: album._id,
    count: album.count,
  }));

  return (
    <StatisticsContainer>
      <h2>Statistics</h2>
      <div>
        <p>Total Songs: {statistics.totalSongs}</p>
        <p>Total Artists: {statistics.totalArtists}</p>
        <p>Total Albums: {statistics.totalAlbums}</p>
        <p>Total Genres: {statistics.totalGenres}</p>

        <ChartContainer>
          <h3>Songs by Genre</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={genreData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#542626" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer>
          <h3>Songs by Artist</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={artistData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#543939" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer>
          <h3>Songs by Album</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={albumData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#7a0f0f" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </StatisticsContainer>
  );
};

export default Statistics;
