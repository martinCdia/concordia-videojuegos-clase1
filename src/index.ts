import { Application, Sprite, Loader } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1720,
	height: 730
});

// Cada vez que cambiemos el tamaño de pantalla
window.addEventListener("resize", ()=>{
	// app.screen.width; => tamaño ancho que queremos que siempre sea el juego 
	// app.screen.height; => tamaño alto que queremos que siempre sea el juego 
	// window.innerWidth; => tamaño ancho ventana navegador  
	// window.innerHeight; => tamaño alto ventana navegador
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY); // Obtengo la menor de las dos escalas

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";
	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";
});
window.dispatchEvent(new Event("resize"));

Loader.shared.add({url: "./dino.png", name: "myDino"});
//Loader.shared.add({url: "./clampy.png", name: "Clampy"})

Loader.shared.onComplete.add(()=>{

	const dino: Sprite = Sprite.from("myDino");

	//console.log("Hola Mundo!!", clampy.width, clampy.height);

	//clampy.anchor.set(0);

	// Posicion dentro del lienzo de dino
	dino.x = 100;
	dino.y = 100;

	// Escala del dino dentro del lienzo
	dino.scale.x = 0.5;
	dino.scale.y = 0.5;


	app.stage.addChild(dino);

});

Loader.shared.load();