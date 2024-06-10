// front page dishes
"use strict"
import introDishes from "./dishes/introFood.json" with {type: 'json'};

console.log(introDishes);


for(let i=0;i<3;i++)
{
    console.log(name);
}

let introDishesContainer = document.querySelector('.intro-dishes-container');

introDishes.forEach((index,value) =>{
    
    const introDishesContents = `
    <div class="intro-dishes-card">
    <div class="content">
        <div class="dish-details">
            <h1>${introDishes[value].dishName}</h1>
            <p>${introDishes[value].price}</p>
        </div>
        <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
    </div>
    <img src="${imageLink(value,introDishes)}" alt="chicken">
    <button class="btn">Add to Cart</button>
    </div>
    `
    introDishesContainer.insertAdjacentHTML("beforeend", introDishesContents);
})

function imageLink(value,introDishes)
{
    let link = ((introDishes[value].image).toString()).slice(1);

    return link;
}

let cartContent = document.querySelector(".cart-content");


   let btn = document.querySelectorAll(".btn");

   btn.forEach((value,index) => {
    btn[index].addEventListener("click", (e) => {
        // console.log(e.target.parentElement);
    });
   });

   btn[0].addEventListener("click", (e) => {
    // console.log(e.target.parentElement.style.border=);
    e.target.parentElement.style.border= "2px solid aqua";
});

//    console.log(btn.parentElement);

