<?php

namespace MF\init;

abstract class Bootstrap{
    
    private $routes;

    abstract protected function initRoutes();

//1. Get url from browser
    protected function getUrl(){
        return parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    }

//3. Create setters, getters and construct
public function __construct(){
    $this->initRoutes();
    $this->run($this->getUrl());
}

public function setRoutes(array $routes){
    $this->routes = $routes;
}

public function getRoutes(){
    return $this->routes;
}

//4. Create run method : create dinamic instace of Controllers
protected function run($url){
    foreach ($this->getRoutes() as $path => $route) {
        if($url == $route['route']){
            $class = "App\\Controllers\\".ucfirst($route['controller']);

            $controller = new $class;
            
            $action = $route['action'];

            $controller->$action();

        }
    }
}

}

?>