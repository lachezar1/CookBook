<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "culinary";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve userID from POST data
$userID = $_POST['userID'];

// Prepare and execute SQL query to fetch favorite recipes for the given userID
$sql = "SELECT favourite FROM users WHERE id = $userID";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Fetch the result row as an associative array
    $row = $result->fetch_assoc();

    // Convert the fetched favorite recipes string to an array
    $favorites = explode(',', $row['favourite']);

    // Encode the favorites array as JSON and output the result
    echo json_encode($favorites);
} else {
    // No results found for the given userID
    echo "No favorite recipes found for user with ID: $userID";
}

// Close database connection
$conn->close();
?>
