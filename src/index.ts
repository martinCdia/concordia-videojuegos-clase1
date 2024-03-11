import { Application, Loader } from 'pixi.js'
import { assets } from './assets';
//import { Scene } from './scene/Scene';
import { UIDemo } from './scene/UIDemo';
import { Keyboard } from './utils/Keyboard';

/*
	Crea  una instancia de PIXI.Application y la asigna a la variable app.
 	Es la parte que renderiza todo por nosotros 
*/
const app = new Application({	
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1720,
	height: 790
});

/*
	Inicializar el manejo del teclado
*/
Keyboard.initialize(); 

/* 
	Cada vez que cambiemos el tamaño de pantalla , llamaremos a la función resize 
	para adaptarnos al nuevo tamaño.
*/
window.addEventListener("resize", ()=>{
	// app.screen.width; => tamaño ancho que queremos que siempre sea el juego 
	// app.screen.height; => tamaño alto que queremos que siempre sea el juego 
	// window.innerWidth; => tamaño ancho ventana navegador  
	// window.innerHeight; => tamaño alto ventana navegador
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY); // Obtengo la menor de las dos escalas

	const gameWidth = Math.round(app.screen.width * scale); //  Escala para adaptar al ancho de la ventana del navegador
	const gameHeight = Math.round(app.screen.height * scale); //  Escala para adaptar al alto de la ventana del navegador 	

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2); //  Margen izquierda o derecha para centrar Horizontal
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2); //  Margen superior o inferior para centrar verticalmente

	app.view.style.width = gameWidth + "px"; //  Le doy el tamaño al div del canvas
	app.view.style.height = gameHeight + "px"; //  Le doy los pixeles al canvas para que ocupe todo el div

	app.view.style.marginLeft = marginHorizontal + "px";  // Posiciono horizontalmente en el centro 
	app.view.style.marginRight = marginHorizontal + "px"; 
	app.view.style.marginTop = marginVertical + "px"; //  Posiciono verticalmente en el centro
	app.view.style.marginBottom = marginVertical + "px"; 
});
window.dispatchEvent(new Event("resize")); //Llama al evento "resize" para centrar el canvas en carga


/* 
	Le pedimos a nuestro Loader que cargue nuestros assets de nuestro archivo assets.ts
*/
Loader.shared.add(assets);

/*
	Decimos al Loader que cuando termine de cargar los assets, cree una instancia de
 	nuestro objeto scene y lo ponga en pantalla 
*/
/*Loader.shared.onComplete.add(()=>{ 
	const myScene = new Scene()
	app.stage.addChild(myScene)
});*/

Loader.shared.onComplete.add(() => {
	const myUIDemo = new UIDemo();
	app.stage.addChild(myUIDemo);
});


/*
	Le decimos que empiece a cargar los assets
*/
Loader.shared.load();