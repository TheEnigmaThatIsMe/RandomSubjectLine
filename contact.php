<?php
    if ($_POST["submit"]) {
        $name = htmlspecialchars($_POST['name']);
        $email = $_POST['email'];
        $message = htmlspecialchars($_POST['message']);
        //$human = intval($_POST['human']);
        $from = 'Contact Form Random Subject Line'; 
        $to = 'admin@randomsubjectline.com'; 
        $subject = 'Message from Contact Form';
        
        $body = "From: $name\n E-Mail: $email\n Message:\n $message";
 
        // Check if name has been entered
        if (!$_POST['name']) {
            $errName = 'Please enter your name';
        }
        
        // Check if email has been entered and is valid
        if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $errEmail = 'Please enter a valid email address';
        }
        
        //Check if message has been entered
        if (!$_POST['message']) {
            $errMessage = 'Please enter your message';
        }
 
		// If there are no errors, send the email
		if (!$errName && !$errEmail && !$errMessage) {
			if (mail ($to, $subject, $body, $from)) {
				?><script>alert("Thank you!");</script><?php
			}
		}
		else{
			?><script>alert("There was an issue with your submission!");</script><?php
		}
    }
?>