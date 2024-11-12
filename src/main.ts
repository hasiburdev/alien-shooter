import kaplay, {
  AnchorComp,
  GameObj,
  LayerComp,
  PosComp,
  RotateComp,
  SpriteComp,
} from "kaplay";
import "kaplay/global";

import { Sprites } from "./assets/sprites";
import { Sounds } from "./assets/sounds";
import { victoryScreen } from "./victory";
import { defeatScreen } from "./defeat.screen";

const k = kaplay({
  width: 800,
  height: 1200,
  scale: 1,
  letterbox: true,
  stretch: true,
  loadingScreen: true,
  background: [200, 200, 200],
});

loadSprite("ship", Sprites.Ship.ORANGE_SHIP_1);
loadSprite("alien", Sprites.Alien.NORMAL_ALIEN);
loadSprite("background", Sprites.BACKGROUND);
loadSound("shoot", Sounds.BOOM_1);
loadSound("shoot-alien", Sounds.BOOM_4);
loadSound("enemy-crash-on-bottom", Sounds.ENEMY_CRASH_ON_BOTTOM);
loadSound("shoot-bullet", Sounds.SHOOT_BULLET);
loadSprite("laser-red", Sprites.Laser.RED_SHORT);

layers(["bg", "game", "ui", "ship"], "game");

scene("victory", victoryScreen(k));

k.go("victory");

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

// scene("gameOver", () => {
//   add([
//     sprite("background", { width: width(), height: height() }),
//     pos(0, 0),
//     layer("bg"),
//   ]);
// });

// go("main");
