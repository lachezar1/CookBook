<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "culinary";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Retrieve user ID and favorites array from POST request
$userID = $_POST['userID'];
$favorites = $_POST['favorites'];

// Ensure userID is sanitized and validated as needed
$userID = intval($userID); // Convert to integer for security

// Sanitize input (optional but recommended)
$favorites = array_map('intval', $favorites); // Convert each value to integer

// Convert array to comma-separated string for SQL query
$favoritesString = implode(',', $favorites);
$sql = "UPDATE users SET favourite = '$favoritesString' WHERE id = $userID";

if ($conn->query($sql) === TRUE) {
    echo "Favorites saved successfully";
} else {
    echo "Error updating favorites: " . $conn->error;
}

$conn->close();
?>