<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "gomezjobelle.024@gmailcom"; // Replace with your email address
  $subject = "Website Form Submission";
  $body = "Name: " . $name . "\n";
  $body .= "Email: " . $email . "\n";
  $body .= "Message:\n" . $message;

  // Use your domain's email address for the From header
  $from = "gomezjobelle.024@gmailcom"; // Replace with your email address

  $headers = "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";  // Add the Reply-To header
  $headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";

  if (mail($to, $subject, $body, $headers)) {
    echo "Email sent successfully!";
  } else {
    echo "Email sending failed.";
  }
}
?>