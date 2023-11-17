<?php
error_reporting( E_ALL );
ini_set( "display_errors", 1 );

$db_host = "localhost";
$db_name = "ticketBooking";
$db_user = "userBase";
$db_pass = "m6[9Ifs4v6Wb@Ud@";
$connect = new mysqli($db_host,$db_user,$db_pass,$db_name);

if($connect -> connect_error){
 die( "faild".$connect -> connect_error);
}
else{
  echo "Connected Successfully<br>";
}

$query  = "SELECT * from customers;";
$result_set = mysqli_query($connect,$query);
$result_ary = mysqli_fetch_all($result_set,MYSQLI_ASSOC);
// $query = 'INSERT INTO customers(first_name,last_name,email)
// // VALUES("kyojiro","Rangoku","kyojirorangoku@gmail.com");';

// $result_set = mysqli_query($connect,$query);
// $result_ary = mysqli_fetch_all($result_set,MYSQLI_ASSOC);
// var_dump($result_ary);
?>
<DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
      <form method="post">
        <input  type = "text" name="first_name"  >
        <input type = "text" name="last_name"  >
        <input type = "email" name="email"  >
        <input type="submit">      
      </form>
      <?php

      ?>
    </body>
  </html>