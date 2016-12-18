"use strict";

class ControllerReservas extends SectionController {

	constructor (father) {
		
		super("reservas", father);
		this.mapa;

		this.init(this);
	}

	init (controller) {

		if(!this.status) {
			setTimeout(function () {
				controller.init(controller);
			}, 500);
		}else{
			
			this.mapa = new MapSelectioSquares(this.element.find("canvas"));
			this.initEvents(this);

		}

	}

	initEvents (controller) {

		

	}

}