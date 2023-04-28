<?php


session_start();
include '../db/db.php';
$database = mysqli_select_db($con,'codecrackers');
// if (!$database) {
//    echo '<script type ="text/javascript"> alert("Server Down.\nPlease try again later.");window.location= "signin.php"</script>';
//   die();
// }

$email = $_POST['email'];
$pass = $_POST['pass'];

$email = stripcslashes($email);
$pass = stripcslashes($pass);

$email = mysqli_real_escape_string($con,$email);
$pass = mysqli_real_escape_string($con,$pass);

$result = mysqli_query($con,"select * from users where email = '$email'") or die("failed to query database".mysqli_error());
$row = mysqli_fetch_array($result);
if (($row['email'] !== $email)) {
    // code...
    echo '<script type ="text/javascript"> alert("Email does nor exists.\nPlease Make Your account first.");window.location= "index.php"</script>';
    die();

}
// if (($row['otp'] == 0) || ($row['otp'] >1)) {
//     // code...
//     echo '<script type ="text/javascript"> alert("Your Email is not confirmed yet.\nPlease Confirm Your Email via Email Confirmation.");window.location= "confirm.php"</script>';
//     die();

// }

$result = mysqli_query($con,"select * from users where email = '$email' and pass = '$pass'") or die("failed to query database".mysqli_error());
$row = mysqli_fetch_array($result);

if ($row['email'] == $email && $row['pass'] == $pass) {
    $_SESSION['email']=$email;

    echo '<script type ="text/javascript"> alert("login Successfully!! welcome ");window.location= "../home.php"</script>';
}else{
    // code...
    echo '<script type ="text/javascript"> alert("Either Username or Password is incorrect");window.location= "index.php"</script>';
}
 ?>