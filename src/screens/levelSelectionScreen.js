import {useNavigate} from 'react-router-dom';
import React from 'react';
import '../App.css';

const LevelSelectionScreen = () => {
  const navigate = useNavigate();

  const handleLevelClick = (level) => {
    if (level === 1) {
      navigate(`/level/${level}`);
    }
  };

  return (
    <div className="level-selection-screen">
      <h1>Select a Level</h1>
      <div className="levels">
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            onClick={() => handleLevelClick(level)}
            className={level !== 1 ? 'locked' : ''}
            disabled={level !== 1}
          >
            Level {level}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LevelSelectionScreen;