<?php


if(isset($_POST['action'])) {

switch($_POST['action']) {
  case 'contact' :

  //do some db stuff...
  //if you echo out something, it will be available in the data-argument of the
  //ajax-post-callback-function and can be displayed on the html-site



  $first_name = $_POST['first_name'];

  $last_name = $_POST['last_name'];

  $visitor_email = $_POST['email'];

  $message = $_POST['message'];


    $email_from = 'admin@nicolesantarsiero.com';

    $email_subject = "New Website Contact";

    $email_body = "New message from:  $first_name $last_name \n" . "Here is the message: \n $message";


  $to = "santarsiero.nicole@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

  break;
}

}

 ?>
