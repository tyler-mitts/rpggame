import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import {
  GAME_WIDTH, GAME_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT,
  ENEMY_WIDTH, ENEMY_HEIGHT, initialPlayer, initialEnemies, bossTriggerX
} from '../components/levelConstants';
import Player from '../components/Player';
import Enemy from '../components/Enemy';

const LevelScreen = () => {
  const [player, setPlayer] = useState(initialPlayer);
  const [enemies, setEnemies] = useState(initialEnemies);
  const [message, setMessage] = useState('Defeat all enemies to reach the boss!');
  const [gameOver, setGameOver] = useState(false);
  const [bossFight, setBossFight] = useState(false);
  const [attackAnim, setAttackAnim] = useState(false);
  const [fade, setFade] = useState(false);

  const keys = useRef({});
  const navigate = useNavigate();

  const [cameraX, setCameraX] = useState(0);

  //Keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      keys.current[e.key.toLowerCase()] = true;
    };
    const handleKeyUp = (e) => {
      keys.current[e.key.toLowerCase()] = false;
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setPlayer((prev) => {
        let newX = prev.x;
        if (keys.current['a']) newX = Math.max(0, prev.x - 8);
        if (keys.current['d']) newX = Math.min(GAME_WIDTH - PLAYER_WIDTH, prev.x + 8);
        return { ...prev, x: newX };
      });
    }, 20);
    return () => clearInterval(interval);
  }, [gameOver]);

  //Keeps camera centered on player
  useEffect(() => {
    const screenWidth = window.innerWidth;
    let cam = player.x + PLAYER_WIDTH / 2 - screenWidth / 2;
    cam = Math.max(0, Math.min(cam, GAME_WIDTH - screenWidth));
    setCameraX(cam);
  }, [player.x]);

  //Attack logic
  useEffect(() => {
    if (gameOver) return;
    const handleAttack = (e) => {
      if (e.code === 'Space' && !attackAnim) {
        setAttackAnim(true);
        setTimeout(() => setAttackAnim(false), 150);

        if (!bossFight) {
          setEnemies((prev) =>
            prev.map((enemy) => {
              if (
                enemy.alive &&
                Math.abs(player.x + PLAYER_WIDTH / 2 - (enemy.x + ENEMY_WIDTH / 2)) < 40
              ) {
                setMessage('Enemy defeated!');
                return { ...enemy, alive: false };
              }
              return enemy;
            })
          );
        }
      }
    };
    window.addEventListener('keydown', handleAttack);
    return () => window.removeEventListener('keydown', handleAttack);
  }, [player.x, bossFight, attackAnim, gameOver]);

  //Checks to see if all enemies are defeated
  useEffect(() => {
    if (!bossFight && enemies.every((e) => !e.alive)) {
      setBossFight(true);
      setMessage('The path to the boss is open! Move to the far right...');
    }
  }, [enemies, bossFight]);

  // Fade to black and navigates to boss screen
  useEffect(() => {
    if (
      bossFight &&
      player.x + PLAYER_WIDTH > bossTriggerX - 20 //Near the boss area
    ) {
      setFade(true);
      setTimeout(() => {
        navigate('/boss');
      }, 1200);
    }
  }, [player.x, bossFight, navigate]);

  useEffect(() => {
    if (gameOver) {
      setTimeout(() => {
        setMessage('Game Over! Refresh the page to play again.');
      }, 1500);
    }
  }, [gameOver]);

  return (
    <div
      style={{
        color: 'white',
        textAlign: 'center',
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: '#181818',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <h1>Level 1: Tutorial</h1>
      <div>
        <strong>Health:</strong> {player.health}
      </div>
      <p>{message}</p>
      <div
        style={{
          position: 'relative',
          margin: '0 auto',
          background: '#222',
          width: '100vw',
          height: GAME_HEIGHT,
          border: '3px solid #444',
          borderRadius: 10,
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Game world */}
        <div
          style={{
            position: 'absolute',
            left: -cameraX,
            top: 0,
            width: GAME_WIDTH,
            height: GAME_HEIGHT,
            transition: 'left 0.08s',
          }}
        >
          {/* Player */}
          <Player x={player.x} y={player.y} attackAnim={attackAnim} />
          {/* Enemies */}
          {enemies.map(
            (enemy) =>
              enemy.alive && <Enemy key={enemy.id} enemy={enemy} />
          )}
        </div>
        {/* Fade overlay */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100vw',
            height: GAME_HEIGHT,
            background: 'black',
            opacity: fade ? 1 : 0,
            pointerEvents: fade ? 'auto' : 'none',
            transition: 'opacity 1s',
            zIndex: 10,
          }}
        />
      </div>
      <div style={{ marginTop: 20, color: '#aaa', fontSize: 15 }}>
        Controls: <b>A</b> = Left, <b>D</b> = Right, <b>Space</b> = Attack
      </div>
    </div>
  );
};

export default LevelScreen;