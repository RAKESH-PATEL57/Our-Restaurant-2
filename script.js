// cart section [[[  start   ]]]
let cartFoods = document.querySelectorAll(".cart-foods");
let decQuantity = document.querySelectorAll(".dec-quantity");
let incQuantity = document.querySelectorAll(".inc-quantity");
let cartFoodPrice = document.querySelectorAll(".cart-food-price");
let cartFoodNum = document.querySelectorAll(".cart-food-num");
let totalPrice = document.querySelector(".total-price");

// calculationg total money according to food items present in cart 
let totalMoneyInCart = 0;
var cartfoodInitialPrice = Number(cartFoodPrice[0].innerText);

function updateCartTotalPrice()
{ 
    totalMoneyInCart = 0 ;
    cartFoodPrice.forEach((index, value) => {
        totalMoneyInCart += Number(cartFoodPrice[value].innerText);
        // console.log(totalMoneyInCart);
    });
    
    var totalCartFoodPrice = totalMoneyInCart;
    totalPrice.innerHTML = totalCartFoodPrice;
}

updateCartTotalPrice();

var currentPrice = 0;

var quantity = 0;

function removeFoodfromCart(i)
{
     cartFoods[i].style.display = 'none';
}

function quantityIncrement(quantity,i)
{
    quantity = Number(cartFoodNum[i].innerText);
    quantity = quantity + 1;
    cartFoodNum[i].innerHTML = quantity;  // quantity incresed

    cartFoodPrice[i].innerText = cartfoodInitialPrice * quantity;
    // console.log(quantity);
    updateCartTotalPrice();
   
}

function quantityDecrement(quantity,i)
{
    quantity = Number(cartFoodNum[i].innerText);
    quantity = quantity - 1;

    // console.log(quantity);
    if(quantity == 0)
    {
        removeFoodfromCart(i);
    }

    else
    {
        cartFoodNum[i].innerHTML = quantity;  // quantity decresed

        cartFoodPrice[i].innerText = cartfoodInitialPrice * quantity;
        updateCartTotalPrice();
    }
}

for(let i=0;i<cartFoods.length;i++)
{
  
    decQuantity[i].addEventListener('click', () => {
        quantityDecrement(quantity,i);
    });

    incQuantity[i].addEventListener('click', () => {
        quantityIncrement(quantity,i);
    });
}

// cart section [[[   end    ]]]