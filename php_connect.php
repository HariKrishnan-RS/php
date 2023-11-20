<?php
class connect{
private $host = 'localhost'; 
private $dbname = 'reviewDB';
private $user = 'postgres';
private $password = 'Tonystark@007'; 

function connect(){
  try {
    $pdo = new PDO("pgsql:host=$this->host;dbname=$this->dbname", $this->user, $this->password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;  //return pdo object
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    return false;
}
}
}
?>
