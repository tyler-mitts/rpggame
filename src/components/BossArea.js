import React from 'react';

const BossArea = ({ bossImg, bossBg, bossY }) => (
  <div
    style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRight: '3px solid #333',
      backgroundImage: `url(${bossBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <h1
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        background: 'linear-gradient(90deg, #222 60%, #b22222 100%)',
        border: '2px solid #fffbe7',
        borderRadius: 12,
        padding: '10px 36px',
        marginBottom: 18,
        letterSpacing: 2,
        boxShadow: '0 2px 16px #000a',
        textShadow: '0 2px 8px #b22222, 0 0px 24px #000',
        fontFamily: '"Trebuchet MS", "Verdana", "Arial", sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span style={{ marginRight: 18 }}>Martin</span>
      <span
        style={{
          display: 'inline-block',
          background: '#fffbe7',
          color: '#b22222',
          fontWeight: 'bold',
          borderRadius: 6,
          padding: '4px 18px',
          fontSize: 22,
          marginLeft: 8,
          boxShadow: '0 1px 6px #0006',
          border: '2px solid #b22222',
          fontFamily: 'monospace',
        }}
      >
        HP: 420
      </span>
    </h1>
    <img
      src={bossImg}
      alt="boss"
      style={{
        width: 400,
        height: 400,
        marginBottom: 20,
        objectFit: 'contain',
        userSelect: 'none',
        pointerEvents: 'none',
        background: 'transparent',
        boxShadow: 'none',
        transform: `translateY(${bossY}px)`,
        transition: 'transform 0.1s',
      }}
      draggable={false}
    />
    <p
      style={{
        display: 'inline-block',
        fontSize: 22,
        marginTop: 30,
        maxWidth: 500,
        textShadow: '0 2px 8px #000',
        background: 'rgba(60,60,60,0.85)',
        borderRadius: 6,
        padding: '6px 16px',
        color: '#fff',
        boxShadow: '0 2px 8px #0005',
        lineHeight: 1.3,
      }}
    >
      <b>Create a loop algorithm to kill Martin!</b>
    </p>
  </div>
);

export default BossArea;