/*
* Author: Chris Jones (ish)
* Left off on 19:06 in the tutorial video :D
*/

import './style.css'
import Phaser from 'phaser';
import {sizes, speedDown, AppleGameScene} from './AppleGameScene.js';

const gameCanvas = document.getElementById('gameCanvas');

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: speedDown
      },
      debug: true
    }
  },
  scene: [AppleGameScene]
}

const game = new Phaser.Game(config);