export enum Scene {
  HOME = "home",
  LEVELS = "LEVELS",
  VICTORY = "VICTORY",
  DEFEAT = "DEFEAT",
  GAME = "GAME",
}

export enum SpriteAsset {
  BEAN = "bean",
  SHIP = "ship",
  ALIEN = "alien",
  BACKGROUND = "background",
  LASER_RED = "laser-red",
  VICTORY_MODAL = "victory-modal",
  DEFEAT_MODAL = "defeat-modal",
  DEFEAT_BG = "defeat-bg",
}

export enum SoundAsset {
  SHOOT = "shoot",
  SHOOT_ALIEN = "shoot-alien",
  ENEMY_CRASH_ON_BOTTOM = "enemy-crash-on-bottom",
  SHOOT_BULLET = "shoot-bullet",
  WIN_GAME = "win-game",
}

export const Asset = {
  Sprite: SpriteAsset,
  Sound: SoundAsset,
};
