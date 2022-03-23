<?php 

namespace App;

class Connection{

    public static function getdb(){

        try{
            $conn = new \PDO(
                "mysql:host=localhost:3312;dbname=feegow;charset=utf8",
                "root",
                ""
            );
            return $conn;
        }catch (\PDOException $e){
            //code...
        }
    }
}

?>