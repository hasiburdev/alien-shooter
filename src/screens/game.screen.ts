import {
  AnchorComp,
  GameObj,
  KAPLAYCtx,
  LayerComp,
  PosComp,
  RotateComp,
  SpriteComp,
} from "kaplay";
import { Asset, Scene } from "../constants";
import { Levels } from "../levels.constant";
import { getPlayer, updateCurrentLevel } from "../store";
import { drawBackground } from "../lib/utils/draw-background";

const createBasic_1_Enemy = (x: number, y: number, k: KAPLAYCtx<{}, never>) => {
  const enemy = k.add([
    k.pos(x, y),
    k.sprite(Asset.Sprite.ENEMY_BASIC_1, {
      width: 45,
      height: 65,
    }),
    k.anchor("center"),
    // k.body(),
    k.area(),
    "alien",
  ]);

  enemy.onUpdate(() => {
    enemy.pos.y += 1;
  });

  return enemy;
};

const createBasic_2_Enemy = (x: number, y: number, k: KAPLAYCtx<{}, never>) => {
  const enemy = k.add([
    k.pos(x, y),
    k.sprite(Asset.Sprite.ENEMY_BASIC_2, {
      width: 45,
      height: 65,
    }),
    k.anchor("center"),
    // k.body(),
    k.area(),
    "alien",
  ]);

  enemy.onUpdate(() => {
    enemy.pos.y += 1;
  });

  return enemy;
};
const createBasic_3_Enemy = (x: number, y: number, k: KAPLAYCtx<{}, never>) => {
  const enemy = k.add([
    k.pos(x, y),
    k.sprite(Asset.Sprite.ENEMY_BASIC_3, {
      width: 45,
      height: 65,
    }),
    k.anchor("center"),
    // k.body(),
    k.area(),
    "alien",
  ]);

  enemy.onUpdate(() => {
    enemy.pos.y += 1;
  });

  return enemy;
};
const createBasic_4_Enemy = (x: number, y: number, k: KAPLAYCtx<{}, never>) => {
  const enemy = k.add([
    k.pos(x, y),
    k.sprite(Asset.Sprite.ENEMY_BASIC_4, {
      width: 45,
      height: 65,
    }),
    k.anchor("center"),
    // k.body(),
    k.area(),
    "alien",
  ]);

  enemy.onUpdate(() => {
    enemy.pos.y += 1;
  });

  return enemy;
};
const createBasic_5_Enemy = (x: number, y: number, k: KAPLAYCtx<{}, never>) => {
  const enemy = k.add([
    k.pos(x, y),
    k.sprite(Asset.Sprite.ENEMY_BASIC_5, {
      width: 45,
      height: 65,
    }),
    k.anchor("center"),
    // k.body(),
    k.area(),
    "alien",
  ]);

  enemy.onUpdate(() => {
    enemy.pos.y += 1;
  });

  return enemy;
};

const createBoss_1_Enemy = (x: number, y: number, k: KAPLAYCtx<{}, never>) => {
  const enemy = k.add([
    k.pos(x, y),
    k.sprite(Asset.Sprite.ENEMY_BOSS_1, {
      width: 145,
      height: 165,
    }),
    k.anchor("center"),
    k.area(),
    "alien",
  ]);

  enemy.onUpdate(() => {
    enemy.pos.y += 1;
  });

  return enemy;
};

const createBoss_2_Enemy = (x: number, y: number, k: KAPLAYCtx<{}, never>) => {
  const enemy = k.add([
    k.pos(x, y),
    k.sprite(Asset.Sprite.ENEMY_BOSS_2, {
      width: 145,
      height: 165,
    }),
    k.anchor("center"),
    k.area(),
    "alien",
  ]);

  enemy.onUpdate(() => {
    enemy.pos.y += 1;
  });

  return enemy;
};

const createBoss_3_Enemy = (x: number, y: number, k: KAPLAYCtx<{}, never>) => {
  const enemy = k.add([
    k.pos(x, y),
    k.sprite(Asset.Sprite.ENEMY_BOSS_3, {
      width: 145,
      height: 165,
    }),
    k.anchor("center"),
    k.area(),
    "alien",
  ]);

  enemy.onUpdate(() => {
    enemy.pos.y += 1;
  });

  return enemy;
};

const createBoss_4_Enemy = (x: number, y: number, k: KAPLAYCtx<{}, never>) => {
  const enemy = k.add([
    k.pos(x, y),
    k.sprite(Asset.Sprite.ENEMY_BOSS_4, {
      width: 145,
      height: 165,
    }),
    k.anchor("center"),
    k.area(),
    "alien",
  ]);

  enemy.onUpdate(() => {
    enemy.pos.y += 1;
  });

  return enemy;
};

const createBoss_5_Enemy = (x: number, y: number, k: KAPLAYCtx<{}, never>) => {
  const enemy = k.add([
    k.pos(x, y),
    k.sprite(Asset.Sprite.ENEMY_BOSS_5, {
      width: 145,
      height: 165,
    }),
    k.anchor("center"),
    k.area(),
    "alien",
  ]);

  enemy.onUpdate(() => {
    enemy.pos.y += 1;
  });

  return enemy;
};

