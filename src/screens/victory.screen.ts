import { KAPLAYCtx } from "kaplay";
import { Asset, Scene } from "../constants";
import { getPlayer } from "../store";

export const victoryScreen = (k: KAPLAYCtx<{}, never>) => {
  return () => {
    const mainRect = k.add([k.rect(k.width(), k.height()), k.pos(0, 0)]);

    k.play(Asset.Sound.WIN_GAME);

    k.add([
      k.sprite(Asset.Sprite.DEFEAT_BG, {
        width: k.width(),
        height: k.height(),
      }),
    ]);

    k.add([
      k.sprite(Asset.Sprite.VICTORY_MODAL, {
        width: 516,
        height: 483,
      }),
      k.pos(k.width() / 2, k.height() / 2),
      k.anchor("center"),
      k.scale(1.3),
    ]);

    const homeButton = k.add([
      k.rect(150, 80, {
        radius: 10,
      }),
      k.area(),
      k.pos(k.width() / 2 - 100, k.height() * 0.72),
      k.outline(2),
      k.anchor("center"),
    ]);

    homeButton.add([k.text("HOME"), k.anchor("center"), k.color([0, 0, 0])]);

    homeButton.onClick(() => {
      k.go(Scene.HOME);
    });

    const nextButton = k.add([
      k.rect(150, 80, {
        radius: 10,
      }),
      k.area(),
      k.pos(k.width() / 2 + 100, k.height() * 0.72),
      k.outline(2),
      k.anchor("center"),
    ]);

    nextButton.add([k.text("NEXT"), k.anchor("center"), k.color([0, 0, 0])]);

    nextButton.onClick(() => {
      k.go(Scene.GAME, { level: getPlayer().currentLevel + 1 });
    });
  };
};
