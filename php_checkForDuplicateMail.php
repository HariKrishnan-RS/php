<?php
require("php_connect.php");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usremail = $_POST['email'];
    $validEmail = '';
    $obj = new connect();
    $pdo = $obj->connect();
    if($pdo){
      try {
      $stmt = $pdo->prepare('SELECT * FROM customers
                              where email = :email ;');

    $stmt->bindParam(':email', $usremail);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (empty($result)) {
   echo true;
    } else {
   echo false;
    }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
      
    }
  }
?>