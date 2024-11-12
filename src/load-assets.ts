import { KAPLAYCtx } from "kaplay";
import { Sounds } from "./assets/sounds";
import { Sprites } from "./assets/sprites";
import { Asset } from "./constants";

export const loadAssets = (k: KAPLAYCtx<{}, never>) => {
  // Load all sprites
  k.loadBean();
  k.loadSprite(Asset.Sprite.SHIP, Sprites.Ship.ORANGE_SHIP_1);
  k.loadSprite(Asset.Sprite.ALIEN, Sprites.Alien.NORMAL_ALIEN);
  k.loadSprite(Asset.Sprite.BACKGROUND, Sprites.BACKGROUND);
  k.loadSprite(Asset.Sprite.LASER_RED, Sprites.Laser.RED_SHORT);
  k.loadSprite(Asset.Sprite.VICTORY_MODAL, Sprites.VICTORY_MODAL);
  k.loadSprite(Asset.Sprite.DEFEAT_MODAL, Sprites.DEFEAT.MODAL);
  k.loadSprite(Asset.Sprite.DEFEAT_BG, Sprites.DEFEAT.BG);

  // Load all sounds
  k.loadSound(Asset.Sound.SHOOT, Sounds.BOOM_1);
  k.loadSound(Asset.Sound.SHOOT_ALIEN, Sounds.BOOM_4);
  k.loadSound(Asset.Sound.ENEMY_CRASH_ON_BOTTOM, Sounds.ENEMY_CRASH_ON_BOTTOM);
  k.loadSound(Asset.Sound.SHOOT_BULLET, Sounds.SHOOT_BULLET);
};
