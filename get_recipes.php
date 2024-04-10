<?php
// Създава се връзка с mysql базата
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "culinary";

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверява се дали връзката е осъществена и стабилна
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Извлича се информацията от таблицата
$sql = "SELECT id, name, image, tag, howTo, ingredientsTM, video FROM recipes";
$result = $conn->query($sql);

$recipesTRY = array();

if ($result->num_rows > 0) {
    // Записва се информацията на ред по ред в новия масив
    while($row = $result->fetch_assoc()) {
        $recipesTRY[] = $row;
    }
}

// Прекратява се връзката
$conn->close();

// Променя се формата за да е използваем в JavaScript
echo json_encode($recipesTRY);
?>
