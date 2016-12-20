"use strict";

class ControllerInicio extends SectionController {

	constructor (father) {
		
		super("inicio", father);

		this.slider;
		
		this.init(this);

	}

	init (controller) {

		if(!this.status) {
			setTimeout(function () {
				controller.init(controller);
			}, 500);
		}else{
			//this.slider = new Slider(this.element.children("object"));
			this.initEvents(this);
		}

	}

	initEvents (controller) {

		// Evento btn
		this.element.find("button").click (function () {
			controller.validateForm ();
		});

		/*

			Crea el elemento calendario o time picker

		*/
		this.element.find("input").each(function (i) {

			switch (this.name) {
				case "date": 
					new DatePicker(this, 6, 5, 15);
				break;
				case "time": 
					new TimePicker(this, 0, 12);
				break;
			}

		});

	}

	validateForm () {

		//Revisar cuando pueda
		var dateIni = $(this.element.find("input")[0]).val().split("/");
		var timeIni = $(this.element.find("input")[1]).val().split(":");
		var dateEnd = $(this.element.find("input")[2]).val().split("/");
		var timeEnd = $(this.element.find("input")[3]).val().split(":");

		Parking.UserInfo.Date.Ini.Date.Day = dateIni[0];
		Parking.UserInfo.Date.Ini.Time.Hour = timeIni[0];
		Parking.UserInfo.Date.Ini.Time.Minute = timeIni[1];

		Parking.UserInfo.Date.End.Date.Day = dateEnd[0];
		Parking.UserInfo.Date.End.Time.Hour = timeEnd[0];
		Parking.UserInfo.Date.End.Time.Minute = timeEnd[1];

		Parking.Router.navigate("reservas");

	}

}