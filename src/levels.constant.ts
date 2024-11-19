import { EnemyTypes } from "./lib/enums/enemy-type.enum";

export type EnemyType = keyof typeof EnemyTypes;

export type LevelType = {
  // targetScore: number;
  enemies: EnemyType[][];
};

// prettier-ignore
export const Levels: LevelType[] = [
  {
    enemies: [
      [ "NONE", "BASIC_1", "BASIC_1", "BASIC_1", "BASIC_1", "NONE" ],
      [ "NONE", "BASIC_1", "BASIC_1", "BASIC_1", "BASIC_1", "NONE" ],
      [ "NONE", "BASIC_1", "BASIC_1", "BASIC_1", "BASIC_1", "NONE" ],
    ],
  },
  {
    enemies: [
      [ "NONE", "BASIC_1","BASIC_1", "BASIC_3", "BASIC_1", "BASIC_1", "NONE" ],
      [ "NONE", "BASIC_2","BASIC_2", "BOSS_1",  "BASIC_2","BASIC_2", "NONE" ],
      [ "NONE", "BASIC_1","BASIC_1", "BASIC_1", "BASIC_1", "BASIC_1", "NONE" ],
      [ "NONE", "BASIC_1","BASIC_1", "BASIC_1","BASIC_1", "BASIC_1", "NONE" ],
    ],
  },
  {
    enemies: [
      [ "NONE", "BASIC_1","BASIC_1", "BASIC_5", "BASIC_1", "BASIC_1", "NONE" ],
      [ "NONE", "BASIC_3","BASIC_2", "BOSS_2",  "BASIC_2","BASIC_3", "NONE" ],
      [ "NONE", "BASIC_2","BASIC_2", "BASIC_2",  "BASIC_2","BASIC_2", "NONE" ],
      [ "NONE", "BASIC_1","BASIC_1", "BASIC_1","BASIC_1", "BASIC_1", "NONE" ],
    ],
  },
  {
    enemies: [
      [ "NONE", "BASIC_4","BASIC_4", "BASIC_2", "BASIC_4", "BASIC_4", "NONE" ],
      [ "NONE", "BASIC_3","BASIC_2", "BOSS_3",  "BASIC_2","BASIC_3", "NONE" ],
      [ "NONE", "BASIC_2","BASIC_2", "BASIC_2",  "BASIC_2","BASIC_2", "NONE" ],
      [ "NONE", "BASIC_1","BASIC_1", "BASIC_1","BASIC_1", "BASIC_1", "NONE" ],
    ],
  },
  {
    enemies: [
      [ "NONE", "BASIC_4","BASIC_4", "BASIC_3", "BASIC_4", "BASIC_4", "NONE" ],
      [ "NONE", "BASIC_3","BASIC_2", "BOSS_4",  "BASIC_2","BASIC_3", "NONE" ],
      [ "NONE", "BASIC_5","BASIC_3", "BASIC_1",  "BASIC_2","BASIC_4", "NONE" ],
      [ "NONE", "BASIC_1","BASIC_2", "BASIC_3","BASIC_4", "BASIC_5", "NONE" ],
    ],
  },
  {
    enemies: [
      [ "NONE", "BASIC_4","BASIC_4", "BASIC_1", "BASIC_4", "BASIC_4", "NONE" ],
      [ "NONE", "BASIC_3","BASIC_2", "BOSS_5",  "BASIC_2","BASIC_3", "NONE" ],
      [ "NONE", "BASIC_5","BASIC_3", "BASIC_1",  "BASIC_2","BASIC_4", "NONE" ],
      [ "NONE", "BASIC_1","BASIC_2", "BASIC_3","BASIC_4", "BASIC_5", "NONE" ],
      [ "NONE", "BASIC_5","BASIC_3", "BASIC_4","BASIC_2", "BASIC_2", "NONE" ],
    ],
  },


];
