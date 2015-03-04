<?php
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

	while($stmt->fetch())
	{
		?><h2><?php echo "Your random subject line:" ?></h2> <h3><?php echo "$subjectLine\n"; ?></h3> <?php
	}

	$stmt->close();
?>