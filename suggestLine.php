<?php
	session_start();
	include 'secure/reCAPTCHA.php';
	$msg='';
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		$recaptcha=$_POST['g-recaptcha-response'];
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $from = 'Suggest Random Subject Line'; 
        $to = 'admin@randomsubjectline.com'; 
        $subject = 'Message from Suggest Line ';
        
        $body = "From: $name\n E-Mail: $email\n Message:\n $message";
 
		if(!empty($recaptcha)){
			include("getCurlData.php");
			$google_url="https://www.google.com/recaptcha/api/siteverify";
			$ip=$_SERVER['REMOTE_ADDR'];
			$url=$google_url."?secret=".$secret."&response=".$recaptcha."&remoteip=".$ip;
			$res=getCurlData($url);
			$res= json_decode($res, true);
			if($res['success']){
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
				if (!$errName && !$errEmail && !$errMessage) {
					if (mail ($to, $subject, $body, $from)) {
						?><script>alert("Thank you for your submission!");
						window.location.replace("http://www.randomsubjectline.com");
						</script><?php
					}
				}
				else{
					?><script>alert("There was an issue with your submission!");
					</script><?php
				}
			}
			else{
				$msg="Please re-enter your reCAPTCHA.";
			}
		}
		else{
			$msg="Please re-enter your reCAPTCHA.";
		}
	}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Random Subject Line Generator">
		<meta name="author" content="George Gilmartin">
		<meta name="keywords" content="random, subject, line, generator, yahoo">
		<link rel="icon" href="img/question.png">
		<title>Suggest A Line</title>
		
		<!-- Bootstrap Core CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet">

		<!-- Custom CSS -->
		<link href="css/grayscale.css" rel="stylesheet">
		<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">

		<!-- Custom Fonts -->
		<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
		<link href="http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
		<link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
		
		<!--Google Analyitcs-->
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-62915802-1', 'auto');
		  ga('send', 'pageview');

		</script>
		<script src='https://www.google.com/recaptcha/api.js'></script>
	</head>
	<body>
		<div class="container">
	      <div class="page-header">
	        <a href = index.php><h2>Suggest A Line</h2></a>
	      </div>
		<div class = "container">
	    	<form class="form-horizontal" role="form" method="post" action="">
				<div class="form-group">
					<label for="name" class="col-sm-2 control-label">Name</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="name" name="name" placeholder="First & Last Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
						<?php echo "<p class='text-danger'>$errName</p>";?>
					</div>
				</div>
				<div class="form-group">
					<label for="email" class="col-sm-2 control-label">Email</label>
					<div class="col-sm-10">
						<input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="<?php echo htmlspecialchars($_POST['email']); ?>">
						<?php echo "<p class='text-danger'>$errEmail</p>";?>
					</div>
				</div>
				<div class="form-group">
					<label for="message" class="col-sm-2 control-label">Message</label>
					<div class="col-sm-10">
						<textarea class="form-control" rows="4" name="message"><?php echo htmlspecialchars($_POST['message']);?></textarea>
						<?php echo "<p class='text-danger'>$errMessage</p>";?>
					</div>
				</div>
				<div class="g-recaptcha" data-sitekey="6Lcu5BITAAAAACrWfIHSYlsjyP1N8c2vctG3xZPC"></div>
				<!--<div class="form-group">
					<label for="human" class="col-sm-2 control-label">2 + 3 = ?</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="human" name="human" placeholder="Your Answer">
						<?php echo "<p class='text-danger'>$errHuman</p>";?>
					</div>
				</div>-->
				<div class="form-group">
					<div class="col-sm-10 col-sm-offset-2">
						<input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
					</div>
				</div>
				<span class='msg'><?php echo $msg; ?></span>
				<!--<div class="form-group">
					<div class="col-sm-10 col-sm-offset-2">
						<?php echo $result; ?>    
					</div>
				</div>-->
			</form>
	    </div>
	</body>
</html>