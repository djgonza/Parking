<?php 

class ValidadorForm {

	private $errores = array();
	public $reglasValidacion = null;
	private $valido = true;

	public function ValidadorForm (){		
	
		$this->crearReglasDevalidacion();

	}

	public function crearReglasDevalidacion() {

		$this->reglasValidacion = array(
			"Nombre" => array("required" => true),
			"Apellido" => array("required" => true),
			"Edad" => array(
				"required" => true,
				"min" => 18
			),
			"Modulo" => array("required" => false),
			"Nota" => array("required" => true)
		);

	}

	public function validar($datos, $reglas) {

		foreach ($reglas as $key => $value) {
			
			if ($datos[$key] == "" && $value["required"] == true){

				$this->addError($key, "El campo ".$key." es requerido");
				$this->valido = false;

			}else if (isset($value["min"]) && $datos[$key] < $value["min"]) {

				$this->addError($key, "El valor de ".$key." no es correcto ");
				$this->valido = false;
				
			}


		}

		return $this->valido;

	}

	public function parseData ($data) {

		foreach ($data as $key => $value) {

			$value = htmlspecialchars($value);

		}

		return $data;

	}

	public function addError ($nombreCampo, $error) {
		$this->errores[$nombreCampo] = $error;
	}

	public function esValido () {
		return $this->valido;
	}

	public function getErrores () {
		return $this->errores;
	}

	public function getMensajeError ($campo) {
		
		if(isset($this->errores[$campo])){
			return $this->errores[$campo];
		}

	}

}

?>