import './style.css'
import Phaser from 'phaser';

class TitleScene extends Phaser.Scene {
    constructor() {
        super("title-scene");
    }

    preload() {
        this.load.image('bg0', 'assets/bg0.png');
        this.load.image('button', 'assets/playButton.png');
    }

    create() {
        this.add.image(0, 0, 'bg0').setOrigin(0, 0);

        const playButton = this.add.image(500, 325, 'button').setInteractive().setScale(0.5);

        playButton.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0, 0, 0); 
            this.time.delayedCall(1000, () => {
                this.scene.start('apple-game'); 
            });
        })
    }
}

export { TitleScene }; 