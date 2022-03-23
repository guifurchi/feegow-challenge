<?php

namespace MF\Model;

use App\Connection;

class Container{

    public static function getModel($model){

        //1. Instance of models
        $class = "\\App\\Models\\".ucfirst($model);

        //2. Get connection
        $conn = Connection::getDb();

        return new $class($conn);

    }
}

?>