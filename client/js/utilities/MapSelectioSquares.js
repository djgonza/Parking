"use strict";

class MapSelectioSquares {

	constructor (element) {

		this.element = element;
		// Tamaño del mapa virtual
		this.mapW = 1280;
		this.mapH = 800;
		// Tamaño del canvas
		this.canvasW;
		this.canvasH;
		// Contexto del canvas
		this.ctx = this.element[0].getContext('2d');
		// Id de la plaza seleccionada
		this.value = undefined;
		// Touches control
		this.touch = {
			"x": 0,
			"y": 0
		};
		// Print Control
		this.printControl = {
			"x": 0,
			"y": 0
		}
		// Plazas Info
		this.squaresInfo;
		// Plazas validas
		this.squaresValid;





		this.init(this);

		//console.log(this.canvasW, this.canvasH);

	}

	init (map) {

		this.loadSquares (this);
		this.initEvents (this);
		this.setCanvasDimension ();
		this.print ();

	}

	initEvents (map) {

		this.element[0].addEventListener("touchstart", function (event) {
			
			map.setTouch (event.touches);

		}, false);

		this.element[0].addEventListener("touchmove", function (event) {

			map.setPrintControl(
				map.touch.x - event.touches[0].clientX,
				map.touch.y - event.touches[0].clientY
			);

			map.setTouch (event.touches);

			event.preventDefault();
			map.print();

		}, false);

		this.element[0].addEventListener("touchend", function (event) {
			map.print();
		}, false);

		/*this.element.mousedown(function (event) {
			console.log("down", event);
		});

		this.element.mousemove(function (event) {
			console.log("move", event);
		});

		this.element.mouseup(function (event) {
			console.log("up" ,event);
		});*/

		this.element[0].addEventListener("click", function (event) {
			console.log(event);
			map.selectSquare (map, event.layerX, event.layerY);
		});

		$(window).resize(function() {
			map.setCanvasDimension ();
			map.print();
		});

	}

	// Lee la info de las plazas
	loadSquares (map) {

		$.getJSON("client/js/json/squares.json", function(json) {
		    map.squaresInfo = json;
		}).done(function() {
			map.printAllSquares (map);
		});

	}

	// Lee las plazas disponibles
	loadValidSquares () {

	}

	setCanvasDimension () {

		this.canvasW = this.element[0].width = this.element.width() < this.mapW ? this.element.width() : this.mapW;
		this.canvasH = this.element[0].height = this.element.height() < this.mapH ? this.element.height() : this.mapH;

	}

	setTouch (touch) {

		this.touch.x = touch[0].clientX;
		this.touch.y = touch[0].clientY;

	}

	setPrintControl (x, y) {

		this.printControl.x += x;
		this.printControl.y += y;

		this.printControl.x = this.printControl.x < 0 ? 0 : this.printControl.x;
		this.printControl.y = this.printControl.y < 0 ? 0 : this.printControl.y;

		this.printControl.x = this.printControl.x + this.canvasW > this.mapW ? this.mapW - this.canvasW : this.printControl.x;
		this.printControl.y = this.printControl.y + this.canvasH > this.mapH ? this.mapH - this.canvasH : this.printControl.y;

	}

	print () {

		this.clearCanvas ();
		this.printBackground ();
		this.printAllSquares (this);

	}

