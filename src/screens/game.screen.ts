import { KAPLAYCtx } from "kaplay";

export const gameScreen = (k: KAPLAYCtx<{}, never>) => {
  return () => {
    k.loadBean();
    k.add([k.sprite("bean"), k.pos(100, 100)]);
  };
};
