<?php
// Connect to MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "culinary";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch recipes from the database
$sql = "SELECT id, name, image, tag, howTo, ingredientsTM, video FROM recipes";
$result = $conn->query($sql);

$recipesTRY = array();

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        $recipesTRY[] = $row;
    }
}

// Close connection
$conn->close();

// Encode recipes as JSON and output
echo json_encode($recipesTRY);
?>
