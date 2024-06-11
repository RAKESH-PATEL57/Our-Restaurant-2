// front page dishes
"use strict"
import introDishes from "./dishes/introFood.json" with {type: 'json'};

console.log(introDishes);


for(let i=0;i<3;i++)
{
    console.log(name);
}

let introDishesContainer = document.querySelector('.intro-dishes-container');

const addDataToHTML = () => {
    
    introDishesContainer.innerHTML = "";
    if(introDishes.length > 0)
    {
        introDishes.forEach((product) =>{
        let newProduct = document.createElement('div');
        newProduct.classList.add('intro-dishes-card');
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = `
    <div class="content">
    <div class="dish-details">
    <h1>${product.dishName}</h1>
    <p>${product.price}</p>
    </div>
    <div class="rating">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star-half-alt"></i>
    </div>
    </div>
    <img src="${imageLink(product)}" alt="chicken">
    <button class="btn">Add to Cart</button>
    
    `
    
    introDishesContainer.appendChild(newProduct);
    // introDishesContainer.insertAdjacentHTML("beforeend", newProduct);
});
}
    
}

addDataToHTML();



function imageLink(product)
{
    let link = ((product.image).toString()).slice(1);

    return link;
}



// cart section [[  start  ]]

let cartContent = document.querySelector(".cart-content");
let carts = [];

   let btn = document.querySelectorAll(".btn");

   btn.forEach((value,index) => {
       btn[index].addEventListener("click", (e) => {
        let product_id = e.target.parentElement.dataset.id;
        addToCart(product_id);
    });
   });

const addToCart = (product_id) => {
    let poitionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);  // if the dish is not present in cart it will return -1
    if(carts.length <=0 )
    {
        carts = [{
            product_id : product_id,
            quantity: 1
        }]
    }
    else if(poitionThisProductInCart < 0)
    {
        carts.push({
            product_id : product_id,
            quantity: 1
        })
    }
    else
    {
        carts[poitionThisProductInCart].quantity = carts[poitionThisProductInCart].quantity + 1;
    }
    displayDataInCart();
}   


function displayDataInCart()
{
    cartContent.innerHTML = '';
    if(carts.length > 0)
    {
        carts.forEach(cart => {
            let newCart = document.createElement('div');
            newCart.classList.add('cart-foods');
            let positionProduct = introDishes.findIndex((value) => value.id == cart.product_id);
            let info = introDishes[positionProduct];
            newCart.innerHTML = `
            <div class="cart-food-details">
                <img class="cart-food-image" src="${info.image}" alt="">
                <h2 class="cart-food-name">${info.dishName}</h2>
                <p class="cart-food-price">${info.price}</p>
            </div>
            <div class="food-quantity">
                <p class="dec-quantity quantity">-</p>
                <p class="cart-food-num">1</p>
                <p class="inc-quantity quantity">+</p>
            </div>`;
            cartContent.appendChild(newCart);
        })
    }
}
//    btn[0].addEventListener("click", (e) => {
//     // console.log(e.target.parentElement.style.border=);
//     e.target.parentElement.style.border= "2px solid aqua";
// });

// cart section [[  end  ]]
//    console.log(btn.parentElement);

