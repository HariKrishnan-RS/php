<?php
require("php_connect.php");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usremail = $_POST['email'];
    $password = $_POST['password'];
    $userfirstname = $_POST['first'];
    $userlastname = $_POST['last'];

    $obj = new connect();
    $pdo = $obj->connect();
    if($pdo){
      try {
  
    $stmt = $pdo->prepare("INSERT INTO customers (first_name,last_name,email) VALUES (:usr_first,:usr_last,:usr_mail)");
    $stmt->bindParam(':usr_first', $userfirstname);
    $stmt->bindParam(':usr_last', $userlastname);
    $stmt->bindParam(':usr_mail', $usremail);
    $stmt->execute();
    //insert password
    $stmt = $pdo->prepare("SELECT id FROM customers WHERE email = :usr_mail;");
    $stmt->bindParam(':usr_mail', $usremail);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $id = $result[0]['id'];
    $stmt = $pdo->prepare("INSERT INTO passwords (cus_id,hash_value) VALUES (:id,:hashh)");
    $stmt->bindParam(':id', $id);
    $usrpsswdHash = password_hash($password, PASSWORD_DEFAULT);
    $stmt->bindParam(':hashh', $usrpsswdHash);
    $stmt->execute();
    echo 1;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
      
    }
}
?>

