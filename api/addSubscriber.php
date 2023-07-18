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

    if ($data != null) {
      $email = $data['email'];
	
      $sql = "INSERT INTO Subscriber (email) VALUES ('$email')";

      if ($conn->query($sql) === TRUE) {
          echo json_encode(array('message' => "New record created successfully"));
      } else {
          echo json_encode(array('message' => "Error: " . $sql . "<br>" . $conn->error));
      }
    } else {
        echo json_encode(array('message' => "No data to insert"));
    }
    $conn->close();
?>
