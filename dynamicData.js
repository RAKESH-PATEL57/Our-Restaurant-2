// front page dishes
"use strict"
import introDishes from "./dishes/introFood.json" with {type: 'json'};

// console.log(introDishes);
let introDishesContainer = document.querySelector('.intro-dishes-container');

const addCartDataToHTML = () => {
    
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

addCartDataToHTML();



function imageLink(product)
{
    let link = ((product.image).toString()).slice(1);

    return link;
}



// cart section [[  start  ]]

let cartContent = document.querySelector(".cart-content");
let cartQuantityInd = document.querySelector(".cartQuantityInd");
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
    addCartMemory();  // for saving the data in our browser;
}   

const addCartMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
}

if(localStorage.getItem('cart')) {
    carts = JSON.parse(localStorage.getItem('cart'));
    displayDataInCart();
} 

function displayDataInCart()
{
    cartContent.innerHTML = '';
    let totalQuantity = 0;
    if(carts.length > 0)
    {
        carts.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('cart-foods');
            newCart.dataset.id = cart.product_id;
            let positionProduct = introDishes.findIndex((value) => value.id == cart.product_id);
            let info = introDishes[positionProduct];
            newCart.innerHTML = `
            <div class="cart-food-details">
                <img class="cart-food-image" src="${info.image}" alt="">
                <h2 class="cart-food-name">${info.dishName}</h2>
                <p class="cart-food-price">${info.price * cart.quantity}</p>
            </div>
            <div class="food-quantity">
                <p class="dec-quantity quantity minus">-</p>
                <span class="cart-food-num">${cart.quantity}</span>
                <p class="inc-quantity quantity plus">+</p>
            </div>`;
            cartContent.appendChild(newCart);
        })
    }

    cartQuantityInd.innerText = totalQuantity;
}

cartContent.addEventListener('click', (event) => {
     let positionClick = event.target;
     if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus'))
     {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')) {
            type = 'plus';
        }

        changeQuantity(product_id, type);
     }
});

const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0)
    {
        switch( type) {
            case 'plus':
            carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
            break;

            default:
            let valueChange = carts[positionItemInCart].quantity - 1;
            if(valueChange > 0){
                carts[positionItemInCart].quantity = valueChange;
            }
            else
            {
                carts.splice(positionItemInCart, 1);
            }
            break;
        }
    }
    addCartMemory();
    displayDataInCart();
}


