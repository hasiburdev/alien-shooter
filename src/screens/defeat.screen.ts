import { KAPLAYCtx } from "kaplay";
import { Asset, Scene } from "../constants";

export const defeatScreen = (k: KAPLAYCtx<{}, never>) => {
  return () => {
    const mainRect = k.add([k.rect(k.width(), k.height()), k.pos(0, 0)]);

    k.add([
      k.sprite(Asset.Sprite.DEFEAT_BG, {
        width: k.width(),
        height: k.height(),
      }),
    ]);

    k.add([
      k.sprite(Asset.Sprite.DEFEAT_MODAL, {
        width: 516,
        height: 483,
      }),
      k.pos(k.width() / 2, k.height() / 2),
      k.anchor("center"),
      k.scale(1.5),
    ]);

    const homeButton = k.add([
      k.rect(66, 66, {
        radius: 33,
      }),
      k.area(),
      k.pos(550, 726),
      k.opacity(0),
      k.anchor("center"),
    ]);

    homeButton.onClick(() => {
      k.go(Scene.HOME);
    });

    const retryButton = k.add([
      k.rect(66, 66, {
        radius: 33,
      }),
      k.area(),
      k.pos(248, 726),
      k.opacity(0),
      k.anchor("center"),
    ]);

    retryButton.onClick(() => {
      k.go(Scene.GAME);
    });
  };
};
