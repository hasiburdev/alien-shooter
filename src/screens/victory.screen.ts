import { KAPLAYCtx } from "kaplay";

export const victryScreen = (k: KAPLAYCtx<{}, never>) => {
  return () => {
    k.loadBean();
    k.add([k.sprite("bean")]);
  };
};
