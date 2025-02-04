<?php

require_once('db.php');
$query = "select * from `subscribers` ";
$result = mysqli_query($con,$query);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch Login Details</title>
</head>
<style>
    *{
        background-color:grey;
    }
    h2{
        font-size:30px;
    }
    .button{
        color:black;
        font-weight:600px;
        outline: none;
    }
    table{
        border: solid 5px black;
        border-collapse:collapse;
    }
    th,td{
        padding:12px;
    }
</style>
<body>
    <div>
        <div>
            <div>
                <div>
                    <h2 align="center">Customer Login Accounts</h2>
                    <button><a href="adminopen.php" class="button">Back</a></button>
                </div>
                <div>
                    <table border=2px align="center">
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Created at</th>
                        
                        </tr>
                        <tr>
                        <?php
                        while($row = mysqli_fetch_assoc($result))
                        {
                        ?>
                            <td><?php echo $row['id']; ?></td>
                            <td><?php echo $row['email']; ?></td>
                            <td><?php echo $row['created_at']; ?></td>
                        </tr>
                            <?php
                         }
                         ?>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>
</html>