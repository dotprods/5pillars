<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header('Content-Type: application/json');

    // Database credentials
    $host_name = 'db5013413146.hosting-data.io';
    $database = 'dbs11243746';
    $user_name = 'dbu5435933';
    $password = '5.Pillars.DB';

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
      $firstName = $data['firstName'];
      $surName = $data['surName'];
      $gender = $data['gender'];
      $dob = $data['dob'];
      $isAalim = $data['isAalim'];
      $isHifdh = $data['isHifdh'];
      $qualifications = $data['qualifications'];
      $isTaughtOnline = $data['isTaughtOnline'];
      $available = implode(",", $data['available']);
      $experience = $data['experience'];
      $about = $data['about'];
	
      $sql = "INSERT INTO tutors (firstName, surName, gender, dob, isAalim, isHifdh, qualifications, isTaughtOnline, available, experience, about) 
      VALUES ('$firstName', '$surName', '$gender', '$dob', '$isAalim', '$isHifdh', '$qualifications', '$isTaughtOnline', '$available', '$experience', '$about')";

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

