<?php
include '../db/db.php';
// mysqli_query($con,"CREATE DATABASE decoder");
mysqli_select_db($con,'codecrackers');
// if (mysqli_query($con,"CREATE TABLE users (
//     ID int(255) NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     uname varchar(255),
//     email varchar(255),
//     pass varchar(255),
//     passc varchar(255),
//     otp varchar(255)
// )")) {
    # code...
// echo "string";
//}
// if (mysqli_query($con,"CREATE TABLE mail (
//     uname varchar(255),
//     pass varchar(255)
// )")) {
//     # code...
// echo "string";
// }

$name = $_POST['uname'];
$email = $_POST['email'];
$pass = $_POST['pass'];
$passc = $_POST['passc'];

$email = stripcslashes($email);
$email = mysqli_real_escape_string($con,$email);



$result = mysqli_query($con,"select * from users where email = '$email'") or die("failed to query database".mysqli_error());
$row = mysqli_fetch_array($result);

if($row['email'] == $email) {
    echo '<script type ="text/javascript"> alert("This email is already registered \n Please try with a different email");window.location= "index.php"</script>';
    die();
}

	$result = mysqli_query($con,"select * from users where email = '$email'") or die("failed to query database".mysqli_error());
	$row = mysqli_fetch_array($result);
if ($row["email"] == $email) {
 	echo '<script type ="text/javascript"> alert("This email is taken \n Please try with a different username");window.location= "index.php"</script>';
 	die();
}elseif (($row['email'] !== $email) && ($_POST["pass"] == $_POST["passc"])) {
    // code...
   $query = mysqli_query($con," insert into users (uname, email, pass, passc) 
values ('$uname', '$email', '$pass', '$passc')");
  
echo '<script type ="text/javascript"> alert("Registered Successfully");window.location= "../Home.php"</script>';

}else {
    // code...
    echo '<script type ="text/javascript"> alert("Password Dont match");window.location= "index.php"</script>';
}
 ?>