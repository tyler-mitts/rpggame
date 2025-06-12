export const GAME_WIDTH = 4000;
export const GAME_HEIGHT = 400;
export const PLAYER_WIDTH = 40;
export const PLAYER_HEIGHT = 40;
export const ENEMY_WIDTH = 30;
export const ENEMY_HEIGHT = 30;

export const initialPlayer = { x: 50, y: GAME_HEIGHT - PLAYER_HEIGHT - 10, health: 100 };
export const initialEnemies = [
  { id: 1, x: 400, y: GAME_HEIGHT - ENEMY_HEIGHT - 10, alive: true },
  { id: 2, x: 900, y: GAME_HEIGHT - ENEMY_HEIGHT - 10, alive: true },
  { id: 3, x: 1400, y: GAME_HEIGHT - ENEMY_HEIGHT - 10, alive: true },
  { id: 4, x: 1900, y: GAME_HEIGHT - ENEMY_HEIGHT - 10, alive: true },
  { id: 5, x: 2400, y: GAME_HEIGHT - ENEMY_HEIGHT - 10, alive: true },
  { id: 6, x: 2900, y: GAME_HEIGHT - ENEMY_HEIGHT - 10, alive: true },
  { id: 7, x: 3300, y: GAME_HEIGHT - ENEMY_HEIGHT - 10, alive: true },
  { id: 8, x: 3700, y: GAME_HEIGHT - ENEMY_HEIGHT - 10, alive: true },
];
export const bossTriggerX = 3900;