function order(){
  window.alert("Thank You For Ordering on DrapeDreamz!!.\n\nYour Order Have Been Succesfully Placed.\n\nIt will be Delivered in 3-4 Buisness Days.\n\nTracking Details will be sent to u via sms.")
}


// Function to allow only characters (letters) in a text box
function onlyCharacters(event) {
  var input = event.key;
  var regex = /^[a-zA-Z ]+$/; // Only allows letters (uppercase and lowercase)

  if (!regex.test(input)) {
      event.preventDefault();
  }
}
// Function to allow only phone numbers in a text box
function onlyPhoneNumber(event) {
  var input = event.key;
  // Regular expression for common phone number formats
  var regex = /^[0-9()+\- ]+$/;
  if (!regex.test(input)) {
      event.preventDefault();
  }
}
function addslashes(event){
  var input = event.key;
  // Regular expression for common phone number formats
  var regex = /^[/0-9()+\- ]+$/;
  if (!regex.test(input)) {
      event.preventDefault();
  }
}

function validateUpiId() {
    var upiId = document.getElementById("upiId").value;
    var upiIdRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]/;

    if (upiIdRegex.test(upiId)) {
        alert("UPI ID is valid proceed for payment!!!");
        // Proceed with your logic here, such as submitting the form or triggering another action
    } else {
        alert("UPI ID is invalid check and retry again!!!");
    }
}

function validateCardNumber() {
  var cardNumber = document.getElementById("cardNumber").value;
  var cardNumberRegex = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;

  if (cardNumberRegex.test(cardNumber)) {
      alert("Card number is valid!");
      // Proceed with your logic here, such as submitting the form or triggering another action
  } else {
      alert("Invalid card number! Please enter a valid card number.");
  }
}

