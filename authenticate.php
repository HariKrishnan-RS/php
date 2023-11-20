<?php
require("php_connect.php");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usremail = $_POST['email'];
    $password = $_POST['password'];
    $validEmail = '';
    $validPassword='';
    $obj = new connect();
    $pdo = $obj->connect();
    if($pdo){
      try {
      $stmt = $pdo->prepare('SELECT c.id, c.first_name, p.hash_value
                              FROM customers c
                              JOIN passwords p ON c.id = p.cus_id
                              where c.email = :email ;');
    // $usrpsswd = '123456789'; 
    // $usrpsswdHash = password_hash($usrpsswd, PASSWORD_DEFAULT);
    // $stmt = $pdo->prepare("INSERT INTO passwords (cus_id, hash) VALUES (:cus_id, :password)");
    // $usremail = 12345;
    // $stmt->bindParam(':cus_id', $usremail);
    // $stmt->bindParam(':password', $usrpsswdHash);
    $stmt->bindParam(':email', $usremail);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $id = $result[0]['id'];
    $first_name = $result[0]['first_name'];
    $hash = $result[0]['hash_value'];
    if (password_verify($password, $hash)) {
    echo $id;
    } else {
    echo "password is incorrect!";
    }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
      
    }
}
?>

