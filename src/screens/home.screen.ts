import { KAPLAYCtx } from "kaplay";
import { Asset, Scene } from "../constants";
import { Button } from "../components";
import { LevelList } from "../components";
import { drawBackground } from "../lib/utils/draw-background";

export const homeScreen = (k: KAPLAYCtx<{}, never>) => {
  return () => {
    drawBackground(k);

    new LevelList(k);
  };
};
