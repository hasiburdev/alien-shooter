import { KAPLAYCtx } from "kaplay";
export const victoryScreen = (k: KAPLAYCtx<{}, never>) => {
  return () => {
    k.loadSprite("victory", "/sprites/victory.png");
    const mainRect = k.add([k.rect(k.width(), k.height()), k.pos(0, 0)]);
    k.add([
      k.sprite("victory", {
        width: 516,
        height: 483,
      }),
      k.pos(k.width() / 2, k.height() / 2),
      k.anchor("center"),
      k.scale(1.3),
    ]);
    // const victoryRect = k.add([
    //   k.rect(k.width() * 0.6, k.height() * 0.6, {
    //     radius: 20,
    //   }),
    //   k.anchor("center"),
    //   k.pos(k.width() / 2, k.height() / 2),
    //   k.color([121, 121, 121]),
    // ]);
    k.add([]);
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
      //   k.go("home")
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
      //   k.go("game");
    });

    // victoryRect.draw(homeButton);
  };
};
