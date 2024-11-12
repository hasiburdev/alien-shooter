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

export const gameScreen = (k: KAPLAYCtx<{}, never>) => {
  return () => {
    k.add([
      k.sprite(Asset.Sprite.BACKGROUND, {
        width: k.width(),
        height: k.height(),
      }),
      k.pos(0, 0),
      k.layer("bg"),
    ]);

    // Start the main scene
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
    ]);

    const createBullet = (
      ship: GameObj<SpriteComp | PosComp | LayerComp | RotateComp | AnchorComp>
    ) => {
      const position = ship.pos.clone();

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

    ship.onKeyPress("space", () => {
      k.play("shoot-bullet");
      createBullet(ship);
    });

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

    const alien = k.add([
      k.pos(k.width() / 2, 50),
      k.sprite("alien", {
        width: 45,
        height: 65,
      }),
      k.anchor("center"),
      k.body(),
      k.area(),
      "alien",
    ]);

    alien.onUpdate(() => {
      if (alien.pos.y >= k.height() - 32.5) {
        gameLose();
      }
      alien.pos.y += 4;
    });

    const gameWin = () => {
      k.go(Scene.VICTORY);
    };

    const gameLose = () => {
      k.play("enemy-crash-on-bottom");
      k.go(Scene.DEFEAT);
    };

    ship.onCollide("alien", (alien) => {
      gameLose();
    });

    alien.onCollide("laser", (laser) => {
      k.play("shoot-alien");

      k.destroy(laser);
      k.destroy(alien);
    });

    alien.onDestroy(() => {
      gameWin();
    });

    // console.log(alien)
  };
};
