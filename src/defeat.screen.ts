import { KAPLAYCtx } from "kaplay";

export const defeatScreen = (k: KAPLAYCtx<{}, never>) => {
  return () => {
    k.loadSprite("defeat", "/sprites/defeat_bg.png");
    k.loadSprite("defeat_bg", "/sprites/defeat-bg.png");
    const mainRect = k.add([k.rect(k.width(), k.height()), k.pos(0, 0)]);
    k.add([
      k.sprite("defeat", {
        width: 516,
        height: 483,
      }),
      k.pos(k.width() / 2, k.height() / 2),
      k.anchor("center"),
      k.scale(1.5),
    ]);

    // k.add([k.sprite("defeat_bg", { width: k.width(), height: k.height() })]);

    const homeButton = k.add([
      k.rect(66, 66, {
        radius: 33,
      }),
      k.area(),
      k.pos(550, 726),
      //   k.outline(2),
      k.opacity(0),
      k.anchor("center"),
    ]);

    // homeButton.add([k.text("HOME"), k.anchor("center"), k.color([0, 0, 0])]);

    homeButton.onClick(() => {
      k.go("home");
    });

    const retryButton = k.add([
      k.rect(66, 66, {
        radius: 33,
      }),
      k.area(),
      k.pos(248, 726),
      //   k.outline(2),
      k.opacity(0),
      k.anchor("center"),
    ]);

    // homeButton.add([k.text("HOME"), k.anchor("center"), k.color([0, 0, 0])]);

    retryButton.onClick(() => {
      k.go("retry");
    });

    // victoryRect.draw(homeButton);
  };
};
