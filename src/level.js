// Escena level
export default class Level extends Phaser.Scene{
    constructor() {
        super({ key: 'Level'});
        console.log("Consructora level");
    }
        
    init(){

    }
    
    preload(d,dt){
        // Cargamos sonidos, imagenes, etc
        console.log("preload")
    }

    create(){
    }

    update(d,dt){
    }
}