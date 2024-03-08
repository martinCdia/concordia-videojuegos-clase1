import { Application, Sprite, Loader, Container } from 'pixi.js'

// Crea  una instancia de PIXI.Application y la asigna a la variable app
const app = new Application({	
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1720,
	height: 730
});

// Cada vez que cambiemos el tamaño de pantalla , llamaremos a la función resize para adaptarnos al nuevo tamaño
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

Loader.shared.add({url: "./dino.png", name: "myDino"}); // Cargamos imagen del dinosaurio
Loader.shared.add({url: "./dinohat.png", name: "Hat"}); // Cargamos imagen del sombrero

// Cuando todo este listo...
Loader.shared.onComplete.add(()=>{ 

	/* CREAMOS LOS OBJETOS */
	const dino: Sprite = Sprite.from("myDino"); // Crea un sprite a partir del recurso cargado con nombre myDino
	const hat: Sprite = Sprite.from("Hat");
	
	/* SETEAR LOS OBJETOS */
	hat.scale.set(0.8); // Escalar el sombrero como el dino pero mas pequeño
	hat.position.set(90,-190); // Posición del sombrero en relación al dino
	
	/* CREAR EL PADRE */
	const dinoWithHat: Container = new Container(); // Creo un contenedor para meterlo todo junto
	/* AGREGAR EL PADRE*/
	dinoWithHat.addChild(dino);
	dinoWithHat.addChild(hat);

	/* MODIFICAR EL PADRE CUANDO SEA NECESARIO */
	dinoWithHat.scale.set(0.5);
	dinoWithHat.x = 200;
	dinoWithHat.y = 300;
	
	/* AGREGAR EL PADRE A PANTALLA */
	app.stage.addChild(dinoWithHat); // Lo añadimos a la escena principal
	
});

Loader.shared.load();