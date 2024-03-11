import { Container, Sprite, Text, Texture} from "pixi.js";
import { Buttons } from "../ui/Buttons";
import { Keyboard } from "../utils/Keyboard";

export class UIDemo extends Container {

    private buttonMouse: Buttons;
    private buttonTouch: Sprite;
    private buttonPointer: Sprite;
    private waiting: Text;

    constructor() {
        super();

        const dialog = new Container();
        dialog.y = 100;
        dialog.x = 50;
        dialog.scale.set(1.5);
        dialog.position.set(500,0);
        this.addChild(dialog);

        const myWindows: Sprite = Sprite.from("Windows");
        myWindows.scale.set(0.5);
        dialog.addChild(myWindows);

        this.buttonMouse = new Buttons(
            Texture.from("ButtonMouse"),
            Texture.from("ButtonMouseDown"),
            Texture.from("ButtonMouse"),
        );
        this.buttonMouse.on("buttonClick", this.onButtonClick, this); // Enlazar "onButtonClick" al objeto actual (this) 
        this.buttonMouse.x = myWindows.width / 2 - this.buttonMouse.width * 2;
        this.buttonMouse.y =  myWindows.height - 320;
        dialog.addChild(this.buttonMouse);

        this.buttonTouch = Sprite.from("ButtonTouch");
        this.buttonTouch.anchor.set(0.5);
        this.buttonTouch.x = myWindows.width / 2 - this.buttonTouch.width * -2;
        this.buttonTouch.y = this.buttonMouse.y;
        //this.buttonTouch.on("touchstart", this.onTouchStart, this);
        //this.buttonTouch.on("touchend", this.onTouchEnd, this);
        //this.buttonTouch.interactive = true;
        dialog.addChild(this.buttonTouch);

        this.buttonPointer = Sprite.from("ButtonPointer");
        this.buttonPointer.anchor.set(0.5);
        this.buttonPointer.x = myWindows.width / 2;
        this.buttonPointer.y = this.buttonMouse.y;
        //this.buttonPointer.on("pointerdown", this.onPointerDown, this);
        //this.buttonPointer.on("pointerup", this.onPointerUp, this);
        //this.buttonPointer.interactive = true;
        dialog.addChild(this.buttonPointer);


        this.waiting = new Text(
            "Waiting...", 
            {fontSize:30, fill:0xFFFFFF, fontFamily: "Comic Sans MS"}
        );
        this.waiting.anchor.set(0.5);
        this.waiting.x = myWindows.width / 2;
        this.waiting.y = this.buttonPointer.y + 150;
        dialog.addChild(this.waiting);

        Keyboard.down.on("KeyB", this.onKeyB, this);
        Keyboard.up.on("KeyB", this.onKeyBUp, this); 
    };

    private onKeyB() {
        console.log("Aprete la B", this)
    }

    private onKeyBUp() {
        console.log("Solte la B", this)
    }

    private onButtonClick() {
        console.log("Button clicked!", this);

    };

    /*private onTouchStart() {
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
    };*/
};