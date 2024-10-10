const login_buttons = document.querySelector(".loginbtns");
const CartIcon = document.querySelector(".cartComponent");
const CartLength = document.querySelector(".cart-length");

let userData = {
  defaultValue: false,
};
// Load products from localStorage if available
if (localStorage.getItem("user")) {
  userData = JSON.parse(localStorage.getItem("user"));
}
window.onload = () => {
  if (userData.defaultValue == false) {
    location.href = "index.html";
    login_buttons.innerHTML = ` <a class="LinkNoMargin" href="#"> Login </a>
            <a class="LinkNoMargin" to="register"> Register </a>`;
  } else {
    login_buttons.innerHTML = `<a class="LinkNoMargin" href="#Wellcome">${userData.Email}</a> 
     <button onclick="HandleLogOut()" class="logout-btn btn btn-danger " id="logout-btn">Logout <i class="bi bi-box-arrow-right"></i></button>`;
  }
};

// handle logout button
function HandleLogOut() {
  localStorage.setItem("user", JSON.stringify([]));
  location.href = "index.html";
}

const Allproducts = [
  {
    id: "1",
    images: "./img/product_01.png",
    title: "Real Madrid shirt",
    price: 120,
    cat_prefix: "Sports",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "2",
    images: "./img/product_02.png",
    title: "men's shoes",
    price: 300,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "20%",
  },
  {
    id: "3",
    images: "./img/product_03.png",
    title: "Vacuum Cleaner ",
    price: 3500,
    cat_prefix: "electricmachines",
    Quantity: 1,
    max: 3,
    discount: "10%",
  },

  {
    id: "4",
    images: "./img/product_04.png",
    title: " Mobile",
    price: 5400,
    cat_prefix: "Accessoriesdevices",
    Quantity: 1,
    max: 3,
    discount: "30%",
  },
  {
    id: "5",
    images: "./img/product_05.png",
    title: " Fully automatic",
    price: 8000,
    cat_prefix: "electricmachines",
    Quantity: 1,
    max: 3,
    discount: "7%",
  },
  {
    id: "6",
    images: "./img/product_06.png",
    title: "Football ",
    price: 120,
    cat_prefix: "Sports",
    Quantity: 1,
    max: 3,
    discount: "10%",
  },
  {
    id: "7",
    images: "./img/product_07.png",
    title: "polo shirt",
    price: 100,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "21%",
  },
  {
    id: "8",
    images: "./img/product_08.png",
    title: "generating",
    price: 6000,
    cat_prefix: "electricmachines",
    Quantity: 1,
    max: 3,
    discount: "13%",
  },
  {
    id: "9",
    images: "./img/product_09.png",
    title: " set of clothes ",
    price: 1500,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "10%",
  },
  {
    id: "10",
    images: "./img/product_10.png",
    title: " Dress Soiree ",
    price: 2000,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "7%",
  },
  {
    id: "11",
    images: "./img/product_11.png",
    title: "Women's hat ",
    price: 200,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "8%",
  },
  {
    id: "12",
    images: "./img/product_12.png",
    title: " High heels",
    price: 900,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "13",
    images: "./img/product_13.png",
    title: "microwave",
    price: 4000,
    cat_prefix: "electricmachines",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "14",
    images: "./img/product_14.png",
    title: "a fan",
    price: 300,
    cat_prefix: "electricmachines",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "15",
    images: "./img/product_15.png",
    title: " Barcelona T-shirt",
    price: 120,
    cat_prefix: "Sports",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "16",
    images: "./img/product_16.png",
    title: " Brazil T-shirt",
    price: 120,
    cat_prefix: "Sports",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "17",
    images: "./img/product_17.png",
    title: " female bag",
    price: 900,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "18",
    images: "./img/product_18.png",
    title: "Wristwatch",
    price: 350,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "19",
    images: "./img/product_19.png",
    title: "Kochi",
    price: 250,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "20",
    images: "./img/product_20.png",
    title: " Arsenal shirt",
    price: 120,
    cat_prefix: "Sports",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "21",
    images: "./img/product_21.png",
    title: "Dress Soiree ",
    price: 2000,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "22",
    images: "./img/product_22.png",
    title: " men suit",
    price: 1500,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "23",
    images: "./img/product_23.png",
    title: "electric motor ",
    price: 7000,
    cat_prefix: "electricmachines",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "24",
    images: "./img/product_24.png",
    title: " Liverpool T-shirt ",
    price: 120,
    cat_prefix: "Sports",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "25",
    images: "./img/product_25.png",
    title: " Bayern T-shirt",
    price: 120,
    cat_prefix: "Sports",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "26",
    images: "./img/product_26.png",
    title: "Paris T-shirt ",
    price: 120,
    cat_prefix: "Sports",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "27",
    images: "./img/product_27.png",
    title: " Chelsea T-shirt",
    price: 120,
    cat_prefix: "Sports",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "28",
    images: "./img/product_28.png",
    title: "United shirt",
    price: 120,
    cat_prefix: "Sports",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "29",
    images: "./img/product_29.png",
    title: "City T-shirt",
    price: 120,
    cat_prefix: "Sports",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "30",
    images: "./img/product_30.png",
    title: "female bag ",
    price: 900,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "31",
    images: "./img/product_31.png",
    title: " female bag",
    price: 900,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "32",
    images: "./img/product_32.png",
    title: "female bag ",
    price: 900,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "33",
    images: "./img/product_33.png",
    title: "female bag ",
    price: 900,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "34",
    images: "./img/product_34.png",
    title: "Dress Soiree",
    price: 2500,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "35",
    images: "./img/product_35.png",
    title: "set of clothes",
    price: 2000,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "36",
    images: "./img/product_36.png",
    title: " Mobile",
    price: 5400,
    cat_prefix: "Accessoriesdevices",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "37",
    images: "./img/product_37.png",
    title: " Mobile ",
    price: 9000,
    cat_prefix: "Accessoriesdevices",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "38",
    images: "./img/product_38.png",
    title: " Mobile ",
    price: 7500,
    cat_prefix: "Accessoriesdevices",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "39",
    images: "./img/product_39.png",
    title: " Mobile ",
    price: 7500,
    cat_prefix: "Accessoriesdevices",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "40",
    images: "./img/product_40.png",
    title: " Sunglasses ",
    price: 300,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "41",
    images: "./img/product_41.png",
    title: " Shaver ",
    price: 200,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "42",
    images: "./img/product_42.png",
    title: " Wristwatch ",
    price: 100,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "43",
    images: "./img/product_43.png",
    title: " headphone ",
    price: 500,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "44",
    images: "./img/product_44.png",
    title: " Kochi ",
    price: 50,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "45",
    images: "./img/product_45.png",
    title: " Kochi ",
    price: 50,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "46",
    images: "./img/product_46.png",
    title: " Kochi ",
    price: 50,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "47",
    images: "./img/product_47.png",
    title: " boots ",
    price: 200,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "48",
    images: "./img/product_48.png",
    title: " Kochi ",
    price: 50,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "49",
    images: "./img/product_49.png",
    title: " T-shirt ",
    price: 20,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "50",
    images: "./img/product_50.png",
    title: " T-shirt ",
    price: 30,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "51",
    images: "./img/product_51.png",
    title: " T-shirt ",
    price: 30,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "52",
    images: "./img/product_52.png",
    title: " T-shirt ",
    price: 30,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "53",
    images: "./img/product_53.png",
    title: " T-shirt ",
    price: 100,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "54",
    images: "./img/product_54.png",
    title: "chair",
    price: 100,
    cat_prefix: "HomeFurniture",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "55",
    images: "./img/product_55.png",
    title: " chair ",
    price: 100,
    cat_prefix: "HomeFurniture",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "56",
    images: "./img/product_56.png",
    title: "chair ",
    price: 100,
    cat_prefix: "HomeFurniture",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "57",
    images: "./img/product_57.png",
    title: " Bed ",
    price: 300,
    cat_prefix: "HomeFurniture",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "58",
    images: "./img/product_58.png",
    title: "chair ",
    price: 100,
    cat_prefix: "HomeFurniture",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "59",
    images: "./img/product_59.png",
    title: "chair ",
    price: 100,
    cat_prefix: "HomeFurniture",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "60",
    images: "./img/product_60.png",
    title: "chair ",
    price: 150,
    cat_prefix: "HomeFurniture",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "61",
    images: "./img/product_61.png",
    title: "chair ",
    price: 100,
    cat_prefix: "HomeFurniture",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "62",
    images: "./img/product_62.png",
    title: " Wristwatch ",
    price: 80,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "63",
    images: "./img/product_63.png",
    title: " stockings ",
    price: 30,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "64",
    images: "./img/product_64.png",
    title: " Bag ",
    price: 60,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "65",
    images: "./img/product_65.png",
    title: " Cars ",
    price: 600000,
    cat_prefix: "Cars",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "66",
    images: "./img/product_66.png",
    title: " Cars ",
    price: 600000,
    cat_prefix: "Cars",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "67",
    images: "./img/product_67.png",
    title: " Cars ",
    price: 600000,
    cat_prefix: "Cars",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "68",
    images: "./img/product_68.png",
    title: " Cars ",
    price: 600000,
    cat_prefix: "Cars",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "69",
    images: "./img/product_69.png",
    title: " Cars ",
    price: 600000,
    cat_prefix: "Cars",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "70",
    images: "./img/product_70.png",
    title: " Cars ",
    price: 600000,
    cat_prefix: "Cars",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "71",
    images: "./img/product_71.png",
    title: " Cars ",
    price: 600000,
    cat_prefix: "Cars",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "72",
    images: "./img/product_72.png",
    title: " Cars ",
    price: 600000,
    cat_prefix: "Cars",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "73",
    images: "./img/product_73.png",
    title: "Beauty Bursh",
    price: 60,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "74",
    images: "./img/product_74.png",
    title: "Beauty Bursh",
    price: 60,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "75",
    images: "./img/product_75.png",
    title: "Beauty Bursh",
    price: 60,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "76",
    images: "./img/product_76.png",
    title: "Beauty Bursh",
    price: 60,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "77",
    images: "./img/product_77.png",
    title: "Beauty Bursh",
    price: 60,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "78",
    images: "./img/product_78.png",
    title: "Beauty Bursh",
    price: 60,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "79",
    images: "./img/product_79.png",
    title: "Beauty Bursh",
    price: 60,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
  {
    id: "80",
    images: "./img/product_80.png",
    title: "Beauty Bursh",
    price: 60,
    cat_prefix: "FashionandAccessories",
    Quantity: 1,
    max: 3,
    discount: "15%",
  },
];

let cartItems = [];

// Load products from localStorage if available
if (localStorage.getItem("product")) {
  cartItems = JSON.parse(localStorage.getItem("product"));
  CartLength.innerHTML = cartItems.length;
}

//get tasks list from local storage
function GetTasksFromLocalStorage() {
  let Product_Data = window.localStorage.getItem("product");
  if (Product_Data) {
    try {
      let product = JSON.parse(Product_Data);
      cartItems = product;
    } catch (error) {
      console.error("Error parsing local storage:", error);
      // Handle the error, perhaps by initializing TasksArray as empty
    }
  }
}
// run fun GetTasksFromLocalStorage to get task from local storage;
GetTasksFromLocalStorage();

function createProductHTML() {
  const productHTML = Allproducts.map(
    (data) => ` 
                <div class="col-md-3 product-card" data-product-id="${data.id}">  
                    <div class="fav">  
                        <i class="bi bi-heart-fill"></i>  
                        <div class="discount">  
                            discount : ${data.discount}  
                        </div>  
                    </div>  
                    <div class="img-container">  
                        <img src="${data.images}" class="img-fluid" />  
                    </div>  
                    <div class="product-name">${data.title}</div>  
                    <div class="product-rates">  
                        <i class="bi bi-star-fill star"></i>  
                        <i class="bi bi-star-fill star"></i>  
                        <i class="bi bi-star-fill star"></i>  
                        <i class="bi bi-star-fill star"></i>  
                        <i class="bi bi-star-fill star"></i>  
                    </div>  
                    <div class="d-flex justify-content-between align-items-center mt-4">  
                        <div class="product-price">Price : ${data.price}</div>  
                        <div class="add-btn">Add to cart <i class="bi bi-cart4"></i></div>  
                    </div>  
                </div>  
                `
  ).join("");

  // Get the element where you want to add the HTML
  const productList = document.querySelector(".ProdcutItem");
  productList.innerHTML = productHTML;

  // Attach Event Listener for Add to Cart (Event Delegation)
  productList.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-btn")) {
      const parentCard = event.target.closest(".product-card");
      const productId = parentCard.dataset.productId;
      const productData = Allproducts.find(
        (product) => product.id === productId
      );
      let isexist = false;
      cartItems.forEach((p) => {
        if (p.id == productId) {
          isexist = true;
          p.Quantity++;
        }
      });
      if (!isexist) {
        AddItemToCart(productData);
        CartLength.innerHTML = cartItems.length;
      }
      RenderCartItemToBill();
    }
  });
}