	printBackground () {

		this.ctx.lineWidth = 5;
		// Color linea
		this.ctx.strokeStyle = "#000000";
		// Color relleno
		this.ctx.fillStyle = "#4D4D4D";

		// Edificio Izquierda
		this.ctx.beginPath();
		this.ctx.moveTo(18 - this.printControl.x, 66 - this.printControl.y);
    	this.ctx.lineTo(175 - this.printControl.x, 66 - this.printControl.y);
    	this.ctx.lineTo(175 - this.printControl.x, 273 - this.printControl.y);
    	this.ctx.lineTo(203 - this.printControl.x, 273 - this.printControl.y);
    	this.ctx.lineTo(203 - this.printControl.x, 560 - this.printControl.y);
    	this.ctx.lineTo(175 - this.printControl.x, 560 - this.printControl.y);
    	this.ctx.lineTo(175 - this.printControl.x, 765 - this.printControl.y);
    	this.ctx.lineTo(18 - this.printControl.x, 765 - this.printControl.y);
    	this.ctx.lineTo(18 - this.printControl.x, 545 - this.printControl.y);
    	this.ctx.lineTo(73 - this.printControl.x, 545 - this.printControl.y);
    	this.ctx.lineTo(73 - this.printControl.x, 458 - this.printControl.y);
    	this.ctx.lineTo(110 - this.printControl.x, 458 - this.printControl.y);
    	this.ctx.lineTo(110 - this.printControl.x, 379 - this.printControl.y);
    	this.ctx.lineTo(73 - this.printControl.x, 379 - this.printControl.y);
    	this.ctx.lineTo(73 - this.printControl.x, 284 - this.printControl.y);
    	this.ctx.lineTo(18 - this.printControl.x, 284 - this.printControl.y);
    	this.ctx.lineTo(18 - this.printControl.x, 66 - this.printControl.y);
    	this.ctx.closePath();
    	this.ctx.stroke();
    	this.ctx.fill();

    	// Edificio superior
    	this.ctx.beginPath();
    	this.ctx.moveTo(208 - this.printControl.x, 24 - this.printControl.y);
    	this.ctx.lineTo(364 - this.printControl.x, 24 - this.printControl.y);
		this.ctx.lineTo(364 - this.printControl.x, 40 - this.printControl.y);
		this.ctx.lineTo(390 - this.printControl.x, 40 - this.printControl.y);
		this.ctx.lineTo(390 - this.printControl.x, 24 - this.printControl.y);
		this.ctx.lineTo(425 - this.printControl.x, 24 - this.printControl.y);
		this.ctx.lineTo(425 - this.printControl.x, 40 - this.printControl.y);
		this.ctx.lineTo(460 - this.printControl.x, 40 - this.printControl.y);
		this.ctx.lineTo(460 - this.printControl.x, 24 - this.printControl.y);
		this.ctx.lineTo(615 - this.printControl.x, 24 - this.printControl.y);
		this.ctx.lineTo(615 - this.printControl.x, 81 - this.printControl.y);
		this.ctx.lineTo(654 - this.printControl.x, 81 - this.printControl.y);
		this.ctx.lineTo(654 - this.printControl.x, 54 - this.printControl.y);
		this.ctx.lineTo(720 - this.printControl.x, 54 - this.printControl.y);
		this.ctx.lineTo(720 - this.printControl.x, 153 - this.printControl.y);
		this.ctx.lineTo(745 - this.printControl.x, 153 - this.printControl.y);
		this.ctx.lineTo(745 - this.printControl.x, 623 - this.printControl.y);
		this.ctx.lineTo(724 - this.printControl.x, 623 - this.printControl.y);
		this.ctx.lineTo(724 - this.printControl.x, 716 - this.printControl.y);
		this.ctx.lineTo(664 - this.printControl.x, 716 - this.printControl.y);
		this.ctx.lineTo(664 - this.printControl.x, 623 - this.printControl.y);
		this.ctx.lineTo(635 - this.printControl.x, 623 - this.printControl.y);
		this.ctx.lineTo(635 - this.printControl.x, 509 - this.printControl.y);
		this.ctx.lineTo(664 - this.printControl.x, 509 - this.printControl.y);
		this.ctx.lineTo(664 - this.printControl.x, 259 - this.printControl.y);
		this.ctx.lineTo(634 - this.printControl.x, 259 - this.printControl.y);
		this.ctx.lineTo(634 - this.printControl.x, 201 - this.printControl.y);
		this.ctx.lineTo(521 - this.printControl.x, 201 - this.printControl.y);
		this.ctx.lineTo(521 - this.printControl.x, 259 - this.printControl.y);
		this.ctx.lineTo(314 - this.printControl.x, 259 - this.printControl.y);
		this.ctx.lineTo(314 - this.printControl.x, 186 - this.printControl.y);
		this.ctx.lineTo(187 - this.printControl.x, 186 - this.printControl.y);
		this.ctx.lineTo(187 - this.printControl.x, 140 - this.printControl.y);
		this.ctx.lineTo(208 - this.printControl.x, 140 - this.printControl.y);
		this.ctx.lineTo(208 - this.printControl.x, 24 - this.printControl.y);
    	this.ctx.closePath();
    	this.ctx.stroke();
    	this.ctx.fill();

	}

	// Pinta todas las plazas
	printAllSquares (map) {

		$.each(this.squaresInfo, function (code, square) {
			//console.log(i, plaza);
			map.printSquare(code, square);
		});

	}

	// Pinta una plaza
	printSquare (code, square) {

    	this.ctx.lineWidth = 1;
    	this.ctx.fillStyle = this.value == code ? "#0c3e8e" : square.color;

    	this.ctx.fillRect(
    		square.x - this.printControl.x, 
    		square.y - this.printControl.y, 
    		square.width, 
    		square.height
    	);

    	// Texto
    	/*this.ctx.fillStyle = "#fff";
    	this.ctx.font = "16px sans-serif";
    	this.ctx.fillText(
    		code, 
    		square.x - this.printControl.x + (square.width / 2) - 6, 
    		square.y - this.printControl.y + (square.height / 2) + 6
    	);*/

	}

	clearCanvas () {
		this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
	}

	selectSquare (map, x, y) {

		x += this.printControl.x;
		y += this.printControl.y;

		$.each(this.squaresInfo, function (code, square) {
			
			var xMin = square.x;
			var yMin = square.y;
			var xMax = square.x + square.width;
			var yMax = square.y + square.height;

			if(x > xMin && x < xMax && y > yMin && y < yMax) {
				console.log(x, y, xMin, yMin, xMax, yMax);
				map.value = map.value == code ? undefined : code;
				map.print();
				return false;
			}

		});

	}


}