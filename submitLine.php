<?php
    if ($_POST["submit"]) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $human = intval($_POST['human']);
        $from = 'Suggest Random Subject Line'; 
        $to = 'admin@randomsubjectline.com'; 
        $subject = 'Message from Suggest Line ';
        
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
        //Check if simple anti-bot test is correct
        //if ($human !== 5) {
            //$errHuman = 'Your anti-spam is incorrect';
        //}
 
		// If there are no errors, send the email
		if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
			if (mail ($to, $subject, $body, $from)) {
				?><script>alert("Thank you for your submission!");
				window.location.replace("http://www.randomsubjectline.com");
				</script><?php
			}
		}
		else{
			?><script>alert("There was an issue with your submission!");
			window.location.replace("http://www.randomsubjectline.com/suggestLine.php");
			</script><?php
		}
    }
?>