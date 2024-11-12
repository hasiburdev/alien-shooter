import { KAPLAYCtx } from "kaplay";

export class Button {
  constructor(
    k: KAPLAYCtx<{}, never>,
    private text: string,
    private onClick: () => void
  ) {
    const buttonComponent = k.add([
      k.rect(200, 100, { radius: 10 }),
      k.area(),
      k.body(),
      k.anchor("center"),
      k.pos(k.width() / 2, k.height() / 2),
      k.outline(4),
    ]);

    buttonComponent.onClick(this.onClick);

    k.onUpdate(() => {
      k.setCursor("default");
    });

    buttonComponent.add([
      k.text(this.text),
      k.anchor("center"),
      k.color(0, 0, 0),
    ]);

    buttonComponent.onHoverUpdate(() => {
      const t = k.time() * 10;
      k.setCursor("pointer");
    });
  }
}
