import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import LevelSelectionScreen from './screens/levelSelectionScreen.js';
import LevelScreen from './screens/levelScreen.js';
import BossScreen from './screens/bossScreen.js';
import YesScreen from './screens/yesScreen.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LevelSelectionScreen />} />
        <Route path="/level/:1" element={<LevelScreen />} />
        <Route path="/boss" element={<BossScreen />} />
        <Route path="/yesScreen" element={<YesScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
