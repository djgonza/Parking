"use strict";

class MapaSeleccionPlazas {

	constructor (element) {

		// Define el canvas
		this.element = element;
		this.element.width = screen.width;
		this.element.height = screen.height;
		// Define las dimensiones del mapa
		this.mapaW = 1280;
		this.mapaH = 800;
		// Define el contexto del canvas
		this.ctx = this.element.getContext('2d');
		this.ctx.width = this.element.width;
		this.ctx.height = this.element.height;
		// Define el punto superior izquierdo
		this.x = 0;
		this.y = 0;
		// Define la desviacion del drag
		this.desX = 0;
		this.desY = 0;
		// Define las plazas
		this.plazas = new Array();
		// Define el estado: false leyendo, true leido
		this.status = false;

		// Inicializa los eventos
		this.setEvents ();
		// Pinta el mapa
		this.print ();


	}

	/*

		Añade una plaza al mapa

	*/
	setPlaza (x, y, type, width, height, angle, code, status, color) {

		var obj = {
			"x"		: x,
			"y"		: y,
			"height": height,
			"width"	: width,
			"angle"	: angle,
			"type"	: type,		// Tipo de vehiculo
			"code"	: code,		// Codigo de la db
			"status": status, 	// True selected, False noSelect
			"color"	: color 	// Color de fondo
		};

		this.plazas.push(obj);
		this.print();

	}

	/*

		Asigna el status cuando todo a sido leido

	*/
	setStatus (status) {
		this.status = status;
	}


	/*

		Dibuja todos los elementos del mapa

	*/
	print () {

		this.clearMap ();
		this.printBackground ();
		this.printAllPlaza ();

	}

	/*

		Dibuja los elementos estaticos del fondo

	*/
	printBackground () {

		this.ctx.lineWidth = 5;
		// Color linea
		this.ctx.strokeStyle = "#000000";
		// Color relleno
		this.ctx.fillStyle = "#4D4D4D";

		// Edificio Izquierda
    	this.ctx.moveTo(18 - this.x, 66 - this.y);
    	this.ctx.lineTo(175 - this.x, 66 - this.y);
    	this.ctx.lineTo(175 - this.x, 273 - this.y);
    	this.ctx.lineTo(203 - this.x, 273 - this.y);
    	this.ctx.lineTo(203 - this.x, 560 - this.y);
    	this.ctx.lineTo(175 - this.x, 560 - this.y);
    	this.ctx.lineTo(175 - this.x, 765 - this.y);
    	this.ctx.lineTo(18 - this.x, 765 - this.y);
    	this.ctx.lineTo(18 - this.x, 545 - this.y);
    	this.ctx.lineTo(73 - this.x, 545 - this.y);
    	this.ctx.lineTo(73 - this.x, 458 - this.y);
    	this.ctx.lineTo(110 - this.x, 458 - this.y);
    	this.ctx.lineTo(110 - this.x, 379 - this.y);
    	this.ctx.lineTo(73 - this.x, 379 - this.y);
    	this.ctx.lineTo(73 - this.x, 284 - this.y);
    	this.ctx.lineTo(18 - this.x, 284 - this.y);
    	this.ctx.lineTo(18 - this.x, 66 - this.y);
    	this.ctx.closePath();
    	this.ctx.stroke();
    	this.ctx.fill();

    	// Edificio superior
    	this.ctx.beginPath();
    	this.ctx.moveTo(208 - this.x, 24 - this.y);
    	this.ctx.lineTo(364 - this.x, 24 - this.y);
		this.ctx.lineTo(364 - this.x, 40 - this.y);
		this.ctx.lineTo(390 - this.x, 40 - this.y);
		this.ctx.lineTo(390 - this.x, 24 - this.y);
		this.ctx.lineTo(425 - this.x, 24 - this.y);
		this.ctx.lineTo(425 - this.x, 40 - this.y);
		this.ctx.lineTo(460 - this.x, 40 - this.y);
		this.ctx.lineTo(460 - this.x, 24 - this.y);
		this.ctx.lineTo(615 - this.x, 24 - this.y);
		this.ctx.lineTo(615 - this.x, 81 - this.y);
		this.ctx.lineTo(654 - this.x, 81 - this.y);
		this.ctx.lineTo(654 - this.x, 54 - this.y);
		this.ctx.lineTo(720 - this.x, 54 - this.y);
		this.ctx.lineTo(720 - this.x, 153 - this.y);
		this.ctx.lineTo(745 - this.x, 153 - this.y);
		this.ctx.lineTo(745 - this.x, 623 - this.y);
		this.ctx.lineTo(724 - this.x, 623 - this.y);
		this.ctx.lineTo(724 - this.x, 716 - this.y);
		this.ctx.lineTo(664 - this.x, 716 - this.y);
		this.ctx.lineTo(664 - this.x, 623 - this.y);
		this.ctx.lineTo(635 - this.x, 623 - this.y);
		this.ctx.lineTo(635 - this.x, 509 - this.y);
		this.ctx.lineTo(664 - this.x, 509 - this.y);
		this.ctx.lineTo(664 - this.x, 259 - this.y);
		this.ctx.lineTo(634 - this.x, 259 - this.y);
		this.ctx.lineTo(634 - this.x, 201 - this.y);
		this.ctx.lineTo(521 - this.x, 201 - this.y);
		this.ctx.lineTo(521 - this.x, 259 - this.y);
		this.ctx.lineTo(314 - this.x, 259 - this.y);
		this.ctx.lineTo(314 - this.x, 186 - this.y);
		this.ctx.lineTo(187 - this.x, 186 - this.y);
		this.ctx.lineTo(187 - this.x, 140 - this.y);
		this.ctx.lineTo(208 - this.x, 140 - this.y);
		this.ctx.lineTo(208 - this.x, 24 - this.y);
    	this.ctx.closePath();
    	this.ctx.stroke();
    	this.ctx.fill();

	}

