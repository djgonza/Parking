<?php

class Controller {
    
    const DIR_SECCIONES = "client/secciones/"; 
    const FILE_HEAD = "client/secciones/head.html";
    const FILE_FOOTER = "client/secciones/footer.html";
    const DIR_ERROR404 = "client/secciones/404.html";


    public function Controller(){

        /*
            Peticiones Ajax
        */
        if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

            // Piden una seccion
            if(isset($_GET["seccion"])){

                $this -> getSeccion ($_GET["seccion"]);
                exit;

            }

        }

        /*
            Peticiones Navegador
        */
        $this -> getClientApp();

    }

    /*
        Servir aplicacion al cliente
    */
    private function getClientApp() {

        include self::FILE_HEAD;
        include self::FILE_FOOTER;

    }

    /*
        Comprueba que la seccion existe
        y devuelve el html
        o devuelve notFound
    */
    private function getSeccion ($seccion) {

        // Buscamos la seccion
        $directorio = opendir(self::DIR_SECCIONES);
        while ($archivo = readdir($directorio)) {

            $nameSeccionParse = explode(".",$archivo);

            if($seccion == $nameSeccionParse[0]){

                include self::DIR_SECCIONES.$archivo;
                exit;

            }

        }

        // Seccion no encontrada
        $this->notFound();

    }

    /* 
        Pagina no encontrada
    */
    private function notFound (){
        include self::DIR_ERROR404;
        exit;
    }


}

?>