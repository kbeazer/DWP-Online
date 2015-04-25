<!DOCTYPE html>
<html class="no-js" lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kbeazer Creations</title>
        <link href="css/style.css" rel="stylesheet" />
        <link href='http://fonts.googleapis.com/css?family=Michroma' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
    </head>

    <body> 
        <div class="container">
            <div>
                <h2 class="mcHeading">KB Creations Message Center</h2>
            </div>
            <?php
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

            <footer>
                <p>Designed and Developed by Kareem K. Beazer. All rights reserved 2015 &copy;</p>
            </footer>
        </div> 
        <script type="text/javascript" src="js/jquery-1.11.0.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
    </body>
</html>




