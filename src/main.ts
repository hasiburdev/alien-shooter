import kaplay from "kaplay";

import {
  homeScreen,
  defeatScreen,
  gameScreen,
  levelsScreen,
  victoryScreen,
} from "./screens";
import { Scene } from "./constants";
import { loadAssets } from "./load-assets";

export const k = kaplay({
  height: 1200,
  width: 800,
  scale: 1,
  letterbox: true,
  stretch: true,
  loadingScreen: true,
  background: [100, 100, 100],
  global: false,
});

loadAssets(k);

k.layers(["bg", "game", "ui", "ship"], "game");

// All screens
k.scene(Scene.HOME, homeScreen(k));
k.scene(Scene.DEFEAT, defeatScreen(k));
k.scene(Scene.GAME, gameScreen(k));
k.scene(Scene.LEVELS, levelsScreen(k));
k.scene(Scene.VICTORY, victoryScreen(k));

k.go(Scene.HOME);
