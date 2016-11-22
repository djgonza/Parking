"use strict";

class DataPicker {

	constructor (element, type) {

		console.log(element);
		this.element = element;
		this.initHtml();

	}

	initHtml () {

		// Año actual
		var thisYear = new Date().getFullYear();
		// Dias del mes de julio del año actual
		var diasMes = this.diasMes (7, thisYear);
		

		for (var i = 0; i < diasMes; i++) {
			//console.log(this.element);
			this.element.append(i+1);

		}

	}

	/*
		
		Calcula los dias del mes 
	
	*/
	diasMes (month, year){ 

		var day = 28;
		var date = new Date(year, month-1, day);

		while(date.getMonth() == month-1){ 
			day++; 
			date = new Date(year, month-1, day); 
		} 

		return day-1; 

	}

	format () {

	}


}