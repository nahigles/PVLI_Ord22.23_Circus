// Escena menu
export default class Menu extends Phaser.Scene{
    constructor() {
        super({ key: 'Menu'});
         console.log("Consructora menu");
    }

    init(){

    }
    
    preload(d,dt){
    }

    create(){
        // Imagenes
        this.add.image('starsImage', 50,50);
        console.log("añado Imagen en menu");

        // Sonidos
        this.menuSound = this.sound.add('menuSound');
		this.menuSound.play();
        console.log("añado sonido y le doy a play");
    }

    update(d,dt){
      
    }
}