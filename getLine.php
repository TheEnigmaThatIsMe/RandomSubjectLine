<?php
	include 'secure/secure.php';
	if (isset($_POST['action'])) {
		$link = mysqli_connect($HOSTNAME, $USERNAME, $PASSWORD, $DBNAME);
		$result = getALine($link);
		mysqli_close ($link);
		return $result;
	}
	function getALine($link){
		if (!$link) {
			die('Could not connect: ' . mysql_error());
		}
		$idnum = rand(1, 20);
		$stmt = $link->prepare("SELECT line FROM subjectLine WHERE id= $idnum");
		$stmt->execute();

		$stmt->store_result();
		$stmt->bind_result($subjectLine);
		
		if($stmt->fetch()){
			?><h2><?php echo "$subjectLine\n"; ?></h2><?php
		}
		else{
			?><h2><?php echo "Error fetching line from database\n"; ?></h2><?php
		}
		$stmt->close();
		//return $subjectLine;
	}
?>
