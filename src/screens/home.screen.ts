import { KAPLAYCtx } from "kaplay";
import { Asset, Scene } from "../constants";
import { Button } from "../components";

export const homeScreen = (k: KAPLAYCtx<{}, never>) => {
  return () => {
    k.loadBean();
    k.add([k.sprite(Asset.Sprite.BEAN)]);

    const fullSizeRect = k.add([
      k.rect(k.width(), k.height()),
      k.pos(0, 0),
      k.area(),
    ]);

    new Button(k, "Play", () => {
      k.go(Scene.GAME);
    });

    k.onKeyPress("space", () => {
      k.go(Scene.GAME);
    });
  };
};