	/*

		Pinta todas las plazas

	*/
	printAllPlaza () {

		var mapa = this;
		$.each(mapa.plazas, function (i, plaza) {

			mapa.printPlaza (plaza);

		});

	}

	/*

		Dibuja una plaza en el mapa

	*/
	printPlaza (plaza) {

		// Rectangulo
		if(plaza.status){
			this.ctx.fillStyle = "#ccc";
		}else{
			this.ctx.fillStyle = plaza.color;
		}
    	
    	this.ctx.fillRect(
    		plaza.x - this.x, 
    		plaza.y - this.y, 
    		plaza.width, 
    		plaza.height
    	);

    	// Texto
    	this.ctx.fillStyle = "#fff";
    	this.ctx.font = "16px sans-serif";
    	this.ctx.fillText(
    		plaza.code, 
    		plaza.x - this.x + (plaza.width / 2) - 6, 
    		plaza.y - this.y + (plaza.height / 2) + 6
    	);

	}

	setEvents () {

		var mapa = this;

		// Mobile, Tablet
		this.element.addEventListener("touchstart", function (event) {
			
			// Actualiza el punto donde empieza el drag
			mapa.desX = event.touches[0].pageX - mapa.element.offsetLeft;
			mapa.desY = event.touches[0].pageY - mapa.element.offsetTop;

		});

		this.element.addEventListener("touchmove", function (event) {

			var x = event.touches[0].pageX - mapa.element.offsetLeft;
			var y = event.touches[0].pageY - mapa.element.offsetTop;

			// Actualizamos el punto de pintado del canvas
			mapa.x += mapa.desX - x;
			mapa.y += mapa.desY - y;

			// Evitamos salir de los margenes
			if(mapa.x < 0) { mapa.x = 0 };
			if(mapa.y < 0) { mapa.y = 0 };
			if(mapa.x > mapa.mapaW - mapa.element.width) { mapa.x = mapa.mapaW - mapa.element.width };
			if(mapa.y > mapa.mapaH - mapa.element.height) { mapa.y = mapa.mapaH - mapa.element.height };

			// Actualiza el punto donde empieza el drag
			mapa.desX = x;
			mapa.desY = y;

			mapa.print();
			
		}, false);

		this.element.addEventListener("click", function (event) {

			// Posicion del click
			var x = event.layerX + mapa.x;
			var y = event.layerY + mapa.y;
			// Comprovamos si algun elemento esta dentro
			mapa.checkClick (x , y);

		});

	}


	/*

		Pinta las plazas segun el tipo

	*/
	printPlazasByType (type) {

	}

	/*

		Limpia el mapa

	*/
	clearMap () {
		this.ctx.clearRect(0, 0, this.element.width, this.element.height);
	}

	/*

		Comprueba si se ha hecho click en algun elemento

	*/
	checkClick (x, y) {

		// Tener en cuenta que hay pixeles de desviacion
		console.log(x, y);

		var mapa = this;

		$.each(this.plazas, function (i, plaza) {

			var xMin = plaza.x;
			var yMin = plaza.y;
			var xMax = plaza.x + plaza.width;
			var yMax = plaza.y + plaza.height;

			if(x > xMin && x < xMax && y > yMin && y < yMax) {
				plaza.status = !plaza.status;
				mapa.print();
				return false;
			}

		});


	}


}