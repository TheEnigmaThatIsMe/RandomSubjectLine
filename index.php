<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="img/question.png">

    <title>Random Subject Line</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/grayscale.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    
    

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

    <!-- Navigation -->
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">
                    <i class="fa fa-play-circle"></i>  <span class="light">Random</span> Subject Line
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                    	<a class="page-scroll" href="#get">Get</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#suggest">Suggest</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#report">Report</a>
                    </li>
                    <li>
                        <li><a class="navigation-link contact contact-link" data-modal="contact" href="#contact">Contact</a></li>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Intro Header -->
    <header class="intro">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h1 class="brand-heading">Random Subject Line</h1>
                        <p class="intro-text">Use a randomly generated subject line for anything</p>
                        <a href="#get" class="btn btn-circle page-scroll">
                            <i class="fa fa-angle-double-down animated"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
	<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <!-- Get random subject line Section -->
    <section id="get" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
            	<form method="POST">
            		<input type="submit" name="submit" value="Submit" />
            	</form>
				<?php
					
					/*if (!isset($_POST['submit'])){
						echo "<strong>Error!</strong>";
					}*/
					
					if(isset($_POST['submit'])) {
						getALine();
					}
					
					function getALine(){
						include 'secure/secure.php';
					
						$link = mysqli_connect($HOSTNAME, $USERNAME, $PASSWORD, $DBNAME);
						if (!$link) {
							die('Could not connect: ' . mysql_error());
						}
						$idnum = rand(0, 5);
						$stmt = $link->prepare("SELECT line FROM subjectLine WHERE id= $idnum");
						$stmt->execute();

						$stmt->store_result();
						$stmt->bind_result($subjectLine);

						while($stmt->fetch()){
							?><h1><?php echo "Your random subject line is:" ?></h1> <h3><?php echo "$subjectLine\n"; ?></h3> <?php
						}

						$stmt->close();
						mysqli_close ($link);
					}
				?>
            </div>
        </div>
    </section>
    
    <!-- Suggest a Line Section -->
    <section id="suggest" class="content-section text-center">
        <div class="download-section">
            <div class="container">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2>Suggest A Line</h2>
                    <p></p>
                    
                </div>
            </div>
        </div>
    </section>

    <!-- Report Section -->
    <section id="report" class="content-section text-center">
        <div class="download-section">
            <div class="container">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2>Report A Line</h2>
                    <p></p>
                    
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
   	<div class='contact-modal modal'>
    	<div class='container'>
        	<a class='modal-close' href='#'>Close</a>
    	</div>
		<div class='container form-container'>
			<form method="post" class="contact-form active animate" id="contact-form-simple" action="/contact" accept-charset="UTF-8"><input name="authenticity_token" type="hidden" /><div class='form-container'>
				<header class='form-header'>
					<h1 class='contact-modal-title'>Have a suggestion for us?</h1>
					<p class='contact-modal-intro'>Tell us your suggestion so we can improve Random Subject Line</p>
					<div class='switch-form-type'>
						<a class='active' data-form='simple' href='#'>Suggestion Form</a>
						<a data-form='advanced' href='#'>Detailed Submission Form</a>
					</div>
				</header>
				<div class='form-body'>
					<fieldset>
						<div class='form-row'>
							<label><input placeholder="Name" required="required" name="name" type="text" />
								<span class='caption'>Name</span>
							</label>
						</div>
						<div class='form-row'>
							<label><input name="email" placeholder="Email Address" required="required" type="email" />
								<span class='caption'>Email</span>
							</label>
						</div>
						<div class='form-row'>
							<label><textarea rows="1" placeholder="Tell us your idea" required="required" class="autosize" name="message" cols=""></textarea>
								<span class='caption'>Idea</span>
							</label>
						</div>
					</fieldset>
					<fieldset>
						<input value="Send Message" type="submit" />
						<p class='contact-modal-note'>We'll do our best to respond within a few business days.<br>For non project related inquiries, please contact <a href="mailto:admin@randomsubjectline.com">admin@randomsubjectline.com</a></p>
					</fieldset>
				  </div>
				</form>
			</div>
			<form method="post" class="contact-form" id="contact-form-advanced" action="/contact" accept-charset="UTF-8"><input name="authenticity_token" type="hidden" /><div class='form-container'>
				<header class='form-header'>
					<h1 class='contact-modal-title'>Detailed Submission Form</h1>
					<p class='contact-modal-intro'>Get descriptive, this will help us understand you better&#10;</p>
					<div class='switch-form-type'>
						<a data-form='simple' href='#'>Quick Submission Form</a>
						<a class='active' data-form='advanced' href='#'>Detailed Submission Form</a>
					</div>
				</header>
				<div class='form-body'>
				<fieldset>
					<div class='form-row'>
						<label><input placeholder="Name" required="required" name="name" type="text" />
							<span class='caption'>Name</span>
						</label>
					</div>
				<div class='form-row two-up'>
					<label><input name="email" placeholder="Email Address" required="required" type="email" />
						<span class='caption'>Email</span>
					</label>
					<label><input name="phone" placeholder="Telephone" required="required" type="tel" />
						<span class='caption'>Phone</span>
					</label>
				</div>
				<div class='uploader'>
				</div>
				<div class='form-row'>
					<label for="message"><textarea rows="1" placeholder="Tell us about yourself" required="required" class="autosize" name="message" cols=""></textarea>
						<span class='caption'>Info</span>
					</label>
				</div>
				</fieldset>
				<fieldset><input value="Send Message" type="submit" />
					<p class='contact-modal-note'>We'll do our best to respond within a few business days.<br>For any related inquiries, please also contact <a href="mailto:admin@randomsubjectline.com">admin@randomsubjectline.com</a></p>
				</fieldset>
				</div>
			</div>
			</form>
		</div>
		<div class='container'>
			<div class='form-state' id='form-state-sending'>
				<div class='form-state-container'>
					<h1>Sending&hellip;</h1>
				</div>
			</div>
		</div>
		<div class='container'>
			<div class='form-state' id='form-state-success'>
				<div class='form-state-container'>
					<h1>Thanks</h1>
					<p>We'll do our best to respond within a few business days.</p>
				</div>
			</div>
		</div>
		<div class='container'>
			<div class='form-state' id='form-state-fail-server'>
				<div class='form-state-container'>
					<h1>Send Failed :(</h1>
					<p>We're currently experiencing server issues.</p>
					<a class="button" href="#">Try Again</a>
				</div>
			</div>
		</div>
		<div class='container'>
			<div class='form-state' id='form-state-fail-email'>
				<div class='form-state-container'>
					<h1>Send Failed</h1>
					<p>The e-mail address you entered is invalid.</p>
					<a class="button" href="#">Go Back</a>
				</div>
			</div>
		</div>
	</div>

    <!-- Footer -->
    <footer>
		<section class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
            	<ul class="list-inline banner-social-buttons">
                    <li>
                        <a href="https://twitter.com/RandSubjectLine" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                    </li>
                    <li>
                        <a href="https://github.com/gmgq72/RandomSubjectLine" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/randomsubjectline" class="btn btn-default btn-lg"><i class="fa fa-facebook fa-fw"></i> <span class="network-name">Facebook</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    	<div class="container text-center">
            <p>Copyright &copy; randomsubjectline.com</p>
        </div>
    </footer>

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="js/jquery.easing.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="js/grayscale.js"></script>
    
    <!-- Contact form JS -->
    <script src="js/site.js" type="text/javascript"></script>
    
	
</body>
</html>
