<?php
require("php_connect.php");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $movie_id = $_POST['id'];
    $obj = new connect();
    $pdo = $obj->connect();
    if($pdo){
      try {
      $stmt = $pdo->prepare('SELECT c.id , c.first_name,c.last_name, r.review,r.movie_id 
FROM customers c
INNER JOIN reviews r ON c.id = r.cus_id
where r.movie_id=:id;
;');

    $stmt->bindParam(':id', $movie_id);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $key_str='';
    $value_str='';
    if (!empty($result)) {
    foreach ($result as $row) {
    foreach ($row as $key => $value) {
        // echo "Key: " . $key . ", Value: " . $value . "<br>";
        $key_str = $key_str.strval($key)."-";
        $value_str = $value_str.strval($value)."-";
    }  
    $value_str = $value_str."|";
}
echo $value_str;
    } else {
   echo false;
    }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
      
    }
  }
?>