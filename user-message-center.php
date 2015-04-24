<?php
    // Kareem K. Beazer
	session_start();

    $user = "kareem";
    $pass = "kbeazer13";
    $sql = "mysql:host=104.236.52.251; dbname=kbcreations; port=3306;";
    $dbh = new PDO($sql, $user, $pass);

    $query = "SELECT * FROM messages;";
    $stmt = $dbh -> prepare($query);
    $stmt -> execute();
    $results = $stmt -> fetchAll(PDO::FETCH_ASSOC);

    foreach ($results as $message) {
       echo '<div class="userRecord">';
       echo "<h3>" . $message["userName"] . "</h3>";
       echo "<p>Email: " . $message["email"] . "</p>";
       echo "<p>Message: " . $message["message"] . "</p>";
       echo "</div>";
   };
?>
