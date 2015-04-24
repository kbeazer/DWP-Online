<?php
    // Kareem K. Beazer
	session_start();

    $user = "kareem";
    $pass = "kbeazer13";
    $sql = "mysql:host=104.236.52.251; dbname=kbcreations; port=3306;";
    $dbh = new PDO($sql, $user, $pass);

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if ($_POST["email"]) {
        	$_SESSION["message"] = '<div class="newMessage">Success!!! Your message was received!</div>';
            $name = $_POST["name"];
            $email = $_POST["email"];
            $message = $_POST["message"];
            $query = "INSERT INTO messages (userName, email, message) VALUES (:name, :email, :message);";

            $stmt = $dbh -> prepare($query);
            $stmt -> bindParam(":name", $name);
            $stmt -> bindParam(":email", $email);
            $stmt -> bindParam(":message", $message);
            $stmt -> execute();
        }else {
            echo "<div>Please enter a valid web email address to continue!</div>";
        }
    }
    header("Location: index.html");
    die();
?>
