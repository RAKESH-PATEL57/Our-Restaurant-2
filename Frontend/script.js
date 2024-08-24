let cartOpen = document.querySelector("#cartIcon");
let closeBtn = document.querySelector("#close-icon");
let cartContainer = document.querySelector(".cart-container");

cartOpen.addEventListener("click", (e) => {
    // e.preventDefault();
    cartContainer.classList.add("cart-show-hide");
});

closeBtn.addEventListener("click", () => {
    cartContainer.classList.remove("cart-show-hide");
});

// review stars section    [[[[[ Start  ]]]]]
let stars = document.querySelectorAll(".stars");

stars.forEach((star, i) => {
    star.addEventListener("click" , () => {
        let currentStar = i;
        stars.forEach((star, j) => {
            if(currentStar >= j)
            {
                star.classList.add("toggleActiveStar");
            }
            else
            {
                star.classList.remove("toggleActiveStar");
            }
        });
    });

    // ["click", "mouseover"].forEach((event) => {
    //       star.addEventListener(event, test(i));
    // });
})


// which section is open
let allSections = document.querySelectorAll("ul li a");
let initial = 0;

allSections.forEach((sec,index) => {
    sec.addEventListener("click", () => {
        allSections[index].classList.add("active");
        allSections[initial].classList.remove("active");
        initial = index;
    })
});

//****** */ log-in and sign-in section *********************
let logInContainer = document.querySelector(".log-In");
let signInContainer = document.querySelector(".sign-Up");


let form = document.querySelector("form");
let formOpenBtn = document.querySelector("#log-in-Btn-open");
let formCloseBtn = document.querySelector("#closeBtn");
let createAccountBtn = document.querySelector("#create-account-btn");
let logInSpan = document.querySelector("#log-in-span");
let logInBtn = document.querySelector("#log-in-Btn");
let signInBtn = document.querySelector("#sign-up-Btn");
let bodyScroll = document.querySelector("body");

formOpenBtn.addEventListener("click", () => {
    form.classList.add("active");
    bodyScroll.classList.add("stop-scrooling");
});

formCloseBtn.addEventListener("click", () => {
    form.classList.remove("active");
    bodyScroll.classList.remove("stop-scrooling");
});

createAccountBtn.addEventListener("click", () => {
    signInContainer.classList.add("active");
    logInContainer.classList.remove("active");
});

signInBtn.addEventListener("click", () => {
    logInContainer.classList.add("active");
    signInContainer.classList.remove("active");
});

logInSpan.addEventListener("click", () => {
    logInContainer.classList.add("active");
    signInContainer.classList.remove("active");
});


logInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formPopUp.classList.remove("active");
});


// Reviews section    [[[[[[[[[[[     Start    ]]]]]]]]]]]

// let reviewBtn = document.querySelector(".review-btn");
// let particularUserReviewContainer = document.querySelector(".particular-user-review");

// reviewBtn.addEventListener("click" , () => {
//     particularUserReviewContainer.classList.toggle("active");
// })

// Reviews section    [[[[[[[[[[[      End     ]]]]]]]]]]]




