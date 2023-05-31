<?php
$servername="localhost:3307";
$username="root";
$password="";
$database_name="xenonform";

//Database Connection
$conn = mysqli_connect($servername,$username,$password,$database_name);
if(!$conn)
{
    die('Connection Failed : '.$mysqli_connect_error());
}

if(isset($_POST['save']))
{
    $name = $_POST['name'];
    $emailid = isset($_POST['emailid']) ? $_POST['emailid'] : '';
    $password = $_POST['password'];
    $confirm_password = $_POST['confirmpassword'];
    $telephone = $_POST['number'];
    $continent = $_POST['continent'];

    $sql_query="INSERT INTO registerme (name, emailid, password, confirmpassword, number, continent)
                VALUES ('$name', '$emailid', '$password', '$confirm_password', '$telephone', '$continent')";

    if(mysqli_query($conn,$sql_query))
    {
        echo "Registration Successfully...";
    }
    else{
        echo "Error: " . $sql_query . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>
