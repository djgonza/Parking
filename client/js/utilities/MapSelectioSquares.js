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
		// Mouse control
		this.mouse = {
			"status": false,
			"x": 0,
			"y": 0
		}
		// Print Control
		this.printControl = {
			"x": 0,
			"y": 0
		}
		// Plazas Info
		this.squaresInfo;
		// Plazas validas
		this.squaresValid;
		// Mensaje
		this.mensaje = this.element.next().hide();

		this.init(this);

		//console.log(this.canvasW, this.canvasH);

	}

	init (map) {

		this.loadSquares (this);
		this.initEvents (this);
		this.setCanvasDimension ();
		//this.print ();

		this.loadValidSquares (this, this.getDateIni (), this.getDateEnd ());

	}

	initEvents (map) {

		// Touches
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
		// Fin Touches

		// Mouse
		this.element.mousedown(function (event) {
			map.mouse.status = true;
			map.mouse.x = event.clientX;
			map.mouse.y = event.clientY;
		});

		this.element.mousemove(function (event) {
			
			if(map.mouse.status){
				map.setPrintControl(
					map.mouse.x - event.clientX,
					map.mouse.y - event.clientY
				);
				map.mouse.x = event.clientX;
				map.mouse.y = event.clientY;
				event.preventDefault();
				map.print();
			}

		});

		this.element.mouseup(function (event) {
			map.mouse.status = false;
		});
		// Fin Mouse

		this.element[0].addEventListener("click", function (event) {
			map.selectSquare (map, event.layerX, event.layerY);
		});

		$(window).resize(function() {
			map.setCanvasDimension ();
			map.print();
		});

		// Zoom
		/*this.element[0].addEventListener('gestureend', function(e) {
			if (e.scale < 1.0) {
				// User moved fingers closer together
				console.log("<", e);
			} else if (e.scale > 1.0) {
				// User moved fingers further apart
				console.log(">", e);
			}
		}, false);*/
		// Fin Zoom

	}

	setMensaje (mensaje) {
		this.mensaje.text(mensaje);
	}

	showMensaje () {
		this.mensaje.show();
	}

	hideMensaje () {
		this.mensaje.hide();
	}

	getDateIni () {

		var date = Parking.UserInfo.Date;
		return date.year +
			   "-" + 
			   date.month + 
			   "-" + 
			   date.dayIni + 
			   " " + 
			   date.timeIni;

	}

	getDateEnd () {

		var date = Parking.UserInfo.Date;
		return date.year +
			   "-" + 
			   date.month + 
			   "-" + 
			   date.dayIni + 
			   " " + 
			   date.timeEnd;

	}

	// Lee la info de las plazas
	loadSquares (map) {

		$.getJSON("client/js/json/squares.json", function(json) {
		    map.squaresInfo = json;
		});
		/*.done(function() {
			map.printAllSquares (map);
		});*/

	}

	// Lee las plazas disponibles
	loadValidSquares (map, dateIni, dateEnd) {

		$.ajax({

			url: "index.php",
			data: { 
				"getAvailableSquares": {
					"ini": dateIni,
					"end": dateEnd
				}
			},
			cache: false,
			type: "GET",
			success: function(response) {


				//console.log(JSON.parse(response));
				var loadedSquares = Array();
				$.each(JSON.parse(response), function (i, data){
					loadedSquares.push(data.Plaza.toLowerCase());
				});

				//console.log(loadedSquares);

				map.squaresValid = loadedSquares;
				map.print ();

			},
			error: function(xhr) {
				
				alert("Error al pedir seccion");

			}

		});

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

		// Color linea
		this.ctx.strokeStyle = "#F7931E";
		// Color relleno
		this.ctx.fillStyle = "#F7931E";
		
		this.ctx.beginPath();

 		this.ctx.moveTo(422 - this.printControl.x, 100 - this.printControl.y);
 		this.ctx.lineTo(432 - this.printControl.x, 128 - this.printControl.y);
 		this.ctx.lineTo(442 - this.printControl.x, 100 - this.printControl.y);
 		this.ctx.lineTo(422 - this.printControl.x, 100 - this.printControl.y);
 		this.ctx.fill();
 		this.ctx.stroke();

 		this.ctx.closePath();
    	
    	this.ctx.beginPath();
 		this.ctx.arc(432 - this.printControl.x, 100 - this.printControl.y, 10.5, 0, 2 * Math.PI, false);
 		this.ctx.stroke();
    	this.ctx.fill();
    	this.ctx.closePath();
    	
    	this.ctx.fillStyle = "#4D4D4D";

    	this.ctx.beginPath();
    	this.ctx.arc(432 - this.printControl.x, 100 - this.printControl.y, 7, 0, 2 * Math.PI, false);
    	this.ctx.fill();
    	this.ctx.closePath();

    	this.ctx.fillStyle = "#F7931E";
    	this.ctx.font = "16px sans-serif";
    	this.ctx.fillText(
    		"Mariana Sanz", 
    		385 - this.printControl.x, 
    		150 - this.printControl.y
    	);


	}

	// Pinta todas las plazas
	printAllSquares (map) {

		/*$.each(this.squaresValid, function (code, square) {
			if(square[0].toLowerCase().charAt(0) == Parking.UserInfo.Square.TypeV){
				map.printSquare(square[0].toLowerCase(), map.squaresInfo[square[0].toLowerCase()], true);
			}else{
				map.printSquare(square[0].toLowerCase(), map.squaresInfo[square[0].toLowerCase()], false);
			}	
		});*/

		//revisar lo que devuelve el server

		$.each(this.squaresInfo ,function (code, square) {

			//console.log(code, square);
			//console.log(map.squaresValid.indexOf(code));
			//console.log(code.charAt(0), Parking.UserInfo.Square.TypeVe);

			if(map.squaresValid.indexOf(code) > -1 && code.charAt(0) == Parking.UserInfo.Square.TypeV){
				map.printSquare(code, square, true);
			}else{
				map.printSquare(code, square, false);
			}

		});

	}

	// Pinta una plaza
	printSquare (code, square, selectable) {

		this.ctx.save();

    	this.ctx.lineWidth = 1;
    	
    	//Rotation
    	/*if(square.angle != 0){
    		this.ctx.translate((square.x - this.printControl.x)/2, (square.y - this.printControl.y)/2);
    		this.ctx.rotate(square.angle * Math.PI / 180);
    		this.ctx.translate(-((square.x - this.printControl.x)/2), -((square.y - this.printControl.y)/2));
    	}*/
    	//square.angle != 0 ? this.ctx.rotate(square.angle * Math.PI / 180) : null;

    	if(selectable) {
    		this.ctx.fillStyle = square.color;
    	}else{
    		this.ctx.fillStyle = "#aaa";
    	}

    	if(this.value == code){
    		this.ctx.fillStyle = "#0c3e8e";
    	}

    	this.ctx.fillRect(
    		square.x - this.printControl.x, 
    		square.y - this.printControl.y, 
    		square.width, 
    		square.height
    	);

    	// Texto
    	/*this.ctx.fillStyle = "#ccc";
    	this.ctx.font = "16px sans-serif";
    	this.ctx.fillText(
    		code, 
    		square.x - this.printControl.x + (square.width / 2) - 6, 
    		square.y - this.printControl.y + (square.height / 2) + 6
    	);*/

    	this.ctx.restore();

	}

	clearCanvas () {
		this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
	}

	selectSquare (map, x, y) {

		x += this.printControl.x;
		y += this.printControl.y;

		$.each(this.squaresValid, function (i, squareId) {

			var square = map.squaresInfo[squareId];

			var xMin = square.x;
			var yMin = square.y;
			var xMax = square.x + square.width;
			var yMax = square.y + square.height;

			if(squareId.charAt(0) == Parking.UserInfo.Square.TypeV){
				if(x > xMin && x < xMax && y > yMin && y < yMax) {
					map.value = squareId;
					map.print();
					return false;
				}
			}

		});

		Parking.UserInfo.Square.Id = this.value;

	}


}