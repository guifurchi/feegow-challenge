<?php

namespace MF\Model;

use App\Connection;

abstract class Model{

    protected $db;

    public function __construct($db){
        $this->db = $db;
    }


}

?>