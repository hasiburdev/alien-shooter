import kaplay from "kaplay";
import "kaplay/global";

import { Sprites } from "./assets/sprites";
import { Sounds } from "./assets/sounds";

const k = kaplay({
  loadingScreen: true,
  background: [200, 200, 200],
});

k.loadSprite("ship", Sprites.Ship.ORANGE_SHIP_1);
k.loadSprite("alien", Sprites.Aliens.NORMAL_ALIEN);
k.loadSound("shoot", Sounds.BOOM_1);

const ship = k.add([
  k.pos(k.width() / 2, k.height() - 40),
  k.sprite("ship", {
    width: 55,
    height: 52.5,
  }),
  k.rotate(180),
  k.anchor("center"),
  //   k.body(),
]);

ship.onKeyDown("right", () => {
  ship.pos.x += 2;

  console.log("Down");
});

ship.onKeyPress("space", () => {
  k.play("shoot");
});

ship.onKeyDown("up", () => {
  ship.pos.y -= 2;
});

ship.onKeyDown("down", () => {
  ship.pos.y += 2;
});

ship.onKeyDown("left", () => {
  ship.pos.x -= 2;
});

const alien = k.add([
  k.pos(k.width() / 2, 50),
  k.sprite("alien", {
    width: 45,
    height: 65,
  }),
  k.anchor("center"),
]);

alien.onUpdate(() => {
  alien.pos.y += 1;
});
