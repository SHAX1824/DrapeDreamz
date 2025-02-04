<?php
session_start();
if (!isset($_SESSION["user"])) {
   header("Location: adminopen.php");
}
?>
<span style="font-family: verdana, geneva, sans-serif;">
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="styleadmin.css" />
  <!-- Font Awesome Cdn Link -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
</head>
<body>
  <header class="header">
    <div class="logo">
      <a href="#"></a>Admin Dashboard</a>
 
    </div>
<div class="move">
    <div class="header-icons">
      <div class="account">
        </div>
      </div>
    </div>
    <button><a href="adminlogout.php">Logout</a></button>
  </header>
  <div class="container">
    <nav>
      <div class="side_navbar">
        <span>Main Menu</span>
        <a href="adminopen.php" class="active">Dashboard</a>
        <a href="orders.php">Orders</a>
        <a href="items.php">Items</a>
        <a href="Sizesent.php">Sizes</a>
        <a href="logent.php">Users</a>
        <a href="subscribers.php">Subscribers</a>
      </div>
    </nav>

    <div class="main-body">
      <h2>Dashboard</h2>
      <div class="promo_card">
        <h1>Welcome Admin</h1>
        <span>Total orders Details are</span>
        <a href="orders.php">
                    <button>Know More</button>
                </a>
      </div>

      <div class="history_lists">
        <div class="list1">
          <div class="row">
            <h4>History</h4>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Dates</th>
                <th>Name</th>
                <th>Product</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2, Jan, 2023</td>
                <td>Santhosh Kumar</td>
                <td>Shirt</td>
                <td><i class="fa-solid fa-indian-rupee-sign"> 799</td>
              </tr>
              <tr>
                <td>2</td>
                <td>29, March, 2024</td>
                <td>Vijayalakshmi S H</td>
                <td>Lehenga</td>
                <td><i class="fa-solid fa-indian-rupee-sign"> 4999</td>
              </tr>
              <tr>
                <td>3</td>
                <td>31, March, 2024</td>
                <td>Nagashree K R</td>
                <td>Salwar</td>
                <td><i class="fa-solid fa-indian-rupee-sign"> 1499</td>
              </tr>
              <tr>
                <td>4</td>
                <td>2, April, 2024</td>
                <td>J Rahul</td>
                <td>T Shirt</td>
                <td><i class="fa-solid fa-indian-rupee-sign"> 599</td>
              </tr>
              <tr>
                <td>5</td>
                <td>18, April, 2024</td>
                <td>Sumanth</td>
                <td>Accesories</td>
                <td><i class="fa-solid fa-indian-rupee-sign"> 699</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="list2">
          <div class="row">
            <h4>Stock History</h4>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Color</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Shirt</td>
                <td>Black</td>
                <td>10</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Salwar</td>
                <td>Green</td>
                <td>05</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Accesories</td>
                <td>Sunglass</td>
                <td>15</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Tank Top</td>
                <td>Biege</td>
                <td>05</td>
              </tr> 
              <tr>
                <td>5</td>
                <td>Trousers</td>
                <td>Grey</td>
                <td>20</td>
              </tr> 
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="sidebar">
      <h4>Total Sales</h4>
      


     

      <div class="balance">
        <i class="fa-solid fa-indian-rupee-sign icon"></i>
        <div class="info">
          <h5>INR GLOBAL</h5>
          <span><i class="fa-solid fa-indian-rupee-sign"></i>1,20,000</span>
        </div>
      </div>
      <div class="balance">
        <i class="fa-solid fa-indian-rupee-sign icon"></i>
        <div class="info">
          <h5>Bengaluru</h5>
          <span><i class="fa-solid fa-indian-rupee-sign"></i>40,000</span>
        </div>
      </div>
      <div class="balance">
        <i class="fa-solid fa-indian-rupee-sign icon"></i>
        <div class="info">
          <h5>Chennai</h5>
          <span><i class="fa-solid fa-indian-rupee-sign"></i>20,000</span>
        </div>
      </div>
      <div class="balance">
        <i class="fa-solid fa-indian-rupee-sign icon"></i>
        <div class="info">
          <h5>Hyderabad</h5>
          <span><i class="fa-solid fa-indian-rupee-sign"></i>30,000</span>
        </div>
      </div>
      <div class="balance">
        <i class="fa-solid fa-indian-rupee-sign icon"></i>
        <div class="info">
          <h5>Mumbai</h5>
          <span><i class="fa-solid fa-indian-rupee-sign"></i>30,000</span>
        </div>
      </div>
      
      

     

    </div>
  </div>
</body>
</html>
</span>