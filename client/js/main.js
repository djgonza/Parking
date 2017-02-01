Parking = {};

$(function () {

	Parking.Sections = new Array();
	Parking.Router = new Router ($("main"));
	Parking.Nav = new NavController($("header>nav"));
	Parking.UserInfo = {
		"Date": {
			"year"			: new Date().getMonth() < 7 ? new Date().getFullYear() : new Date().getFullYear() + 1,
			"month"			: 7,
			"defaultDayIni" : 6, 
			"defaultDayEnd"	: 15,
			"dayIni" 		: 6, 
			"dayEnd"		: 15,
			"timeIni"		: 0,
			"timeEnd"		: 0
		},
		"Square"			: {
			"Id"			: undefined,
			"TypeV"			: "c",
			"Zone"			: "Sol"
		},
		"PersonalInfo"		: {
			"Name"			: undefined,
			"FirstName"		: undefined,
			"SecondName"	: undefined,
			"DNI"			: undefined,
			"Tlf"			: undefined,
			"Email"			: undefined,
			"Adelantado"	: 0,
			"Comentario"	: "",
			"Matricula"		: undefined,
			"Adultos"		: 0,
			"Niños"			: 0,
			"TipoPago"		: undefined
		}
	};
	
});