import { Container, Sprite, Text, Texture} from "pixi.js";
import { Buttons } from "../ui/Buttons";

export class UIDemo extends Container {

    private buttonMouse: Buttons;
    private buttonTouch: Sprite;
    private buttonPointer: Sprite;

    constructor() {
        super();
        const dialog = new Container();
        dialog.y = 100;
        dialog.x = 50;
        dialog.scale.set(1.5);
        dialog.position.set(500,0);

        const myWindows: Sprite = Sprite.from("Windows");
        myWindows.scale.set(0.5);
        dialog.addChild(myWindows);

        this.buttonMouse = new Buttons(
            Texture.from("ButtonMouse"),
            Texture.from("ButtonMouseDown"),
            Texture.from("ButtonMouseOver"),
            this.onButtonClick.bind(this),
        );
        this.buttonMouse.position.set(100,150);
        dialog.addChild(this.buttonMouse);

        this.buttonPointer = Sprite.from("ButtonPointer");
        this.buttonPointer.position.set(220,150);
        this.buttonPointer.on("pointerdown", this.onPointerDown, this);
        this.buttonPointer.on("pointerup", this.onPointerUp, this);
        this.buttonPointer.interactive = true;
        dialog.addChild(this.buttonPointer);

        this.buttonTouch = Sprite.from("ButtonTouch");
        this.buttonTouch.position.set(340,150);
        this.buttonTouch.on("touchstart", this.onTouchStart, this);
        this.buttonTouch.on("touchend", this.onTouchEnd, this);
        this.buttonTouch.interactive = true;
        dialog.addChild(this.buttonTouch);

        const waiting: Text = new Text(
            "Waiting...", 
            {fontSize:30, fill:0xFFFFFF, fontFamily: "Comic Sans MS"}
        );
        waiting.position.set(190,300);
        dialog.addChild(waiting);

        this.addChild(dialog);
    };

    private onButtonClick() {
        console.log("Button clicked!");
    }

    private onTouchStart() {
        console.log("touch start");
    };

    private onTouchEnd() {
        console.log("touch end");
    };

    private onPointerDown() {
        console.log("pointer down");
    };

    private onPointerUp() {
        console.log("pointer up");
    };
};