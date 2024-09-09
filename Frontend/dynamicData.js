// front page dishes
"use strict"
import introDishes from "./jsonFiles/introFood.json" with {type: 'json'};
import allDishes from "./jsonFiles/allDishes.json" with {type: 'json'};
import recentReviews from "./jsonFiles/reviews.json" with {type: 'json'};

// console.log(introDishes);
let introDishesContainer = document.querySelector('.intro-dishes-container');
let allDishesContainer = document.querySelector('.dishes-list');

let orderedTotalCartPrice = 0;// (Initial value) // jab user cart kaa saaraa items order karegaa tab waha kaa jo total price hai usko dobara calculate naa karnaa pade isiliye 
let orderedTotalCartDishImageSrc =[];
let orderedTotalCartDishName =[];
let orderedTotalCartDishPrice =[];

function ingradientsList(ingradientsArr)
{
  
    let rk=``;
    for(let i=0;i<ingradientsArr.length;i++)
    {
        rk += `<li>${ingradientsArr[i]}</li>`;
    }
    return rk;
}

const addCartDataToHTML = () => {
    
    introDishesContainer.innerHTML = "";
    allDishesContainer.innerHTML = "";
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
    <p>${product.price}₹</p>
    </div>
    <div class="rating">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star-half-alt"></i>
    </div>
    </div>
    <img src="./Frontend/${imageLink(product)}" alt="chicken">
    <button class="btn targetBtns buyNowBtn">Buy Now</button>
    
    `
    
    introDishesContainer.appendChild(newProduct);
    // introDishesContainer.insertAdjacentHTML("beforeend", newProduct);
     });
    }
    if(allDishes.length > 0)
    {
        allDishes.forEach((product) => {
            let allNewProduct = document.createElement("div");
            allNewProduct.classList.add("dishes-card");
            allNewProduct.dataset.id = product.id;

            allNewProduct.innerHTML = `
            <img src="./Frontend/${imageLink(product)}" alt="">
                    <h1>${product.dishName}</h1>
                    <h1>${product.price}$</h1>
                    <div class="ingradients">
                         <h1>Ingradients</h1>
                         <ol class="ingradientsList">
                             ${ingradientsList(product.ingradients)}
                         </ol>
                    </div>
                    <div class="dishes-card-btns">
                    <div class="dishes-details-cart-btns">
                        <button class="btn viewdetailsBtn">Ingradients</button>
                        <button class="btn addToCartBtn">Add to cart</button>
                    </div>
                    <button class="btn buyNowBtn">Buy Now</button>
                    </div>
            `
            allDishesContainer.appendChild(allNewProduct);
        });
    }
    
}

addCartDataToHTML();

let viewdetailsBtn = document.querySelectorAll(".viewdetailsBtn");
let ingradients = document.querySelectorAll(".ingradients");

// console.log(viewdetailsBtn.length);
viewdetailsBtn.forEach((dishDetails,index) => {
     dishDetails.addEventListener("click", (e) => {
        ingradients[index].classList.toggle("open-close");
           
        if(e.target.innerText == "Ingradients")
        {
            e.target.innerText="Back";
        }
        else
        {
            e.target.innerText = "Ingradients";
        }
       
     })
})



function imageLink(product)
{
    let link = ((product.image).toString()).slice(3);

    return link;
}

// cart section [[  start  ]]

let cartContent = document.querySelector(".cart-content");
let totalPrice = document.querySelector(".total-price");
let cartQuantityInd = document.querySelector(".cartQuantityInd");
let carts = [];

   let addToCartBtn = document.querySelectorAll(".addToCartBtn");
//    console.log(btn.length);

    addToCartBtn.forEach((value,index) => {
        addToCartBtn[index].addEventListener("click", (e) => {
            let product_id = e.target.parentElement.parentElement.parentElement.dataset.id;;
   
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
    let totalCartPrice = 0;
    if(carts.length > 0)
    {
        carts.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
            let positionProduct = allDishes.findIndex((value) => value.id == cart.product_id);
            let info = allDishes[positionProduct];
            
            totalCartPrice = totalCartPrice + (info.price * cart.quantity);
          
            let newCart = document.createElement('div');
            newCart.classList.add('cart-foods');
            newCart.dataset.id = cart.product_id;

            // console.log(info);
      
            let imageSrc = imageLink(info);
            let dishName = info.dishName;
            let dishPrice = info.price * cart.quantity +"₹";
            orderedTotalCartDishImageSrc.push(`./Frontend/${imageSrc}`);  // if user order all dishes from cart then it will helps to get source of all images that are present in cart
            orderedTotalCartDishName.push(dishName); // if user order all dishes from cart then it will helps to get name of all dishes that are present in cart
            orderedTotalCartDishPrice.push(dishPrice); // if user order all dishes from cart then it will helps to get price of each dish present in cart

            newCart.innerHTML = `
            <div class="cart-food-details">
            <img class="cart-food-image" src="./Frontend/${imageSrc}" alt="">
            <h2 class="cart-food-name">${dishName}</h2>
                <p class="cart-food-price">${dishPrice}</p>
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
    totalPrice.innerText = `${totalCartPrice}₹`;
    orderedTotalCartPrice = `${totalCartPrice}₹`;  // jab user cart kaa saaraa items order karegaa tab waha kaa jo total price hai usko dobara calculate naa karnaa pade isiliye
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

// review section   [[[[[[[[[[[      Start     ]]]]]]]]]]]

// let reviewCard = [];   // to-do all reviws store in data base   *************👨‍💻👨‍💻👨‍💻👨‍💻

let userReviewsContainer = document.querySelector(".user-reviews-container");
// console.log(reviews);

// star creating and coloring stars 

function reviewStarsCreating(actualStarNumber)
{    
    let str ="";

    for(let starCount=1;starCount<=5;starCount++)
    {
        if(starCount<=actualStarNumber)
        {
            str += `<i class="fas fa-star rev-col-star"></i>`;
        }
        else
        {
            str += `<i class="fas fa-star"></i>`
        }
    }

    return str; 
}

function showReviews(reviewsAll)
{
    userReviewsContainer.innerHTML = "";
    reviewsAll.forEach((review, i) => {
    const reviewCard = `
    <div class="review-card swiper-slide" role="group" aria-label="NaN / 7" style="width: 268.182px; margin-right: 5px;">
    <div class="user-details-review">
    <div class="left-user-details">
    <img class="review-img" loading="lazy" src="./Frontend/${imageLink(reviewsAll[i])}" alt="review-img" />
    <p class="userName">${reviewsAll[i].name}</p>
    </div>
      <div class="rating_dates">
      <div class="rating">
      ${reviewStarsCreating(reviewsAll[i].stars)}
      </div>
      <p class="dates">${review.date[0].day}-${review.date[0].month}-${review.date[0].year}</p>
      </div>
    </div>
    <div class="user-opinion">
      <textarea name="" id="" cols="30" rows="10" disabled>
      ${reviewsAll[i].feedback}
      </textarea
      >
    </div>
  </div>
    `
    userReviewsContainer.insertAdjacentHTML("beforeend", reviewCard);

});
}

//   <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.4,
    spaceBetween: 5,
    // loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

showReviews(recentReviews);
// 

let filterReview = document.querySelector("#filter-review");
filterReview.addEventListener("change", () => {

    var text = filterReview.options[filterReview.selectedIndex].text;

    // console.log(text);
    
    if(text == "Recent")
    {
        showReviews(recentReviews);
    }

    else if(text == "Positive")
    {
        const posReviewArr = recentReviews.map((a) => {
            return a;
        });
        posReviewArr.sort((a,b) => b.stars - a.stars);
        showReviews(posReviewArr);
    }

    else if(text == "Negative")
    {
     
        const negReviewArr = recentReviews.map((a) => {
            return a;
        });
        negReviewArr.sort((a,b) => a.stars - b.stars);
        showReviews(negReviewArr);
    }
    
});
    
  // reviews.sort((a,b) => {
//     console.log(a.stars, b.stars);
//     console.log( a.stars + b.stars);
//     a.stars + b.stars;
// });  
// console.log(reviews);


// review section   [[[[[[[[[[[       End      ]]]]]]]]]]]


// Dynamically adding data to our json file  [[[[[[[[[[[       End      ]]]]]]]]]]]




// Order Section  [[[[[[[[[[[      Start     ]]]]]]]]]]]
let allBuyNowBtnS = document.querySelectorAll(".buyNowBtn");
let orderSection = document.querySelector(".order");
let orderContainer = document.querySelector(".order-container");

let closeBtnOrderSection= document.querySelector("#close-icon-order-section");

allBuyNowBtnS.forEach((allBuyBtns,index) => {
    
    allBuyBtns.addEventListener("click", (e) => {
       
        
        // console.log(e.target.parentElement);
        let parentdata = e.target.parentElement;
        // const imageLink = (parentdata.children[1].src).toString().slice(1);
        let orderedFoodName = null;
        let OrderedFoodImgLink = null;
        let orderedFoodPrice = null;

        let orderSectionContent = "";

        orderContainer.innerHTML = " ";
        console.log(index);
        
        if(index === 0)
        {
               
            function creatingListForOrderSections()
            {
                let ln = cartContent.childNodes.length;
                console.log(ln);
                
                let listDatas = ``;

                console.log(orderedTotalCartDishImageSrc);
                console.log(orderedTotalCartDishName);
                console.log(orderedTotalCartDishPrice);

                for(let i=0; i<ln; i++)
                {
                   listDatas += ` <li class="order-cart-list">
                            <img src="${orderedTotalCartDishImageSrc[i]}" alt="order-cart-img">
                            <h1>${orderedTotalCartDishName[i]}</h1>
                            <h1>${orderedTotalCartDishPrice[i]}</h1>
                            </li>`
                }

                orderedTotalCartDishImageSrc= [];
                orderedTotalCartDishName = [];
                orderedTotalCartDishPrice = [];

                return listDatas;
              
            }

            orderSectionContent = `
             <div class="cart-all-container">
            <h1 class="heading">Ordering Items</h1>
          <ul class="cart-all-order">
             ${creatingListForOrderSections()}
          </ul>
          <div class="order-cart-price">
            <h1>Total Price :- <span class="order-total-price">${orderedTotalCartPrice}</span></h1>
          </div>
        </div>
            `
        }
        else if(index < 4)
        {
            orderedFoodName = parentdata.children[0].children[0].children[0].innerText;
            OrderedFoodImgLink = parentdata.children[1].src;
            orderedFoodPrice = parentdata.children[0].children[0].children[1].innerText; 

            orderSectionContent = `
          <div class="order-left-container">
            <h1>Food Name:- <span class="ordered-foodName">${orderedFoodName}</span></h1>
            <img class="ordered-food-Img" src="${OrderedFoodImgLink}" alt="ordered-food-Img">
            <h1>Food Price:- <span class="ordered-foodPrice">${orderedFoodPrice}</span></h1>
          </div>
        `
        }
        else
        {
            orderedFoodName = parentdata.parentElement.children[1].innerText;
            OrderedFoodImgLink = parentdata.parentElement.children[0].src;
            orderedFoodPrice = parentdata.parentElement.children[2].innerText;

            orderSectionContent = `
            <div class="order-left-container">
              <h1>Food Name:- <span class="ordered-foodName">${orderedFoodName}</span></h1>
              <img class="ordered-food-Img" src="${OrderedFoodImgLink}" alt="ordered-food-Img">
              <h1>Food Price:- <span class="ordered-foodPrice">${orderedFoodPrice}</span></h1>
            </div>
          `
        }

    const formContent = `
     <form action="#" class="order-form">
              <div class="user-deatils">
                <div class="order-input">
                  <label for="">Your Name</label>
                  <input type="text" required>
              </div>
              <div class="order-input">
                <label for="">Your Email</label>
                <input type="email" required>
              </div>
              <div class="order-input">
                <label for="">Phone Number</label>
                <input type="number" required>
              </div>
              <textarea name="" id="" placeholder="Enter Your Address"></textarea>
              <button class="btn" type="submit">Order Now</button>
              </div>
            </form>
    `
    
    orderContainer.insertAdjacentHTML("afterbegin",orderSectionContent);
    orderContainer.insertAdjacentHTML("beforeend",formContent);

        orderSection.classList.add("active");
    });
});

closeBtnOrderSection.addEventListener("click", () => {
    orderSection.classList.remove("active");
})

// Order Section  [[[[[[[[[[[       End      ]]]]]]]]]]]

