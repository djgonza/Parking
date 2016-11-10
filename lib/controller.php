<?php

class Controller { 

    /* 
        Definimos las variables de la clase
    */
    public static $rutaRecursos = "client/secciones/";
    public static $head = "client/secciones/head.html";
    public static $footer = "client/secciones/footer.html";
    public static $err404 = "client/secciones/404.html";
    public static $extension = ".html";
    var $url;
    var $secciones;
    

    public function Controller(){

        /*
            Url
        */
        $this->url = str_replace("/", "", $_SERVER["REDIRECT_URL"]);
        /*
            Definicion de secciones
        */
        $this->secciones = array(
            "inicio" => self::$rutaRecursos."inicio".self::$extension, 
            "tarifas" => self::$rutaRecursos."tarifas".self::$extension, 
            "servicios" => self::$rutaRecursos."servicios".self::$extension
        );

        /*
            Peticiones get
        */
        $this->peticionesGet();
        /*
            Peticiones post
        */
        $this->peticionesPost();
        /*
            Peticiones generales
        */
        $this->peticionesVacias();

    }

    /*
        selecciona la seccion en funcion de la url
    */
    private function peticionesVacias () {

        //default -> /
        if ($this->url == "") {
            include self::$head;
            include $this->secciones["inicio"];
            include self::$footer;
            exit;
        }
        
        //seccion -> /url
        if(array_key_exists($this->url, $this->secciones)){
            include $this->secciones[$this->url];
            exit;
        }

        //el recurso no existe
        include self::$err404;
        exit;

    }

    /*
        Gestiona las peticiones get
    */
    private function peticionesGet () {
        if(!empty($_GET)){
            echo "get";
            exit;
        }
    }

    /*
        Gestiona las peticiones post
    */
    private function peticionesPost () {
        if(!empty($_POST)){
            echo "post";
            exit;
        }
    }

}

?>