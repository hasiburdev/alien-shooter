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

  ENEMY_LEVEL_1_BOSS = "enemy-level-1-boss",
  ENEMY_LEVEL_1_ROW_1 = "enemy-level-1-row-1",
  ENEMY_LEVEL_1_ROW_2 = "enemy-level-1-row-2",
  ENEMY_LEVEL_1_ROW_3 = "enemy-level-1-row-3",
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
