"use strict";

class Reservas {

	constructor () {

		// Contenedor
		this.element;
		// Pasos del formulario
		this.sections = new Array();
		// Iconos superiores nav
		this.statusIcons;
		// Botones alante atras
		this.buttons;
		// Punto del formulario
		this.status = 0;

	}

	setElement (element) {
		this.element = element;
	}

	setSections (elements) {

		var reservas = this;
		
		// Recorre los elementos y asigna sus eventos
		$(elements).each(function (i, element) {

			// Guardamos la seccion
			reservas.sections[i] = {
				"element": element,
				"childrens": reservas.setSectionChildrens (element)
			};

		});
		
	}

	setSectionChildrens (element) {

		var data =  new Array();
		$(element).children().each (function (i, element) {
			data.push(new Validador(element));
		});
		return data;

	}

	setStatusIcons (elements) {
		this.statusIcons = elements;
	}

	setButtons (elements) {
		
		this.buttons = {};
		this.buttons.anterior = elements[0];
		this.buttons.siguiente = elements[1];

	}

	setStatus (status) { //true ++, false --

		// Comprueba si todos los campos de esta seccion son correctos
		if (status) {
			if(this.getSectionStatus (this.status)){
				this.status++;
			}
		}else{
			this.status--;
		}

		this.switchIconsNav ();
		this.switchBottons ();
		this.switchSections ();


	}

	/*
		
		Muestra y oculta las secciones del form

	*/
	switchSections () {

		if(this.status > 0) {
			$(this.sections[this.status - 1].element).hide();
		}
		$(this.sections[this.status].element).show();
		if(this.status < this.sections.length){
			$(this.sections[this.status + 1].element).hide();
		}

	}

	/*
		
		Muestra u oculta los botones alante atras

	*/
	switchBottons () {

		switch (this.status) {

			case 0:

				$(this.buttons.anterior).hide();

			break;
			case 1:

				$(this.buttons.anterior).show();

			break;
			case this.sections.length - 2:

				$(this.buttons.siguiente).show();

			break;
			case this.sections.length - 1:

				$(this.buttons.siguiente).hide();

			break;

		}

	}


	/*
	
		Cambia de color los iconos del nav superior

	*/
	switchIconsNav () {

		switch (this.status) {

			case 0:
				
				this.setIconActive(this.statusIcons[this.status]);
				this.setIconDefault(this.statusIcons[this.status+1]);

			break;
			case this.sections.length - 1:

				this.setIconActive(this.statusIcons[this.status]);
				this.setIconSucess(this.statusIcons[this.status-1]);

			break;
			default:

				this.setIconSucess(this.statusIcons[this.status-1]);
				this.setIconActive(this.statusIcons[this.status]);
				this.setIconDefault(this.statusIcons[this.status+1]);

		}

	}

	setIconActive (element) {

		$(element).children("div")
			.removeClass("FormDefault")
			.removeClass("FormSuccess")
			.addClass("FormActive");

	}

	setIconDefault (element) {

		$(element).children("div")
			.removeClass("FormActive")
			.removeClass("FormSuccess")
			.addClass("FormDefault");

	}

	setIconSucess (element) {

		$(element).children("div")
			.removeClass("FormDefault")
			.removeClass("FormActive")
			.addClass("FormSuccess");

	}

	getSectionStatus (section) {

		var status = true;

		$.each (this.sections[section].childrens, function (i, element) {
			
			if(!element.status){
				element.setFocus();
				status = false;
				return false;
			}

		});

		return status;

	}



}