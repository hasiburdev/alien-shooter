export type EnemyType = string | null;

export type LevelType = {
  // targetScore: number;
  enemies: EnemyType[][];
};

// prettier-ignore
export const Levels: LevelType[] = [
  {
    enemies: [
      [ null, "alien", "alien", "alien", "alien", "alien", "alien",  null ],
      [ null, "alien", "alien", "alien", "alien", "alien", "alien", null ],
    ],
  },

  {
    enemies: [
      [ null, "alien","alien", null, null, null, "alien", "alien",  null ],
      [ null, "alien","alien", null, "boss", null, "alien","alien",  null ],
      [ null, "alien","alien", null, null, null, "alien","alien",  null ],
    ],
  },

  {
    enemies: [
      [ null, "alien", "alien", "alien", "alien", "alien", "alien",  null ],
      [ null, "alien", "alien", "alien", "alien", "alien", "alien", null ],
    ],
  },

  {
    enemies: [
      [ null, "alien", "alien", "alien", "alien", "alien", "alien",  null ],
      [ null, "alien", "alien", "alien", "alien", "alien", "alien", null ],
    ],
  },
  {
    enemies: [
      [ null, "alien", "alien", "alien", "alien", "alien", "alien",  null ],
      [ null, "alien", "alien", "alien", "alien", "alien", "alien", null ],
    ],
  },
  {
    enemies: [
      [ null, "alien", "alien", "alien", "alien", "alien", "alien",  null ],
      [ null, "alien", "alien", "alien", "alien", "alien", "alien", null ],
    ],
  },
  {
    enemies: [
      [ null, "alien", "alien", "alien", "alien", "alien", "alien",  null ],
      [ null, "alien", "alien", "alien", "alien", "alien", "alien", null ],
    ],
  },

];
