import React from 'react';
import orcImg from '../assets/tile000.png';
import { ENEMY_WIDTH, ENEMY_HEIGHT } from './levelConstants';

const Enemy = ({ enemy }) => (
  <div
    style={{
      position: 'absolute',
      left: enemy.x - 100,
      top: enemy.y - 100,
      width: ENEMY_WIDTH + 200,
      height: ENEMY_HEIGHT + 200,
      background: 'transparent',
      borderRadius: 6,
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      overflow: 'visible',
      padding: 0,
    }}
  >
    <img
      src={orcImg}
      alt="orc"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        userSelect: 'none',
        pointerEvents: 'none',
        background: 'transparent',
        boxShadow: 'none',
      }}
      draggable={false}
    />
  </div>
);

export default Enemy;