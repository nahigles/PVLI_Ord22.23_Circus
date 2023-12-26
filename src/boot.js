// Escena boot
export default class Boot extends Phaser.Scene{
    constructor() {
        super({ key: 'Boot'});
        console.log("Consructora boot");
    }

    init(){

    }
    
    preload(d,dt){
        // Imagenes
        this.load.image('starsImage', 'assets/sprites/stars.png')

        // Sonidos
        this.load.audio('menuSound', 'assets/sounds/menu.mp3');
    }

    create(){
    }

    update(d,dt){
        this.scene.start("Menu");
        console.log("matame");
    }
}