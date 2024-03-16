import { AnimatedSprite, Container, Texture } from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
//import { Keyboard } from "../utils/Keyboard";

export class TickerScene extends Container implements IUpdateable {

    private knightAnimated: AnimatedSprite;

    constructor() {
        super();

        const dialog = new Container();
        dialog.scale.set(2);
        this.addChild(dialog);

        this.knightAnimated = new AnimatedSprite(
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
            ], 
            false
        );
        this.knightAnimated.play();
        this.knightAnimated.animationSpeed = 0.35;
        dialog.addChild(this.knightAnimated);

        //Ticker.shared.add(this.update, this);

    }

    public update(_deltaTime: number, deltaFrame: number): void {
        this.knightAnimated.update(deltaFrame);
    }

    /*private update(deltaFrame:number){
        this.knightAnimated.update(deltaFrame);
        //console.log(deltaFrame, Ticker.shared.FPS);
        //console.log(deltaFrame, Ticker.shared.deltaMS);
        //console.log(Keyboard.state.get("KeyA"));
        if (Keyboard.state.get("ArrowRight")){
            this.knightAnimated.x++;
        }
        if (Keyboard.state.get("ArrowLeft")){
            this.knightAnimated.x--;
        }
    }*/

}