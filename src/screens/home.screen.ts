import { KAPLAYCtx } from "kaplay";
import { Scene } from "../constants";
import { Button } from "../components";

export const homeScreen = (k: KAPLAYCtx<{}, never>) => {
  return () => {
    k.loadBean();
    k.add([k.sprite("bean")]);

    const fullSizeRect = k.add([
      k.rect(k.width(), k.height()),
      k.pos(0, 0),
      k.area(),
    ]);

    const playButton = new Button(k, "Play");
  };
};
