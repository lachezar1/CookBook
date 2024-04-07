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
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $recipeName = $_POST["recipe_name"];
    $tag = $_POST["tag"];
    $ingredients = $_POST["ingredients"];
    $howTo = $_POST["how_to"];
    $video = $_POST["video"];

    // File upload handling
    $targetDirectory = "images/"; // Folder where images will be stored
    $targetFile = $targetDirectory . basename($_FILES["recipe_image"]["name"]);
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));


    // Move uploaded file to designated folder
    if (move_uploaded_file($_FILES["recipe_image"]["tmp_name"], $targetFile)) {
        // File uploaded successfully, now insert recipe information into database
        $imagePath = $targetFile; // Store image path in variable to insert into database

        // Prepare SQL statement to insert recipe data
        $sql = "INSERT INTO recipes (name, image, tag, howTo, ingredientsTM, video) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$recipeName, $imagePath, $tag, $ingredients, $howTo, $video]);

        echo "Recipe added successfully.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>