<?php 

	class Input {
		
		public static function get($dato) {
			if (isset($_POST[$dato])){
				return $_POST[$dato];
			}else{
				return "";
			}
		}
		
	}

?>

