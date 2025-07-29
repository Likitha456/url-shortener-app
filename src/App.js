// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import URLShortenerForm from './components/URLShortenerForm';
import RedirectHandler from './components/RedirectHandler';
import URLStatsPage from './components/URLStatsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<URLShortenerForm />} />
        <Route path="/stats" element={<URLStatsPage />} />
        <Route path="/:shortcode" element={<RedirectHandler />} />
      </Routes>
    </Router>
  );
}

export default App;
