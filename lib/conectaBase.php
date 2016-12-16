<?php
	
	class ConectBase {

		const DB_SERVER = "176.12.82.64";
		const DB_USER = "parkingdesk";
		const DB_PASSWD = "DeskParking2016*--";
		const DB_NAME = "parking_desk";

		private $conexion;

		static function makeConexion() {
			try {
				$this->conexion = new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME, DB_USER, DB_PASSWD);
				$conexion->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY. true);
				$conexion->exec('SET names utf8');
			} catch (Exception $ex) {
				$error = "Error: no se pudo conectar a la base de datos.";
				echo $error;
				exit();
			}	
		}

		static function desconexion() {
			$this->conexion=null;	
		}

		static function anadirTodo(dni, nombre, ap1, ap2, tlf, email, adelant, coment, matricula, llegada, salida, codPlaza) {
			
			$this->conexion();
			//En la base de datos es añadirTodo
			$sql = "call anadirTodo(dni, nombre, ap1, ap2, tlf, email, adelant, coment, matricula, llegada, salida, codPlaza)";
			$resul = $this->conexion->query($sql);
			return $resul;
			$this->desconexion();
		}

		static function plazasDisponibles(tipo, entrada, salida) {

			$this->conexion();
			$sql = "call plazasDisponibles(tipo, entrada, salida)";
			$resul = $this->conexion->query($sql);
			$this->desconexion();

		}

	}


?>