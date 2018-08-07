<?php
$subject = 'New Subscribe'; // Subject of your email
$to = 'vartovi100@gmail.com';  //Recipient's E-mail
$emailTo = $_REQUEST['email'];

$name = 'New Subscriber';
$email = $_REQUEST['email'];
$name = $_REQUEST['name'];
$phone = $_REQUEST['phone'];
$price = $_REQUEST['price-discount'];
$email_from = $name.'<'.$email.'>';

$headers = "MIME-Version: 1.1";
$headers .= "Content-type: text/html; charset=iso-8859-1";
$headers .= "From: ".$name.'<'.$email.'>'."\r\n"; // Sender's E-mail
$headers .= "Return-Path:"."From:" . $email;

$message = 'Имя : ' . $name;
$message .= 'Телефон : ' . $phone;

if ($price === 'discount-price') {
    $message .= 'Стоимость выбранного пакета - 100грн';
} elseif ($price === 'without-discount-price') {
    $message .= 'Стоимость выбранного пакета - 200грн';
}

if (@mail($to, $subject, $message))
{
	echo 'sent';
}
else
{
	echo 'failed';
}
?>