import { Container, Sprite, Text, Texture} from "pixi.js";
import { Buttons } from "../ui/Buttons";
import { Keyboard } from "../utils/Keyboard";

export class UIDemo extends Container {

    private buttonMouse: Buttons;
    private buttonTouch: Sprite;
    private buttonPointer: Sprite;

    private keyWGrey: Sprite;
    //private keyWRed: Sprite;
    private keyAGrey: Sprite;
    //private keyARed: Sprite;
    private keySGrey: Sprite;
    //private keySRed: Sprite;
    private keyDGrey: Sprite;
    //private keyDRed: Sprite;

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
        this.waiting.y = this.buttonPointer.y + 220;
        dialog.addChild(this.waiting);

        this.keyWGrey = Sprite.from("ButtonWGrey");
        this.keyWGrey.anchor.set(0.5);
        this.keyWGrey.x = myWindows.width / 2;
        this.keyWGrey.y = this.buttonPointer.y + 75;
        dialog.addChild(this.keyWGrey)

        this.keySGrey = Sprite.from("ButtonSGrey");
        this.keySGrey.anchor.set(0.5);
        this.keySGrey.x = myWindows.width / 2;
        this.keySGrey.y = this.keyWGrey.y + 75;
        dialog.addChild(this.keySGrey)

        this.keyAGrey = Sprite.from("ButtonAGrey");
        this.keyAGrey.anchor.set(0.5);
        this.keyAGrey.x = myWindows.width / 2 - 75;
        this.keyAGrey.y = this.keyWGrey.y + 75;
        dialog.addChild(this.keyAGrey)

        this.keyDGrey = Sprite.from("ButtonDGrey");
        this.keyDGrey.anchor.set(0.5);
        this.keyDGrey.x = myWindows.width / 2 + 75;
        this.keyDGrey.y = this.keyWGrey.y + 75;
        dialog.addChild(this.keyDGrey)

        Keyboard.down.on("KeyW", this.onKeyW, this);
        Keyboard.up.on("KeyW", this.onKeyWUp, this); 
        Keyboard.down.on("KeyA", this.onKeyA, this);
        Keyboard.up.on("KeyA", this.onKeyAUp, this); 
        Keyboard.down.on("KeyS", this.onKeyS, this);
        Keyboard.up.on("KeyS", this.onKeySUp, this); 
        Keyboard.down.on("KeyD", this.onKeyD, this);
        Keyboard.up.on("KeyD", this.onKeyDUp, this); 

    };

    private onKeyW() {
        this.keyWGrey.texture = Texture.from("ButtonWRed");
    }

    private onKeyWUp() {
        this.keyWGrey.texture = Texture.from("ButtonWGrey");
    }

    private onKeyA() {
        this.keyAGrey.texture = Texture.from("ButtonARed");
    }

    private onKeyAUp() {
        this.keyAGrey.texture = Texture.from("ButtonAGrey");
    }

    private onKeyS() {
        this.keySGrey.texture = Texture.from("ButtonSRed");
    }

    private onKeySUp() {
        this.keySGrey.texture = Texture.from("ButtonSGrey");
    }

    private onKeyD() {
        this.keyDGrey.texture = Texture.from("ButtonDRed");
    }

    private onKeyDUp() {
        this.keyDGrey.texture = Texture.from("ButtonDGrey");
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