const createTimer = (k: KAPLAYCtx<{}, never>, level: number) => {
  const timer = k.add([k.text("0"), k.pos(12, 32), k.fixed(), { time: 0 }]);

  timer.onUpdate(() => {
    timer.time += k.dt();
    timer.text = timer.time.toFixed(2);

    if (timer.time > 30) {
      gameLose(k, level);
    }
  });

  return timer;
};

const createEnemyFleet = (k: KAPLAYCtx<{}, never>, currentLevel?: number) => {
  const player = getPlayer();

  const currentLevelIndex = currentLevel || player.currentLevel;

  const enemies = Levels[currentLevelIndex - 1].enemies;

  const aliens = [];

  for (const [rowIndex, enemyRow] of enemies.entries()) {
    for (const [columnIndex, enemyColumn] of enemyRow.entries()) {
      const columnWidth = k.width() / enemyRow.length;
      const columnOffset = columnWidth / 2;
      const positionX = columnOffset + columnWidth * columnIndex;
      const positionY = columnOffset + columnWidth * rowIndex;

      if (enemyColumn === "NONE") {
        continue;
      }

      switch (enemyColumn) {
        case "BASIC_1":
          aliens.push(createBasic_1_Enemy(positionX, positionY, k));
          break;
        case "BASIC_2":
          aliens.push(createBasic_2_Enemy(positionX, positionY, k));
          break;
        case "BASIC_3":
          aliens.push(createBasic_3_Enemy(positionX, positionY, k));
          break;
        case "BASIC_4":
          aliens.push(createBasic_4_Enemy(positionX, positionY, k));
          break;
        case "BASIC_5":
          aliens.push(createBasic_5_Enemy(positionX, positionY, k));
          break;
        case "BOSS_1":
          aliens.push(createBoss_1_Enemy(positionX, positionY, k));
          break;
        case "BOSS_2":
          aliens.push(createBoss_2_Enemy(positionX, positionY, k));
          break;
        case "BOSS_3":
          aliens.push(createBoss_3_Enemy(positionX, positionY, k));
          break;
        case "BOSS_4":
          aliens.push(createBoss_4_Enemy(positionX, positionY, k));
          break;
        case "BOSS_5":
          aliens.push(createBoss_5_Enemy(positionX, positionY, k));
          break;
      }
    }
  }

  return aliens;
};

const createShip = (k: KAPLAYCtx<{}, never>) => {
  const ship = k.add([
    k.pos(k.width() / 2, k.height() - 40),
    k.sprite("ship", {
      width: 75,
      height: 70.5,
    }),
    k.rotate(180),
    k.anchor("center"),
    k.layer("ship"),
    k.area(),
    {
      health: 100,
      bulletType: "basic",
    },
  ]);

  ship.onKeyDown("up", () => {
    if (ship.pos.y > ship.height / 2) ship.pos.y -= 5;
  });

  ship.onKeyDown("down", () => {
    if (ship.pos.y < k.height() - ship.height / 2) ship.pos.y += 5;
  });

  ship.onKeyDown("right", () => {
    if (ship.pos.x < k.width() - ship.width / 2) ship.pos.x += 5;
  });

  ship.onKeyDown("left", () => {
    if (ship.pos.x > ship.width / 2) ship.pos.x -= 5;
  });

  ship.onKeyPress("space", () => {
    k.play("shoot-bullet");
    createBullet(ship, k);
  });

  return ship;
};

const createBullet = (
  ship: GameObj<SpriteComp | PosComp | LayerComp | RotateComp | AnchorComp>,
  k: KAPLAYCtx<{}, never>
) => {
  const position = ship.pos.clone();

  // console.log(ship.bulletType);
  // if()

  const laser = k.add([
    k.sprite("laser-red", { height: 50, width: 50 }),
    k.pos(position.x, position.y - 50),
    k.rotate(-90),
    k.anchor("center"),
    k.layer("ui"),
    k.area({
      shape: new k.Rect(new k.Vec2(0, 0), 10, 10),
    }),
    "laser",
  ]);

  laser.onUpdate(() => {
    laser.pos.y -= 4;
  });
};

const gameWin = (k: KAPLAYCtx<{}, never>, level: number) => {
  updateCurrentLevel();
  k.go(Scene.VICTORY, { level });
};

const gameLose = (k: KAPLAYCtx<{}, never>, level: number) => {
  k.play("enemy-crash-on-bottom");
  k.go(Scene.DEFEAT, { level });
};

export const gameScreen = (k: KAPLAYCtx<{}, never>) => {
  return ({ level }: { level?: number }) => {
    drawBackground(k);

    // Start the main scene

    const ship = createShip(k);

    const aliens = createEnemyFleet(k, level);

    for (const alien of aliens) {
      alien?.onUpdate(() => {
        if (alien.pos.y >= k.height() - 32.5) {
          gameLose(k, level);
        }
      });

      alien?.onCollide("laser", (laser) => {
        k.play("shoot-alien");

        k.destroy(laser);
        k.destroy(alien);
      });

      alien?.onDestroy((e) => {});
    }

    ship.onCollide("alien", (alien) => {
      gameLose(k, level);
    });

    k.onUpdate(() => {
      const existingAlienNumber = aliens.filter((item) =>
        item?.exists()
      ).length;

      if (existingAlienNumber <= 0) {
        gameWin(k, level);
      }
    });

    createTimer(k, level);
  };
};
