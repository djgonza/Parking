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

		this.updateInput (this.dayIni, this.month, new Date().getFullYear());
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

	createElement (picker) {

		// Creamos los elementos
		this.element = $("<div>").addClass("datePicker");

		// Creamos la tabla
		var table = $("<table>").append($("<caption>").html("Julio"));
		table.append($("<tr>").html("<th>Lu</th><th>Ma</th><th>Mi</th><th>Ju</th><th>Vi</th><th>Sa</th><th>Do</th>"));

		// Inicializamos la fecha
		var date = new Date();
		if(date.getMonth() > this.month){
			date.setFullYear(date.getFullYear() + 1);
		}
		date = new Date(date.getFullYear(), this.month, 0);

		// Creamos las celdas del calendario
		var dayWeekIni = date.getDay();
		var dayPrinted = 1;
		var totalPrinted = 0;
		var tr;

		while (dayPrinted <= date.getDate() + 1){

			// Rows
			if(totalPrinted % 7 == 0){
				tr = $("<tr>");
				table.append(tr);
			}

			// Days
			if(dayWeekIni > 0){
				dayWeekIni--;
				tr.append($("<th>"));
				totalPrinted++;
			}else{

				var th = $("<th>").html(dayPrinted);
				
				// Aladimos los eventos
				if(dayPrinted >= this.dayIni && dayPrinted <= this.dayEnd){

					th.addClass("selectable");
					th.click(function (event) {
						picker.updateInput($(this).text(), picker.month + 1, date.getFullYear());
					});
				}

				tr.append(th);
				totalPrinted++;
				dayPrinted++;

			}

		}

		// Añadimos lla tabla
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

	updateInput (day, month, year) {
		this.father.val(day + "/" + month + "/" + year);
	}


}