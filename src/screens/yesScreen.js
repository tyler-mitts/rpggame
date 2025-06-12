import React from 'react';
import yippeeImg from '../assets/yippee.png'; // Make sure this image exists

const YesScreen = () => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      background: '#181818',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        animation: 'pulseYippee 1.2s infinite cubic-bezier(.66,0,.34,1)',
      }}
    >
      <img
        src={yippeeImg}
        alt="Yippee!"
        style={{
          maxWidth: '60vw',
          maxHeight: '60vh',
          objectFit: 'contain',
          borderRadius: 20,
        }}
        draggable={false}
      />
      <div
        style={{
          color: '#fffbe7',
          fontSize: 40,
          fontWeight: 'bold',
          fontFamily: '"Comic Sans MS", "Comic Sans", cursive, sans-serif',
          textAlign: 'center',
          letterSpacing: 2,
          textShadow: '0 2px 8px #000',
          padding: '12px 36px',
          marginTop: 8,
        }}
      >
        Yippee!
      </div>
    </div>
    <style>
      {`
        @keyframes pulseYippee {
          0% { transform: scale(1);}
          40% { transform: scale(1.12);}
          60% { transform: scale(0.97);}
          100% { transform: scale(1);}
        }
      `}
    </style>
  </div>
);

export default YesScreen;