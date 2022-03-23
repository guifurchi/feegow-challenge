<?php

namespace App;
Use MF\init\Bootstrap;

// criate the dinamic instances to Controllers
class Route extends Bootstrap{

//2. Create init Routes : array with information route, controller and actions
    protected function initRoutes(){
        
        $routes['home'] = array (
            'route' => '/',
            'controller' => 'indexController',
            'action' => 'index'
        );

        $routes['agenda'] = array (
            'route' => '/agenda',
            'controller' => 'AppController',
            'action' => 'agenda'
        );

        $routes['solicitar_agenda'] = array (
            'route' => '/solicitar_agenda',
            'controller' => 'AppController',
            'action' => 'solicitarAgenda'
        );

        $this->setRoutes($routes);

    }

}

?>