<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    
    // Add your email handling logic here, such as saving to a database or sending a confirmation email.
    
    // Redirect back to the homepage with a success message
    header("Location: index.php?success=1");
    exit();
}
?>