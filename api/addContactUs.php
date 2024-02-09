<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

// Database credentials
$host_name = '';
$database = '';
$user_name = '';
$password = '';

// Create connection
$conn = new mysqli($host_name, $user_name, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the HTTP POST request
$data = json_decode(file_get_contents('php://input'), true);
error_log(print_r($data, true));

$response = array();

if ($data != null) {
    $fullName = $data['fullName'];
    $email = $data['email'];
    $message = $data['message'];

    $sql = "INSERT INTO enquiryForm (fullName, email, message) 
      VALUES ('fullName', 'email', 'message')";

    if ($conn->query($sql) === TRUE) {
        $response['db'] = "New record created successfully";
    } else {
        $response['db'] = "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    $response['db'] = "No data to insert";
}

$conn->close();

echo json_encode($response);
?>

