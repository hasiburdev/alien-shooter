import { KAPLAYCtx } from "kaplay";

export class Button {
  constructor(k: KAPLAYCtx<{}, never>, text: string) {
    const buttonComponent = k.add([
      k.rect(200, 100, { radius: 10 }),
      k.area(),
      k.body(),
      k.anchor("center"),
      k.pos(k.width() / 2, k.height() / 2),
      k.outline(4),
      // k.color(0, 0, 0),
    ]);

    // k.onUpdate(() => {})

    buttonComponent.add([k.text(text), k.anchor("center"), k.color(0, 0, 0)]);

    buttonComponent.onHoverUpdate(() => {
      const t = k.time() * 10;
      // buttonComponent.color = k.hsl2rgb((t / 10) % 1, 0.6, 0.7);
      // buttonComponent.scale = k.vec2(1.2);
      k.setCursor("pointer");
    });

    // onHoverEnd() comes from area() component
    // it runs once when the object stopped being hovered
    buttonComponent.onHoverEnd(() => {
      k.setCursor("default");
      // btn.scale = vec2(1);
      // btn.color = rgb();
    });
  }
}
