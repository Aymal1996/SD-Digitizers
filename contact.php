<?php


if (isset($_GET['name']) && isset($_GET['email']) && isset($_GET['message'])) {

  try {

    $to = "mohammadahmermalick@gmail.com";

    $subject = "Self Digitizers contact";
    $txt = $_GET['message'];
    $headers = "From:" + $_GET['email'] + "";


    mail($to, $subject, $txt, $headers);


    echo 'Message sent successfully';
  } catch (\Throwable $th) {

    echo 'unable to send email at this momeont';
  }
}
