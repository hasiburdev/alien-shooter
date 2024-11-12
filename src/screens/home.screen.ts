import { KAPLAYCtx } from "kaplay";
import { Asset, Scene } from "../constants";
import { Button } from "../components";

export const homeScreen = (k: KAPLAYCtx<{}, never>) => {
  return () => {
    k.add([
      k.sprite(Asset.Sprite.BACKGROUND, {
        width: k.width(),
        height: k.height(),
      }),
      k.pos(0, 0),
      k.layer("bg"),
    ]);

    const ship = k.add([
      k.pos(k.width() / 2, k.height() * 0.5),
      k.sprite("ship", {
        width: 75,
        height: 70.5,
      }),
      k.scale(3),
      k.rotate(180),
      k.anchor("center"),
      k.layer("ship"),
      k.area(),
    ]);

    new Button(
      k,
      "Play",
      () => {
        k.go(Scene.GAME);
      },
      [k.width() / 2, k.height() * 0.75]
    );

    k.onKeyPress("space", () => {
      k.go(Scene.GAME);
    });
  };
};
