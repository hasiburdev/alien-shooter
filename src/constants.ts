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

  // ENEMY_LEVEL_1_BOSS = "enemy-level-1-boss",
  // ENEMY_LEVEL_1_ROW_1 = "enemy-level-1-row-1",
  // ENEMY_LEVEL_1_ROW_2 = "enemy-level-1-row-2",
  // ENEMY_LEVEL_1_ROW_3 = "enemy-level-1-row-3",

  ENEMY_BASIC_1 = "enemy-basic-1",
  ENEMY_BASIC_2 = "enemy-basic-2",
  ENEMY_BASIC_3 = "enemy-basic-3",
  ENEMY_BASIC_4 = "enemy-basic-4",
  ENEMY_BASIC_5 = "enemy-basic-5",

  ENEMY_BOSS_1 = "enemy-boss-1",
  ENEMY_BOSS_2 = "enemy-boss-2",
  ENEMY_BOSS_3 = "enemy-boss-3",
  ENEMY_BOSS_4 = "enemy-boss-4",
  ENEMY_BOSS_5 = "enemy-boss-5",
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
