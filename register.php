<?php

$email = $_POST['email'];
$password = $_POST['password'];

$conn = new mysqli('localhost', 'root', '', 'culinary');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else { 
    $stmt = $conn->prepare('select * from users where email = ?');
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $stmt_result = $stmt->get_result();
    if ($stmt_result->num_rows > 0) {
        $data = $stmt_result->fetch_assoc();
        if($data['password'] === $password) {
            //echo '<script>alert("Log in successfull");</script>';
        } else {
           // echo '<script>alert("Invalid Email or password");</script>';
        }
    } else {
        //echo '<script>alert("Invalid Email or password");</script>';
    }
}

?>