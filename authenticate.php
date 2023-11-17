<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
  var_dump($_GET);
  if (isset($_GET['mail']) && isset($_GET['pass']) ){
    $pass = $_GET['mail'];
    $mail = $_GET['pass'];
    var_dump(
      $mail,$pass
    );
  }
?>
</body>
</html>
