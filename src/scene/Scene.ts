import { AnimatedSprite, Container, Graphics, NineSlicePlane, Text, Texture } from "pixi.js";
import { DinoHat } from "../game/DinoHat";

export class Scene extends Container {

    constructor() {
        super();

        /* CREAR EL PADRE(CONTENEDOR) DE LOS OBJETOS DINO Y HAT */
        const dinoWithHat: DinoHat = new DinoHat(); // Creo contenedor de la clase DinoHat
        /* MODIFICAR EL PADRE(CONTENEDOR) CUANDO SEA NECESARIO */
        dinoWithHat.scale.set(0.4);
        dinoWithHat.x = 200;
        dinoWithHat.y = 300;
        /* AGREGAR EL PADRE(CONTENEDOR) A PANTALLA */
        this.addChild(dinoWithHat); // Lo añadimos a la escena principal


        /* CREACIÓN DE UNA ANIMACIÓN EN ESCENA */
        const knightAnimated: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("knightAttak1"),
                Texture.from("knightAttak2"),
                Texture.from("knightAttak3"),
                Texture.from("knightAttak4"),
                Texture.from("knightAttak5"),
                Texture.from("knightAttak6"),
                Texture.from("knightAttak7"),
                Texture.from("knightAttak8"),
                Texture.from("knightAttak9"),
                Texture.from("knightAttak10"),
                Texture.from("knightAttak11"),
            ], true
        );
        knightAnimated.play();
        knightAnimated.animationSpeed = 0.3;
        this.addChild(knightAnimated);


        /* PRIMITIVA GRÁFICA */
        // Triangulo
        const myGraphTriangle: Graphics = new Graphics();
        myGraphTriangle.lineStyle({color:0xFF00FF, width:10, alpha:1}); //Establece el color y ancho del trazo
        myGraphTriangle.moveTo(0,0); // Se mueve al punto (0,0)
        myGraphTriangle.lineTo(300,400); // Dibuja una línea recta desde el punto actual hasta los valores indicados
        myGraphTriangle.lineTo(500,0); // Dibuja otra línea recta
        myGraphTriangle.lineTo(0,0); // Regresa al punto original para cerrar
        myGraphTriangle.position.set(1720/2,790/2); // Posición en la pantalla

        // Circulo
        const myGraphCircle: Graphics = new Graphics();
        myGraphCircle.lineStyle({color:0xFF00FF, width:15, alpha:1});
        myGraphCircle.beginFill(0x00FF00,1); // Relleno del circulo
        myGraphCircle.drawCircle(0,0,100); // Coordenadas X e Y (centro), Radio
        myGraphCircle.position.set(1720/2,790/2); // Posición en la pantalla

        this.addChild(myGraphTriangle);
        this.addChild(myGraphCircle);

        /* TEXTOS */
        const myText: Text = new Text(
            "Hello World!", 
            {fontSize:100, fill:0xFF0000, fontFamily: "Comic Sans MS"}
        );
        myText.text = "Cambio el texto!";
        myText.position.set(500,0);
        myText.angle = 75;
        this.addChild(myText);

        /* NINE-SLICE PLANE */
        //const myPanel: Sprite = Sprite.from("Panel");
        const myPanel: NineSlicePlane = new NineSlicePlane(
            Texture.from("Panel"),
            35,35,35,35
        );
        myPanel.width = 400;
        myPanel.height = 200;
        myPanel.scale.set(3);
        myPanel.position.set(100,100);
        this.addChild(myPanel);
    }
}; 