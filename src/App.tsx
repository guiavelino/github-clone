import 'react-calendar-heatmap/dist/styles.css';

import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Profile from './pages/Profile';
import Repo from './pages/Repo';

// Components
import Header from './components/Header';

// Styles
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>
      {/* <Footer /> */}
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
