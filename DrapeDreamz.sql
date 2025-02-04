-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2018 at 11:47 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: drapedreamz
--

-- --------------------------------------------------------

--
-- Table structure for table items
--


CREATE TABLE subscribers (
  id int(11) NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;







 CREATE TABLE sizes (
   id int(40) NOT NULL,
    sizes varchar(255) NOT NULL
 ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --
-- -- Dumping data for table items
-- --

 INSERT INTO sizes (id,sizes) VALUES
 (1, 'S'),
 (2, 'M'),
 (3, 'L'),
 (4, 'XL'),
 (5, 'XXL'),
 (6, 28),
 (7, 30),
 (8, 32),
 (9, 34),
 (10, 36),
(11, 'U'),
 (12, 'UK7'),
 (13, 'UK8'),
 (14, 'UK9'),
 (15, 'UK10'),
(16, 'UK11');





CREATE TABLE items (
  id int(40) NOT NULL,
  name varchar(255) NOT NULL,
  price int(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--
-- Dumping data for table items
--

INSERT INTO items (id, name, price) VALUES
(1, 'Tribal Print Shirt', 799),
(2, 'Vertical Stripe Shirt', 899),
(3, 'Pink Formal Shirt',649),
(4, 'Aqua Resort Shirt', 999),
(5, 'Distress Jeans', 1099),
(6, 'Skyblue Joggers', 1499),
(7, 'Black Jeans', 749),
(8, 'High Vest Jeans', 1199),
(9, 'Backprint Tshirt', 599),
(10, 'Oversize Tshirt', 599),
(11, 'Washed Pink Tshirt', 899),
(12, 'Relax Fit Tshirt', 699),
(13, 'Dark Pink Lehenga', 3999),
(14, 'Red Lehenga', 2999),
(15, 'Black Lehenga', 1999),
(16, 'Green Lehenga', 4999),
(17, 'Black Trouser', 1199),
(18, 'Grey Trouser', 999),
(19, 'White Trouser', 899),
(20, 'Multi Color Trouser', 999),
(21, 'Green White Salwar', 1499),
(22, 'Blue Grey Salwar', 1099),
(23, 'Black Pink Salwar', 899),
(24, 'Red Salwar', 1499),
(25, 'Black Denim Shorts', 399),
(26, 'White Denim Shorts', 399),
(27, 'Brown Denim Shorts', 349),
(28, 'Green Denim Shorts', 449),
(29, 'Golden Pendant', 299),
(30, 'Aviator Shades', 499),
(31, 'Black Body Bag', 799),
(32, 'Pendant Necklace', 299),
(33, 'Black Blue Tank Top', 399),
(34, 'Black Tank Top', 449),
(35, 'Pink Tank Top', 899),
(36, 'Red Blue Tank Top', 899),
(37, 'Red White Sneakers', 4999),
(38, 'Blue White Sneakers', 4499),
(39, 'Faded Yellow White Sneakers', 2999),
(40, 'Orange Taped Lows', 2499);

-- --------------------------------------------------------

--
-- Table structure for table users
--

CREATE TABLE users (
  id int(40) NOT NULL,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  contact varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  address varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table users
--

INSERT INTO users (id, name, email, password, contact, city, address) VALUES
(1, 'shax', 'shax @gmail.com', '14e1b600b1fd579f47433b88e8d85291', '6263056779', 'bhilai', '25 commercial complex, nehru nagar,east near vijya bank, bhilai C.G.'),
(2,'SHASHANK M ARADHYA','shashankmaradhya@gmail.com','14e1b600b1fd579f47433b88e8d85291','6360761060','Anekal town','3rd Cross Narayanappa Layout');

-- --------------------------------------------------------

--
-- Table structure for table users_items
--

CREATE TABLE users_items (
  id int(40) NOT NULL,
  user_id int(40) NOT NULL,
  item_id int(40) NOT NULL,
  status enum('Added to cart','Confirmed') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table users_items
--

INSERT INTO users_items (id, user_id, item_id, status) VALUES
(7, 3, 3, 'Added to cart'),
(8, 3, 4, 'Added to cart'),
(9, 3, 5, 'Added to cart'),
(10, 3, 11, 'Added to cart'),
(11, 1, 9, 'Added to cart'),
(12, 1, 2, 'Added to cart'),
(13, 1, 8, 'Added to cart'),
(14, 4, 2, 'Confirmed'),
(18, 5, 11, 'Added to cart'),
(20, 5, 5, 'Added to cart');

--
-- Indexes for dumped tables
--

--
-- Indexes for table items
--
ALTER TABLE items
  ADD PRIMARY KEY (id);

--
-- Indexes for table users
--
ALTER TABLE users
  ADD PRIMARY KEY (id);

--
-- Indexes for table users_items
--
ALTER TABLE users_items
  ADD PRIMARY KEY (id),
  ADD KEY user_id (user_id,item_id),
  ADD KEY item_id (item_id);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table items
--
ALTER TABLE items
  MODIFY id int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table users
--
ALTER TABLE users
  MODIFY id int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table users_items
--
ALTER TABLE users_items
  MODIFY id int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table users_items
--
ALTER TABLE users_items
  ADD CONSTRAINT users_items_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (id),
  ADD CONSTRAINT users_items_ibfk_2 FOREIGN KEY (item_id) REFERENCES items (id);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;