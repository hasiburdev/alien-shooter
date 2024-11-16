import { KAPLAYCtx } from "kaplay";
import { Levels } from "../levels.constant";
import { getPlayer } from "../store";
import { Scene } from "../constants";

export class LevelList {
  constructor(k: KAPLAYCtx<{}, never>) {
    this.createLevels(k);
    // this.createLevelConnectorLine(
    //   k
    //   // levelPositionX,
    //   // k.height() - 100 - 150 * index
    // );
  }

  private createLevels(k: KAPLAYCtx<{}, never>) {
    // for (let i = 0; i < 5; i++) {
    // }
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

  private createLevelConnectorLine(
    k: KAPLAYCtx<{}, never>,
    positionX: number = 0,
    positionY: number = 0
  ) {}

  private createLevelButton(
    k: KAPLAYCtx<{}, never>,
    positionX: number,
    positionY: number,
    levelText: string
  ) {
    const level = k.add([
      k.rect(100, 100, { radius: 50 }),
      k.pos(positionX, positionY),
      k.color(0, 0, 0),
      k.anchor("center"),
      k.area(),
      // k.layer("ui"),
    ]);

    // k.onUpdate(() => {
    const player = getPlayer();

    if (player.currentLevel < parseInt(levelText)) {
      level.onClick(() => {
        console.log("Locked");
      });
    } else {
      level.onClick(() => {
        // console.log("Unlocked");
        k.go(Scene.GAME);
      });
    }
    // });

    level.add([k.text(levelText), k.anchor("center"), k.color(255, 255, 255)]);
  }
}
