"use strict";

class TimePicker {

	constructor (father, startTime, endTime) {

		this.element;
		this.father = $(father);
		this.startTime = startTime;
		this.endTime = endTime;
		this.hours = 12;
		this.minutes = 0;
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

		// Click fuera del elemento
		$("html").click (function (event) {
			if(event.target != picker.father[0]){
				picker.hide();
				event.preventDefault;
			}
		});

	}

	getTime () {

		var hours = this.hours < 10 ? "0"+this.hours : this.hours;
		var minutes = this.minute == 0 ? "00" : this.minutes;

		return hours + ":" + minutes; 

	}

	createElement (picker) {

		// Creamos los elementos
		this.element = $("<div>").addClass("timePicker");
		var iconUp = $("<i></i>").addClass("material-icons")
							   .html("keyboard_arrow_up")
							   .click(function (event) {
							   		picker.up();
							   		event.stopPropagation();
							   });
		var iconDown = $("<i></i>").addClass("material-icons")
							   .html("keyboard_arrow_down")
							   .click(function (event) {
							   		picker.down();
							   		event.stopPropagation();
							   });

		// Añadimos los elementos
		this.element.append(iconUp);
		this.element.append(iconDown);

		// Añadimos al input
		this.father.after (this.element.hide());

	}

	show (){
		//console.log("show");
		this.element.show();
	}

	hide () {
		//console.log("hide");
		this.element.hide();
	}

	up () {
		
		this.minutes += 30;

		if(this.minutes == 60){
			this.minutes = 0;
			this.hours ++;
		}

		/*if(this.hours >= this.endTime) {
			this.hours = this.startTime;
		}*/

		if(this.hours == 24) {
			this.hours = 0;
		}

		this.updateInput();

	}

	down () {

		this.minutes -= 30;

		if(this.minutes < 0){
			this.minutes = 30;
			this.hours--;
			if(this.hours == -1) {
				this.hours = 23;
			}

		}

		this.updateInput();

	}

	updateInput () {

		this.father.val((this.hours < 10 ? "0" + this.hours : this.hours) + ":" + (this.minutes == 0 ? "00" : this.minutes));

	}

}