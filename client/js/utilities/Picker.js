"use strict";

class Picker {

	constructor (element, father) {
		
		this.element = $(element);
		this.father = $(father);
		this.childrens = [];

		this.init();
		
	}

	init () {

		var inputs = this.element.find("input");
		var date = Parking.UserInfo.Date;

		this.childrens.push(new DatePicker(inputs[0], date.year, date.month, date.dayIni, date.dayEnd - 1, date.dayIni));
		this.childrens.push(new TimePicker(inputs[1]));
		this.childrens.push(new DatePicker(inputs[2], date.year, date.month, date.dayIni + 1, date.dayEnd, date.dayEnd));
		this.childrens.push(new TimePicker(inputs[3]));

		this.initEvents (this);

	}

	initEvents (picker) {

		// On change date ini
		this.childrens[0].father.on ("changeDay", function (event, data){
			picker.childrens[2].setDayIni(parseInt(data) + 1);
		});

		// On change date end
		this.childrens[2].father.on ("changeDay", function (event, data){
			picker.childrens[0].setDayEnd(parseInt(data) - 1);
		});

		this.father.click (function (event) {
			for (var i in picker.childrens) {
				if(event.target !== picker.childrens[i].father[0]){
					picker.childrens[i].hide();
				}
			}
			event.stopPropagation();
		});

	}
	

}