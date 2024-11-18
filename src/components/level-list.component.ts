import { KAPLAYCtx } from "kaplay";
import { Levels } from "../levels.constant";
import { getPlayer } from "../store";
import { Scene } from "../constants";

export class LevelList {
  constructor(k: KAPLAYCtx<{}, never>) {
    this.createLevels(k);
  }

  private createLevels(k: KAPLAYCtx<{}, never>) {
    Levels.map((level, index) => {
      const levelPositionX =
        index === 0
          ? k.width() / 2
          : index % 2 === 0
          ? k.width() / 2 - 70
          : k.width() / 2 + 70;

      this.createLevelButton(
        k,
        levelPositionX,
        k.height() - 100 - 150 * index,
        `${index + 1}`
      );
    });
  }

  private createLevelButton(
    k: KAPLAYCtx<{}, never>,
    positionX: number,
    positionY: number,
    levelText: string
  ) {
    const player = getPlayer();

    const color =
      player.currentLevel < parseInt(levelText)
        ? new k.Color(100, 100, 100)
        : new k.Color(93, 140, 67);

    const level = k.add([
      k.rect(100, 100, { radius: 50 }),
      k.pos(positionX, positionY),
      k.color(color),
      k.anchor("center"),
      k.area(),
    ]);

    if (player.currentLevel < parseInt(levelText)) {
      // level.color = new k.Color(255, 0, 0);

      // const t = k.time() * 10;
      // level.color = k.hsl2rgb((t / 10) % 1, 0.3, 0.2);
      level.onClick(() => {
        // console.log("Locked");
      });
    } else {
      // const t = k.time() * 10;
      // level.color = k.hsl2rgb((t / 10) % 1, 0.6, 0.7);
      level.onClick(() => {
        k.go(Scene.GAME, { level: parseInt(levelText) });
      });
    }

    level.add([k.text(levelText), k.anchor("center"), k.color(255, 255, 255)]);
  }
}
