export type Player = {
  currentLevel: number;
  coins: number;
  activeShip: string;
  ships: string[];
  levelHistory: {
    level: number;
    score: number;
  }[];
};

export const setPlayer = (player: Player) => {
  localStorage.setItem("player", JSON.stringify(player));
};

export const getPlayer = (): Player => {
  const localStorePlayer = localStorage.getItem("player");

  if (localStorePlayer) {
    return JSON.parse(localStorePlayer);
  }

  const newPlayer: Player = {
    levelHistory: [],
    currentLevel: 1,
    coins: 0,
    activeShip: "ship1",
    ships: ["ship1"],
  };

  setPlayer(newPlayer);

  return newPlayer;
};

export const resetPlayer = () => {
  localStorage.removeItem("player");
};

export const addCoin = (amount: number) => {
  const player = getPlayer();
  player.coins += amount;
  setPlayer(player);
};

export const addShip = (ship: string) => {
  const player = getPlayer();
  player.ships.push(ship);
  setPlayer(player);
};

export const setActiveShip = (ship: string) => {
  const player = getPlayer();
  player.activeShip = ship;
  setPlayer(player);
};

export const addLevelHistory = (level: number, score: number) => {
  const player = getPlayer();

  // if ()
  const existingLevel = player.levelHistory.find(
    (history) => history.level === level
  );

  if (existingLevel) {
    if (existingLevel.score < score) {
      existingLevel.score = score;
    }
  } else {
    player.levelHistory.push({ level, score });
  }

  player.levelHistory.push({ level, score });
  setPlayer(player);
};

export const updateCurrentLevel = () => {
  const player = getPlayer();
  player.currentLevel = player.currentLevel + 1;
  setPlayer(player);
};
