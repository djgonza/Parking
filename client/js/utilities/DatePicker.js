"use strict";

class DatePicker {

	constructor (father, month, dayIni, dayEnd) {
		
		this.element;
		this.father = $(father);
		this.month = month;
		this.dayIni = dayIni;
		this.dayEnd = dayEnd;
		this.init();

	}

	init () {

		this.updateInput ();
		this.initEvents (this);
		this.createElement (this);

	}

	initEvents (picker) {

		// Evita edicion del input
		this.father.on ("keypress keyup keydown paste cut", function (event) {
			event.preventDefault();
		});

		// Evento para el foco
		this.father.focusin(function (event) {
			picker.show();
			picker.father.blur();
			event.stopPropagation();
		});

	}

	createElement (picker) {

		// Creamos los elementos
		this.element = $("<div>").html("calendario");
		/*var iconUpHours = $("<i></i>").addClass("material-icons")
							   .html("keyboard_arrow_up")
							   .click(function (event) {
							   		picker.upHours();
							   		event.stopPropagation();
							   });
		var iconUpMinutes = $("<i></i>").addClass("material-icons")
							   .html("keyboard_arrow_up")
							   .click(function (event) {
							   		picker.toggleMinutes();
							   		event.stopPropagation();
							   });
		var iconDownHours = $("<i></i>").addClass("material-icons")
							   .html("keyboard_arrow_down")
							   .click(function (event) {
							   		picker.downHours();
							   		event.stopPropagation();
							   });
		var iconDownMinutes = $("<i></i>").addClass("material-icons")
							   .html("keyboard_arrow_down")
							   .click(function (event) {
							   		picker.toggleMinutes();
							   		event.stopPropagation();
							   });

		// Añadimos los elementos
		this.element.append(iconUpHours);
		this.element.append(iconUpMinutes);
		this.element.append(iconDownHours);
		this.element.append(iconDownMinutes);
		*/

		// Añadimos al input
		this.father.after (this.element.hide());

	}

	show (){
		this.element.show();
	}

	hide () {
		this.element.hide();
	}

	updateInput () {

		//this.father.val((this.hours < 10 ? "0" + this.hours : this.hours) + ":" + this.minutes + 0);
	
	}


}