<?php
require("php_connect.php");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $movie_id = $_POST['movie_id'];
    $cus_id = $_POST['id'];
    $review = $_POST['review'];
    $obj = new connect();
    $pdo = $obj->connect();
    if($pdo){
      try {
    $stmt = $pdo->prepare("INSERT INTO reviews (cus_id,review,movie_id) VALUES (:c_id,:rev,:m_id)");
    $stmt->bindParam(':c_id', $cus_id);
    $stmt->bindParam(':rev', $review);
    $stmt->bindParam(':m_id', $movie_id);
    $stmt->execute();
    echo 1;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
      
    }
}
?>

