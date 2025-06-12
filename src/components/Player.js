import React from 'react';
import idleImg from '../assets/tile001.png';
import attackImg from '../assets/tile004.png';
import { PLAYER_WIDTH, PLAYER_HEIGHT } from './levelConstants';

const Player = ({ x, y, attackAnim }) => (
  <div
    style={{
      position: 'absolute',
      left: x - 100,
      top: y - 80,
      width: PLAYER_WIDTH + 200,
      height: PLAYER_HEIGHT + 200,
      background: 'transparent',
      border: 'none',
      borderRadius: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'visible',
      padding: 0,
      boxShadow: 'none',
    }}
  >
    <img
      src={attackAnim ? attackImg : idleImg}
      alt="player"
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

export default Player;