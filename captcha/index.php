<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $captcha_success = $_POST['captcha'] ?? false;
    if ($captcha_success) {
        echo "Captcha validé! Bienvenue!";
    } else {
        echo "Erreur de captcha!";
    }
}
?>