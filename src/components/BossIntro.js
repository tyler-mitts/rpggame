import React from 'react';

const BossIntro = ({ introFade, introTextFadeIn }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      background: introFade ? '#000' : '#181818',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      transition: 'background 1.5s',
    }}
  >
    <div
      style={{
        fontSize: '6vw',
        fontWeight: 'bold',
        letterSpacing: 2,
        textShadow: '0 2px 16px #000, 0 0 40px #b22222',
        textAlign: 'center',
        opacity: introFade ? 0 : (introTextFadeIn ? 1 : 0),
        transition: 'opacity 1s 0.2s',
        animation: introFade ? undefined : 'fadeInBossText 2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      BOSS BATTLE
      <div
        style={{
          fontSize: '2vw',
          fontWeight: 'normal',
          marginTop: '2vw',
          color: '#fff',
          textShadow: '0 2px 8px #000',
          maxWidth: 700,
        }}
      >
        Write a loop algorithm to defeat the boss!
      </div>
    </div>
    <style>
      {`
        @keyframes fadeInBossText {
          0% { opacity: 0; transform: scale(0.9);}
          20% { opacity: 1; transform: scale(1.05);}
          80% { opacity: 1; }
          100% { opacity: 0.95; transform: scale(1);}
        }
      `}
    </style>
  </div>
);

export default BossIntro;