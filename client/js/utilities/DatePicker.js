"use strict";

class DatePicker {

	constructor (father, year, month, dayIni, dayEnd, day) {

		this.element;
		this.father = $(father);
		// Define la fecha
		this.year = year;
		this.month = month;
		this.day = day;
		// Define los limites
		this.dayIni = dayIni;
		this.dayEnd = dayEnd;
		this.init();

	}

	init () {

		this.initEvents (this);
		this.createElement (this);
		this.updateInput ();

	}

	initEvents (picker) {

		// Evento para el foco
		this.father.focusin(function (event) {
			picker.show();
			picker.father.blur();
			event.stopPropagation();
		});

		this.father.click (function (event) {
			picker.show();
		});

	}

	setDayIni (day) {
		this.dayIni = day;
		this.destroyElement();
		this.createElement (this);
	}
	setDayEnd (day) {
		this.dayEnd = day;
		this.destroyElement();
		this.createElement (this);
	}

	getDay (){

		return this.day;

	}



	destroyElement () {
		this.element.remove();
	}

	createElement (picker) {

		var date = new Date(this.year, this.month);

		// Creamos los elementos
		this.element = $("<div>").addClass("datePicker");

		// Creamos la tabla
		var table = $("<table>").append($("<caption>").html("Julio " + this.year));

		// Creamos las celdas del calendario
		var tr = $("<tr>");
		table.append(tr);
		var daysPrinted = 0;

		for (var i = -date.getDay() + 2; i <= 31; i++) {

			// Rows
			if(daysPrinted % 7 == 0){
				tr = $("<tr>");
				table.append(tr);
			}

			var th = $("<th>").html(i > 0 ? i : "");

			// Selectables days
			if(i >= this.dayIni && i <= this.dayEnd && i > 0){

				th.addClass("selectable");
				th.click(function (event) {
					picker.day = $(this).text();
					picker.father.trigger("changeDay", [$(this).text()]);
					picker.updateInput ();
				});

			}

			tr.append(th);
			daysPrinted ++;

		}

		// Añadimos la tabla
		this.element.append(table);

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
		this.father.val(this.day + "/" + this.month + "/" + this.year);
	}

}