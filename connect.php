<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    $conn = new mysqli('127.0.0.1', 'root', '', 'culinary');
    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    } else {
        $stmt = $conn->prepare('INSERT INTO users (email, username, password) VALUES (?, ?, ?)');
        if ($stmt) {
            $stmt->bind_param('sss', $email, $username, $password);
            if ($stmt->execute()) {
                echo 'Registration done';
            } else {
                echo 'Error: ' . $stmt->error;
            }
            $stmt->close();
        } else {
            echo 'Error preparing statement: ' . $conn->error;
        }
        $conn->close();
    }
} else {
    echo 'Invalid request method';
}
?>

