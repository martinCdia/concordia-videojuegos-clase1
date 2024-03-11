import { Container, Sprite, Texture } from "pixi.js";

export class Buttons extends Container {

    // Creamos las variables 
    private def:Texture;
    private down:Texture;
    private over:Texture;
    private spr:Sprite;
    anchor: any;

    constructor(def:Texture, down:Texture, over:Texture) {
        super();

        //  Asignamos los valores a nuestras variables
        this.def = def;
        this.down = down;
        this.over = over;

        // Creamos el sprite con la textura por defecto
        this.spr = Sprite.from(def);
        this.spr.anchor.set(0.5);
        this.addChild(this.spr); // Lo añadimos al contenedor de PIXI
        this.spr.interactive = true; // Hacemos al sprite interactivo
        this.spr.on("pointerdown", this.onMouseDown, this);
        this.spr.on("pointerup", this.onMouseUp, this);
        this.spr.on("pointerover", this.onMouseOver, this);
        this.spr.on("pointerout", this.onMouseOut, this);

    }

    // Función para cuando se hace click en el botón
    private onMouseDown() {
        this.spr.texture = this.down;
    };

    // Función para cuando se suelta el click en el botón
    private onMouseUp() {
        this.emit("buttonClick"); // Emitimos un evento propio del botón
        this.spr.texture = this.over;
    };

    // Función para cuando pasas encima del botón
    private onMouseOver() {
        this.spr.texture = this.over;
    };

    // Función para cuando te vas de encima del botón
    private onMouseOut() {
        this.spr.texture = this.def;
    };
}