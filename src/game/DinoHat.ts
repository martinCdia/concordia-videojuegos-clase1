import { Container, Sprite } from "pixi.js";

export class DinoHat extends Container{

    constructor(){
        super();
        
        /* CREAMOS LOS OBJETOS */
        const dino: Sprite = Sprite.from("myDino"); // Crea un sprite a partir del recurso cargado con nombre myDino
        const hat: Sprite = Sprite.from("Hat");
        
        /* SETEAR LOS OBJETOS */
        hat.scale.set(0.8); // Escalar el sombrero como el dino pero mas pequeño
        hat.position.set(90,-190); // Posición del sombrero en relación al dino
        
        /* AGREGAR LOS OBJETOS CREADOS AL PADRE */
        this.addChild(dino);
        this.addChild(hat);

    }
};