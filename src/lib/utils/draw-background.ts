import { KAPLAYCtx } from "kaplay";
import { Asset } from "../../constants";

export function drawBackground(k: KAPLAYCtx<{}, never>) {
  k.add([
    k.sprite(Asset.Sprite.BACKGROUND, {
      width: k.width(),
      height: k.height(),
    }),
    k.pos(0, 0),
    k.layer("bg"),
  ]);
}
