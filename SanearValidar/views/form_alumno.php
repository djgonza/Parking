<?php include "helper/Input.php"; ?>
<?php include "cabecera.html"; ?>

<?php 

	if(isset($errores)){
		echo "<div>";
		foreach ($errores as $key => $value) {
			echo $value."</br>";
		}
		echo "</div>";
	} 

?>

<form action="index.php" method="POST">
	<fieldset>
	<legend>Datos Alumno</legend>
	<label>Alumno</label>
	<input type="text" name="Nombre" value="<?php echo Input::get('Nombre') ?>">
	<label>Apellido</label>
	<input type="text" name="Apellido" value="<?php echo Input::get('Apellido') ?>">
	<label>Edad</label>
	<input type="text" name="Edad" value="<?php echo Input::get('Edad') ?>">
	<label>Módulo</label>
	<select name="Modulo">
		<option value="Base de datos">Base de datos</option>
		<option value="Aplicaciones Web">Aplicaciones Web</option>
		<option value="Seguridad">Seguridad</option>
		<option value="Sistemas Operativos">Sistemas Operativos</option>
	</select>
	<select name="Nota">
		<?php 
			for ($i=1; $i <= 10; $i++) { 
				echo '<option value="'.$i.'">'.$i.'</option>';
			}
		?>
	</select>
	<?php 
		
		if(isset($_POST['btnEnviar'])){
			$btnEnviar = "Validar";
		}else{
			$btnEnviar = "Enviar";
		}
		
	?>
	<input type="submit" value="<?php echo $btnEnviar; ?>" name="btnEnviar">
	
	</fieldset>
</form>

<?php 

	if($resultado){

		$resultado = "<div>";

		$resultado .= "<p>Nombre: ".$_POST['Nombre']." ".$_POST['Apellido']."</p>";
		$resultado .= "<p>Edad: ".$_POST["Edad"]."</p>";
		$resultado .= "<p>Módulo: ".$_POST['Modulo']."</p>";
		$resultado .= "<p>Nota: ".$_POST['Nota']."</p>";

		$resultado .= "</div>";

		echo $resultado;

	} 

?>

<?php include "pie.html"; ?>