"use strict";

class ReservasController {

	constructor () {

		this.element;
		this.status = 0;

	}

	setElement (element) {
		this.element = element;
	}

	setStatus (status) { //true ++, false --

		var elements = $("#reservas div");
		var buttons = $("#reservas button");

		if(status) {

			if(this.status < elements.length){

				// Oculatmos el paso actual
				$(elements[this.status]).hide();
				$(buttons[this.status]).removeClass("btnFormActive").addClass("btnFormDefault");
				// Actualizamps el estado
				this.status++;
				// Mostramos el nuevo paso
				$(elements[this.status]).show();
				$(buttons[this.status]).removeClass("btnFormSucces").addClass("btnFormActive");

			}
			
		}else{

			if(this.status > 0){

				// Oculatmos el paso actual
				$(elements[this.status]).hide();
				$(buttons[this.status]).removeClass("btnFormActive").addClass("btnFormSucces");
				// Actualizamps el estado
				this.status--;
				// Mostramos el nuevo paso
				$(elements[this.status]).show();
				$(buttons[this.status]).removeClass("btnFormSucces").addClass("btnFormActive");

			}

		}

	}

}