function checkMain(){
  if(document.getElementById('mandfield').value== ""){
    return false;
  }
  else{
    alert('Your order has been sucessfully placed');
  }
}
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Shirts",
    colors: [
      {
       
        code: "brown",
        img: "./img/SHIRTS/shirt1.jpg",
        pprice:"Rs.799",
        desc: "This is a multicolor shirt wearing this gives you confidence and improves your style quotient.",
        
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "black",
        img: "./img/SHIRTS/shirt2.jpg",
        pprice:"Rs.699",
        desc: "This is plain black shirt with minimal chrome design on shoulders can be used as both casual and party wear.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "blue",
        img: "./img/SHIRTS/shirts3.avif",
        pprice:"Rs.849",
        desc: "This is a blue white strap checks formal shirt can be paired up with formal and casual pants.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",

      },
      {
        code: "pink",
        pprice:"Rs.649",
        img: "./img/SHIRTS/shirt4.jpg",
        desc: "This is a formal pink shirt with minimal white checks. Pairing up with light color trousers would give good pastal combination.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "aqua",
        pprice:"Rs.999",
        img: "./img/SHIRTS/shirt5.avif",
        desc: "It is a blue resort shirt theme similar to sea with layers of blue's. This shirt is a goto shirt for resorts and beaches.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
    ],
  },
  {
    id: 2,
    title: "Jeans",
    colors: [
      {
        code: "darkblue",
        pprice:"Rs.1099",
        img: "img/JEANS/jeanm.avif",
        desc: "It is a blue distress jeans for women and is skinny fit with minimal distress on ankle.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
      {
        code: "black",
        pprice:"Rs.899",
        img: "./img/JEANS/jeans2.jpg",
        desc: "It is a black jeans for men and is skinny fit suitable to wear with body fit tshirts.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
      {
        code: "white",
        pprice:"Rs.799",
        img:"./img/JEANS/whitejeans.jpeg",
        desc: "It is white jeans which makes u look unique only few people prefer white jeans u could be the trend setter !!",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
      {
        code: "maroon",
        pprice:"Rs.1199",
        img: "./img/JEANS/jeans4.webp",
        desc: "It is a brown high vest jeans for women with oversize fit ankles. It can be paired up with tshirts and crop tops.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
      {
        code: "lightblue",
        pprice:"Rs.999",
        img: "./img/JEANS/jeans5.jpg",
        desc: "It is a skyblue jeans for men which comes with jogger ankle with ankle support.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
    ],
  },
  {
    id: 3,
    title: "Tshirt",
    colors: [
      {
        code: "black",
        pprice:"Rs.599",
        img: "./img/T-SHIRT/tshirtcover.jpg",
        desc: "It is a black oversized Tshirt with skull snake Backprint on it.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "bisque",
        pprice:"Rs.499",
        img: "./img/T-SHIRT/tshirt2.jpg",
        desc: "It is a beige oversized Tshirt with minimal text print towards right.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "blue",
        pprice:"Rs.799",
        img: "./img/T-SHIRT/tshirt3.webp",
        desc: "It is a blue regular fit plain Tshirt which comes with a matching beanie. ",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "yellow",
        pprice:"Rs.499",
        img: "./img/T-SHIRT/tshirt4.jpg",
        desc: "It is a plain yellow regular fit polo Tshirt. Can be paired up with formal for semi formal look and can be paired up with jeans for casual look.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "white",
        pprice:"Rs.599",
        img: "./img/T-SHIRT/tshirt5.webp",
        desc: "It is a white oversized Tshirt with panda sticker print on front.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
    ],
  },
  {
    id: 4,
    title: "Lehenga",
    colors: [
      {
        code: "pink",
        pprice:"Rs.3999",
        img:"./img/LEHENGA/le1.jpg",
        desc: "It is a pink and white Embroidary Lehenga.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },

      {
        code: "red",
        pprice:"Rs.2999",
        img: "./img/LEHENGA/l2.jpg",
        desc: "It is a pure red monochrome Lehenga.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "darkgreen",
        pprice:"Rs.4999",
        img: "./img/LEHENGA/l3.jpg",
        desc: "It is a Dark Green with gold combination Silk Lehenga.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "black",
        pprice:"Rs.1999",
        img: "./img/LEHENGA/l4.jpg",
        desc: "It is a pink and white Embroidary Lehenga.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "aqua",
        pprice:"Rs.1499",
        img: "./img/LEHENGA/l5.jpg",
        desc: "It is a pink and white Embroidary Lehenga.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },

    ],
  },
  {
    id: 5,
    title: "Trousers",
    colors: [
      {
        code: "black",
        pprice:"Rs.1199",
        img: "img/TROUSERS/tmain.jpeg",
        desc: "It is a black formal Trouser can be paired up with formal shoes.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
      {
        code: "lightblue",
        pprice:"Rs.999",
        img: "./img/TROUSERS/t2.webp",
        desc: "It is a light blue formal Trouser can be paired up with formal shoes.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
      {
        code: "brown",
        pprice:"Rs.799",
        img: "./img/TROUSERS/t3.webp",
        desc: "It is a dark brown formal Trouser can be paired up with formal shoes.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
      {
        code: "white",
        pprice:"Rs.899",
        img: "./img/TROUSERS/t4.jpg",
        desc: "It is a cream color jogger fit trouser material pants.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
      {
        code: "grey",
        pprice:"Rs.699",
        img: "./img/TROUSERS/t5.avif",
        desc: "It is a grey formal skinny fit trousers can be paired up with formal shoes.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
    ],
  },
  {
    id: 6,
    title: "Salwar",
    colors: [
      {
        code: "green",
        pprice:"Rs.1499",
        img: "img/SALWAR/salwarmain.jpg",
        desc: "It is a green white combination Salwar.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "blue",
        pprice:"Rs.1099",
        img: "./img/SALWAR/salwar2.webp",
        desc: "It is a blue grey salwar with white patterns on it.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "black",
        pprice:"Rs.899",
        img: "./img/SALWAR/salwar3.webp",
        desc: "It is a plain black pink combination salwar.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "yellow",
        pprice:"Rs.799",
        img: "./img/SALWAR/salwar4.jpg",
        desc: "It is a complete yellow salwar set with red patterns on it.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "pink",
        pprice:"Rs.999",
        img: "./img/SALWAR/salwar5.jpeg",
        desc: "It is a pink grey salwar set with cream patterns on it.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
    ],
  },
  {
    id: 7,
    title: "Short Pants",
    colors: [
      {
        code: "black",
        pprice:"Rs.499",
        img: "img/SHORT PANTS/shorts.jpg",
        desc: "It is a plain black denim short pants.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
      {
        code: "white",
        pprice:"Rs.399",
        img:"./img/SHORT PANTS/short2.jpg",
        desc: "It is a plain white denim short pants.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
      {
        code: "brown",
        pprice:"Rs.349",
        img: "./img/SHORT PANTS/short3.jpg",
        desc: "It is a plain brown denim short pants.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
      {
        code: "lightgreen",
        pprice:"Rs.449",
        img: "./img/SHORT PANTS/short4.jpg",
        desc: "it is a light green double pocket short pants.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
      {
        code: "grey",
        pprice:"Rs.499",
        img: "./img/SHORT PANTS/short5.avif",
        desc: "It is a dark grey double pocket short pants.",
        s1:"26",
        s2:"28",
        s3:"30",
        s4:"32",
        s5:"34",
      },
    ],
  },
  {
    id: 8,
    title: "Accesories",
    colors: [
      {
        code: "gold",
        pprice:"Rs.299",
        img: "img/ACCESSORIES/pendantsjpg.png",
        desc: "It is a golden pendant Heart shape necklace.",
        s1:"16''",
        s2:"18''",
        s3:"20''",
        s4:"22''",
        s5:"24''",
      },
      {
        code: "skyblue",
        pprice:"Rs.499",
        img: "./img/ACCESSORIES/a2.jpg",
        desc: "It is a skyblue black aviator sunglasses.",
        s1:"108mm",
        s2:"117mm",
        s3:"124mm",
        s4:"135mm",
        s5:"140mm",
      },
      {
        code: "black",
        pprice:"Rs.799",
        img: "./img/ACCESSORIES/a4.webp",
        desc: "It is a black leather body bag. It is present trend setter it is a unisex product.",
        s1:"22cm",
        s2:"28cm",
        s3:"32cm",
        s4:"38cm",
        s5:"42cm",
      },
      {
        code: "white",
        pprice:"Rs.299",
        img: "./img/ACCESSORIES/a5.webp",
        desc: "It is a chrome pendant necklace for men with a dollor and chain.",
        s1:"16''",
        s2:"18''",
        s3:"20''",
        s4:"22''",
        s5:"24''",
      },
      {
        code: "black",
        pprice:"Rs.699",
        img:"./img/ACCESSORIES/a1.avif",
        desc: "It is a black rectangle shaped sunglasses.",
        s1:"108mm",
        s2:"117mm",
        s3:"124mm",
        s4:"135mm",
        s5:"140mm",
      },
    ],
  },
  {
    id: 9,
    title: "Tank Tops",
    colors: [
      {
        code: "blue",
        pprice:"Rs.399",
        img: "img/TANK TOPS/tanktopmain.webp",
        desc: "It is black and blue striped tank top.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "black",
        pprice:"Rs.449",
        img: "img/TANK TOPS/t2.avif",
        desc: "It is a black tank top with pocket design.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "pink",
        pprice:"Rs.349",
        img: "img/TANK TOPS/t3.webp",
        desc: "It is a pink tank top with pocket design.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "red",
        pprice:"Rs.699",
        img: "img/TANK TOPS/t4.avif",
        desc: "It is a red tank top with adidas logo on middle.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
      {
        code: "white",
        pprice:"Rs.499",
        img: "img/TANK TOPS/ta5.webp",
        desc: "It is a white tank top with skull backprint on it.",
        s1:"S",
        s2:"M",
        s3:"L",
        s4:"XL",
        s5:"XXL",
      },
    ],
  },
  {
    id: 10,
    title: "Shoes",
    colors: [
      {
        code: "red",
        pprice:"Rs.4999",
        img: "img/SHOES/shoes1.jpg",
        desc: "It is red and white combination Nike Air Jordan Sneakers.",
        s1:"UK 7",
        s2:"UK 8",
        s3:"UK 9",
        s4:"UK 10",
        s5:"UK 11",
      },
      {
        code: "blue",
        pprice:"Rs.4499",
        img: "./img/SHOES/shoes2.webp",
        desc: "It is blue and white combination Nike Air Jordan Sneakers.",
        s1:"UK 7",
        s2:"UK 8",
        s3:"UK 9",
        s4:"UK 10",
        s5:"UK 11",
      },
      {
        code: "black",
        pprice:"Rs.3499",
        img: "./img/SHOES/shoes3.webp",
        desc: "It is black and white combination Nike Air Jordan Sneakers.",
        s1:"UK 7",
        s2:"UK 8",
        s3:"UK 9",
        s4:"UK 10",
        s5:"UK 11",
      },
      {
        code: "white",
        pprice:"Rs.3999",
        img: "./img/SHOES/shoes4.jpg",
        desc: "It is a white and red combination New Balance Sneakers.",
        s1:"UK 7",
        s2:"UK 8",
        s3:"UK 9",
        s4:"UK 10",
        s5:"UK 11",
      },
      {
        code: "yellow",
        pprice:"Rs.2999",
        img: "./img/SHOES/shoes5.jpeg",
        desc: "It is a faded yellow combination Nike Sneakers.",
        s1:"UK 7",
        s2:"UK 8",
        s3:"UK 9",
        s4:"UK 10",
        s5:"UK 11",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll("#size1,#size2,#size3,#size4,#size5");
const pdesc= document.getElementById("description");
const proprice=document.getElementById("pricep");
const prosize1=document.getElementById("size1");
const prosize2=document.getElementById("size2");
const prosize3=document.getElementById("size3");
const prosize4=document.getElementById("size4");
const prosize5=document.getElementById("size5");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;

    });
  });
});

//to change colors based on user click
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    pdesc.textContent = choosenProduct.colors[index].desc;
    currentProductImg.src = choosenProduct.colors[index].img;
    proprice.textContent = choosenProduct.colors[index].pprice;
    prosize1.textContent = choosenProduct.colors[index].s1;
    prosize2.textContent = choosenProduct.colors[index].s2;
    prosize3.textContent = choosenProduct.colors[index].s3;
    prosize4.textContent = choosenProduct.colors[index].s4;
    prosize5.textContent = choosenProduct.colors[index].s5;
  });
});

//product sizes
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});




//payment button in buy now
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


