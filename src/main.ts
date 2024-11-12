import kaplay, {
  AnchorComp,
  GameObj,
  LayerComp,
  PosComp,
  RotateComp,
  SpriteComp,
} from "kaplay";
// import "kaplay/global";

import { Sprites } from "./assets/sprites";
import { Sounds } from "./assets/sounds";
import { victoryScreen } from "./victory";

import {
  homeScreen,
  defeatScreen,
  gameScreen,
  levelsScreen,
  victryScreen,
} from "./screens";
import { Scene } from "./constants";

export const k = kaplay({
  height: 1200,
  width: 800,
  scale: 1,
  letterbox: true,
  stretch: true,
  loadingScreen: true,
  background: [200, 200, 200],
  global: false,
});

// All screens
k.scene(Scene.HOME, homeScreen(k));
k.scene(Scene.DEFEAT, defeatScreen(k));
k.scene(Scene.GAME, gameScreen(k));
k.scene(Scene.LEVELS, levelsScreen(k));
k.scene(Scene.VICTORY, victryScreen(k));

k.go(Scene.HOME);

// k.loadSprite("ship", Sprites.Ship.ORANGE_SHIP_1);
// k.loadSprite("alien", Sprites.Alien.NORMAL_ALIEN);
// k.loadSprite("background", Sprites.BACKGROUND);
// k.loadSound("shoot", Sounds.BOOM_1);
// k.loadSound("shoot-alien", Sounds.BOOM_4);
// k.loadSound("enemy-crash-on-bottom", Sounds.ENEMY_CRASH_ON_BOTTOM);
// k.loadSound("shoot-bullet", Sounds.SHOOT_BULLET);
// k.loadSprite("laser-red", Sprites.Laser.RED_SHORT);

// k.layers(["bg", "game", "ui", "ship"], "game");

// Add the background image to the scene
// scene("main", () => {
//   add([
//     sprite("background", { width: width(), height: height() }),
//     pos(0, 0),
//     layer("bg"),
//   ]);

//   // Start the main scene
//   const ship = add([
//     pos(width() / 2, height() - 40),
//     sprite("ship", {
//       width: 55,
//       height: 52.5,
//     }),
//     rotate(180),
//     anchor("center"),
//     layer("ship"),
//     body(),
//     area(),
//   ]);

//   const createBullet = (
//     ship: GameObj<SpriteComp | PosComp | LayerComp | RotateComp | AnchorComp>
//   ) => {
//     const position = ship.pos.clone();

//     const laser = add([
//       sprite("laser-red", { height: 50, width: 50 }),
//       pos(position.x, position.y - 50),
//       rotate(-90),
//       anchor("center"),
//       body(),
//       layer("ui"),
//       area(),
//       "laser",
//     ]);

//     laser.onUpdate(() => {
//       laser.pos.y -= 4;
//     });
//   };

//   ship.onKeyPress("space", () => {
//     play("shoot-bullet");
//     createBullet(ship);
//   });

//   ship.onKeyDown("up", () => {
//     if (ship.pos.y > ship.height / 2) ship.pos.y -= 5;
//   });

//   ship.onKeyDown("down", () => {
//     if (ship.pos.y < height() - ship.height / 2) ship.pos.y += 5;
//   });

//   ship.onKeyDown("right", () => {
//     if (ship.pos.x < width() - ship.width / 2) ship.pos.x += 5;
//   });

//   ship.onKeyDown("left", () => {
//     if (ship.pos.x > ship.width / 2) ship.pos.x -= 5;
//   });

//   const alien = add([
//     pos(width() / 2, 50),
//     sprite("alien", {
//       width: 45,
//       height: 65,
//     }),
//     anchor("center"),
//     body(),
//     area(),
//     "alien",
//   ]);

//   alien.onUpdate(() => {
//     if (alien.pos.y >= height() - 32.5) {
//       gameOver();
//     }
//     alien.pos.y += 1;
//   });

//   const gameOver = () => {
//     play("enemy-crash-on-bottom");
//     go("gameOver");
//   };

//   ship.onCollide("alien", (alien) => {
//     destroy(alien);
//   });

//   alien.onCollide("laser", (laser) => {
//     play("shoot-alien");

//     destroy(laser);
//     destroy(alien);
//   });

//   // Other game objects and logic here
// });
// // Add the background image to the scene
// k.scene("main", () => {
//   // add([
//   //   sprite("background", { width: width(), height: height() }),
//   //   pos(0, 0),
//   //   layer("bg"),
//   // ]);
//   // // Start the main scene
//   // const ship = add([
//   //   pos(width() / 2, height() - 40),
//   //   sprite("ship", {
//   //     width: 55,
//   //     height: 52.5,
//   //   }),
//   //   rotate(180),
//   //   anchor("center"),
//   //   layer("ship"),
//   //   body(),
//   //   area(),
//   // ]);
//   // const createBullet = (
//   //   ship: GameObj<SpriteComp | PosComp | LayerComp | RotateComp | AnchorComp>
//   // ) => {
//   //   const position = ship.pos.clone();
//   //   const laser = add([
//   //     sprite("laser-red", { height: 50, width: 50 }),
//   //     pos(position.x, position.y - 50),
//   //     rotate(-90),
//   //     anchor("center"),
//   //     body(),
//   //     layer("ui"),
//   //     area(),
//   //     "laser",
//   //   ]);
//   //   laser.onUpdate(() => {
//   //     laser.pos.y -= 4;
//   //   });
//   // };
//   // ship.onKeyPress("space", () => {
//   //   play("shoot-bullet");
//   //   createBullet(ship);
//   // });
//   // ship.onKeyDown("up", () => {
//   //   if (ship.pos.y > ship.height / 2) ship.pos.y -= 5;
//   // });
//   // ship.onKeyDown("down", () => {
//   //   if (ship.pos.y < height() - ship.height / 2) ship.pos.y += 5;
//   // });
//   // ship.onKeyDown("right", () => {
//   //   if (ship.pos.x < width() - ship.width / 2) ship.pos.x += 5;
//   // });
//   // ship.onKeyDown("left", () => {
//   //   if (ship.pos.x > ship.width / 2) ship.pos.x -= 5;
//   // });
//   // const alien = add([
//   //   pos(width() / 2, 50),
//   //   sprite("alien", {
//   //     width: 45,
//   //     height: 65,
//   //   }),
//   //   anchor("center"),
//   //   body(),
//   //   area(),
//   //   "alien",
//   // ]);
//   // alien.onUpdate(() => {
//   //   if (alien.pos.y >= height() - 32.5) {
//   //     gameOver();
//   //   }
//   //   alien.pos.y += 1;
//   // });
//   // const gameOver = () => {
//   //   play("enemy-crash-on-bottom");
//   //   go("gameOver");
//   // };
//   // ship.onCollide("alien", (alien) => {
//   //   destroy(alien);
//   // });
//   // alien.onCollide("laser", (laser) => {
//   //   play("shoot-alien");
//   //   destroy(laser);
//   //   destroy(alien);
//   // });
//   // Other game objects and logic here
// });

// scene("gameOver", () => {
//   add([
//     sprite("background", { width: width(), height: height() }),
//     pos(0, 0),
//     layer("bg"),
//   ]);
// });
// k.scene("gameOver", () => {
//   k.add([
//     k.sprite("background", { width: k.width(), height: k.height() }),
//     k.pos(0, 0),
//     k.layer("bg"),
//   ]);
// });

// go("main");
// k.go("main");
