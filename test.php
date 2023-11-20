<?php
if (password_verify('qweqweqwe', '$2y$10$UaIb2SIFJ5XKtBwVQYwnvew6sJH/l1PVQpjBAjrPwnsIoFnUFiSFy')) {
    echo 'Password is valid!';
} else {
    echo 'Password is invalids!';
}

?>