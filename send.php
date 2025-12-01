<?php
// Include PHPMailer (using Composer autoload) or you can manually include the classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use UI\Window;

require 'vendor/autoload.php';  // adjust path as needed


function console_log($output, $with_script_tags = true)
{
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) .
        ');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Basic validation / sanitisation
    $name = trim($_POST['name'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $subject=trim($_POST['subject'] ?? '');
    $linkedin = trim($_POST['linkedin'] ?? '');
    $emailcontent = trim($_POST['emailcontent'] ?? '');
    $company = trim($_POST['company'] ?? '');
    $redirecturl = trim($_POST['redirecturl'] ?? '');
    console_log($emailcontent);



    $email = trim($_POST['email'] ?? '');
   // var_dump($email);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        
        exit($email.' Invalid email address.');
    }

    $emailcontent = 'name: ' . $name
        . '<br/>email: ' . $email
        . '<br/>phone: ' . $phone
        . '<br/>company: ' . $company
        . '<br/>linkedin: ' . $linkedin
        . '<br/>Message: ' . $emailcontent;
    console_log($emailcontent);

    // Additional validation for phone number can be done here as required

    // Create the mail object
    
    
    $mail = new PHPMailer(true);
    $from = ''; 

    try {
        // SMTP configuration for Hostinger
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'hello@cerebralops.in';   // your full Hostinger email address
        $mail->Password = '5tr@tegiC';           // the password for that email account
        
              
        // Choose either TLS on 587 or SSL on 465
        $mail->SMTPSecure = 'ssl'; // for port 587
        $mail->Port = 465;
        $from=$name . ' via CerebralOps.in';
        
        // From / Reply-to
        $mail->setFrom('hello@cerebralops.in', $from);
       // $mail->addReplyTo('hello@cerebralops.in', 'Deep @ Cerebral Ops');

        // Recipient
        $mail->addAddress('cerebralops@gmail.com', 'Growth Expert');
        $mail->addCC('hello@cerebralops.in', 'Cerebral Ops');



        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $emailcontent;
           
        
       $mail->AltBody = "New contact form submission\nEmail: {$email}\nPhone: {$phone}\n  {$emailcontent}";

        
        ///////////////////////////////////////////
        // getting the current URL to identify calling page
       
        // Determine the protocol (HTTP or HTTPS)
        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';

        // Get the host name (e.g., example.com or localhost)
        $host = $_SERVER['HTTP_HOST'];

        // Get the request URI (the part of the URL after the host, including path and query string)
        $requestUri = $_SERVER['REQUEST_URI'];

        // Combine the parts to form the full URL
        $currentUrl = $protocol . '://' . $host . $requestUri;

        echo "The current URL is: " . $currentUrl . "<br/>";

        ////////////////////////////////////////////////
        

        if (str_contains($currentUrl,"localhost")) {
            echo "Can't send on local box <br/> ";
           
        } else 
        {
            console_log('sending email...');
            // Send email
            $mail->send();
            console_log('email send!');
        }
        ////////////////////////////////////////////////////
        console_log($redirecturl);

        if ($redirecturl != '') {
            header("Location:" . $redirecturl);
            exit();
        }

        if (isset($_SERVER['HTTP_REFERER'])) {
            $callerUrl = $_SERVER['HTTP_REFERER'];
            echo "The caller URL is: " . $callerUrl . "<br/>";
        } else {
            echo "No referrer URL found.<br/><br/>";
            echo " Please click here to go back to home page. <br/>";
            echo "<a href='https://cerebralops.in/'> Cerebral Ops Home </a>";
        }

        $returnUrl = "";
        $returnUrl = $callerUrl . "?status=emailed";
        header("Location:" . $returnUrl);
        exit(); // It is crucial to call exit() after a redirect

        /////////////////////////////////////////////////////
        
        
        
    } catch (Exception $e) {
        // In production you may log this instead of echo
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo 'Invalid request method.';
}
