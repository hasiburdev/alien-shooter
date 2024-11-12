import { KAPLAYCtx } from "kaplay";

export const levelsScreen = (k: KAPLAYCtx<{}, never>) => {
  return () => {
    k.loadBean();
    k.add([k.sprite("bean")]);
  };
};