function AddItemToCart(data) {
  cartItems.push(data);

  //Add Task to local storage
  AddTaskToLocalStorage(cartItems);
  RenderCartItem();
}

// Add tasks to local storage
function AddTaskToLocalStorage(arr) {
  window.localStorage.setItem("product", JSON.stringify(arr));
}

function RenderCartItem() {
  const Cartproduct = cartItems
    .map(
      (data) => `
                <div class="col-md-12 Product-Card" data-product-id="${data.id}">
                    <div class="col-md-2 card-content">
                    <img src="${data.images}" class=" img-fluid" />
                    </div>
                    <div class="col-md-2 card-content product-name">${data.title}</div>
                    <div class="col-md-2 card-content product-qty">${data.Quantity}</div>
                    <div class="col-md-2 card-content product-price">${data.price}$</div>
                  <div class="col-md-2 card-content product-delete">
                  <i class="bi bi-trash3-fill dlt-btn"></i></div>
                </div>
                `
    )
    .join("");
  // Get the element where you want to add the HTML
  const CartList = document.querySelector(".cartitems");
  CartList.innerHTML = Cartproduct;

  // Attach Event Listener for Add to Cart (Event Delegation)
  CartList.addEventListener("click", (event) => {
    if (event.target.classList.contains("dlt-btn")) {
      // remove task from localStorage
      if (confirm("Are you sure you want to delete this Item?")) {
        HandleDeleteTask(
          event.target.parentElement.parentElement.getAttribute(
            "data-product-id"
          )
        );
        event.target.parentElement.parentElement.remove();
      }
      RenderCartItemToBill();
      CartLength.innerHTML = cartItems.length;
    }
  });
}

function RenderCartItemToBill() {
  const CartItem = cartItems
    .map(
      (data) => `
                <div class="d-flex justify-content-between cart-bill-details" data-product-id="${data.id}">
                        <div class="mt-3">${data.title} x ${data.Quantity}</div>
              <div class="">${data.price}$</div>
                </div>
                `
    )
    .join("");
  // Get the element where you want to add the HTML
  const CartDetails = document.querySelector(".bill-details");
  CartDetails.innerHTML = CartItem;
}

//Handle total price
const TotalBillPrice = () => {
  let total = 0;
  cartItems.map((e) => (total += e.price * e.Quantity));
  return total;
};

const TotalPrice_span = document.querySelector(".totalPrice");
TotalPrice_span.innerHTML = TotalBillPrice() + "$";

//deleteproduct from cart
function HandleDeleteTask(id) {
  // Remove task from TasksArray using filter
  cartItems = cartItems.filter((p) => p.id != id);
  //Add Task to local storage
  AddTaskToLocalStorage(cartItems);
}
createProductHTML();
RenderCartItem();
RenderCartItemToBill();
