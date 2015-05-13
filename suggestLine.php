<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">
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
	</head>
	<body>
		<div class="container">
	      <div class="page-header">
	        <a href = index.php><h2>Suggest A Line</h2></a>
	      </div>
		<div class = "container">
	    	<form class="form-horizontal" role="form" method="post" action="submitLine.php">
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
				<div class="form-group">
					<label for="human" class="col-sm-2 control-label">2 + 3 = ?</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="human" name="human" placeholder="Your Answer">
						<?php echo "<p class='text-danger'>$errHuman</p>";?>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-10 col-sm-offset-2">
						<input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-10 col-sm-offset-2">
						<?php echo $result; ?>    
					</div>
				</div>
			</form>
	    </div>
	</body>
</html>