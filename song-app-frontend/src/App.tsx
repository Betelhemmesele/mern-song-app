
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { store } from './store/store';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import SongListContainer from './features/songs/SongListContainer';
import SongFormContainer from './features/songs/SongFormContainer';
import StatisticsContainer from './features/statistics/StatisticsContainer';
import Navbar from './components/navbar'; // Import the Navbar component

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Router>
          <div>
          <Navbar />
            <Routes>
              <Route path="/" element={<Navigate to="/songs" />} />
              <Route path="/add-song" element={<SongFormContainer />} />
              <Route path="/songs" element={<SongListContainer />} />
              <Route path="/statistics" element={<StatisticsContainer />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
