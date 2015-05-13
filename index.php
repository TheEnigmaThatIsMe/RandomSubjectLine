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
    
    <!--Google Analyitcs-->
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-62915802-1', 'auto');
	  ga('send', 'pageview');

	</script>
	
	<!--AJAX to grab subject line from DB-->
	<script>
	function showLine(){
			$(document).ready(function(){
				$('.grabLineBtn').click(function(){
					var clickBtnValue = $(this).val();
					var ajaxurl = 'getLine.php',
					data =  {'action': clickBtnValue};
					$.post(ajaxurl, data, function(response) {
						// Response div goes here.
						document.getElementById("randomLine").innerHTML = response;
					});
				});

			});
		}
	function reportLine(){
		var response = "Your intolerance for free speech has been noted.";
		document.getElementById("reportLine").innerHTML = response
	}
	</script>
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
	<!--<script src="https://code.jquery.com/jquery-1.10.2.js"></script>-->
	<script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
	
	<br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="row">
		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
				<!-- Random Subject Line -->
				<ins class="adsbygoogle"
					 style="display:block"
					 data-ad-client="ca-pub-6738818154331625"
					 data-ad-slot="2618499191"
					 data-ad-format="auto"></ins>
				<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
		</script>
	</div>
    
    <!-- Get random subject line Section -->
    <section id="get" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
            <br><br>
            <div>
            	<h1>Your random subject line is:</h1>
            	<br><br>
            	<div id=randomLine></div>
            </div>
				<br><br><br><br><br><br>
            	<input class="grabLineBtn" type="submit" name="submit" value="Grab a Line" onclick="showLine()" />
            </div>
        </div>
        <br><br>
        <br><br>
    </section>
    <br><br><br><br><br><br><br>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<!-- Random Subject Line 2 -->
	<ins class="adsbygoogle"
		 style="display:block"
		 data-ad-client="ca-pub-6738818154331625"
		 data-ad-slot="7048698796"
		 data-ad-format="auto"></ins>
	<script>
	(adsbygoogle = window.adsbygoogle || []).push({});
	</script>
    <br><br><br><br><br><br><br>
    <!-- Suggest a Line Section -->
    <section id="suggest" class="content-section text-center">
        <div class="download-section">
            <div class="container">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2>Suggest A Line</h2>
                    <h4>Do you have a random subject line you would like to submit?</h4>
						<a href = suggestLine.php class="grabLineBtn">Suggest a Line</a>
                    <br><br>
                </div>
            </div>
        </div>
    </section>
	<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <!-- Report Section -->
    <section id="report" class="content-section text-center">
        <div class="download-section">
            <div class="container">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2>Report A Line</h2>
                    <h4 id=reportLine></h4>
                    <input class="grabLineBtn" type="submit" name="submit" value="Report a Line" onclick="reportLine()" />
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
						<a data-form='advanced' href='#'>Want to work for us?</a>
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
					<h1 class='contact-modal-title'>Want to work for us?</h1>
					<p class='contact-modal-intro'>Get descriptive, this will help us understand you better&#10;</p>
					<div class='switch-form-type'>
						<a data-form='simple' href='#'>Suggestion Form</a>
						<a class='active' data-form='advanced' href='#'>Want to work for us?</a>
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
					<h1>Oops! Our contact form is currently broken!</h1>
					<p>Please email admin@randomsubjectline.com</p>
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
            <p>Copyright &copy; 2015 randomsubjectline.com</p>
            <a href = terms-conditions.html>Terms and Conditions</a> |
            <a href = privacypolicy.html>Privacy Policy</a>
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
