<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    //врзъка с базата
    $conn = new mysqli('localhost', 'root', '', 'culinary');
    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    } else {
        // информацията се записва в таблицата
        $stmt = $conn->prepare('INSERT INTO users (email, username, password) VALUES (?, ?, ?)');
        if ($stmt) {
            $stmt->bind_param('sss', $email, $username, $password);
            //отговор
            if ($stmt->execute()) {
                
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
