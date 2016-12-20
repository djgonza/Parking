Parking = {};

$(function () {

	Parking.Sections = new Array();
	Parking.Router = new Router ($("main"));
	Parking.Nav = new NavController($("header>nav"));
	Parking.UserInfo = {
		"Date"				: {
			"Ini" 			: {
				"Date"		: {
					"Day"	: 5,
					"Month"	: 6,
					"Year"	: new Date().getMonth() > 6 ? new Date().getFullYear() + 1 : new Date().getFullYear()
				},
				"Time"		: {
					"Hour"	: 0,
					"Minute": 0
				},
			},
			"End"			: {
				"Date"		: {
					"Day"	: 15,
					"Month"	: 6,
					"Year"	: new Date().getMonth() > 6 ? new Date().getFullYear() + 1 : new Date().getFullYear()
				},
				"Time"		: {
					"Hour"	: 12,
					"Minute": 0
				}
			},
		},
		"Square"			: {
			"Id"			: undefined,
			"TypeV"			: undefined
		},
		"PersonalInfo"		: {
			"Name"			: undefined,
			"SecondName"	: undefined
		}
	};

	//console.log(Parking.UserInfo);
	
});