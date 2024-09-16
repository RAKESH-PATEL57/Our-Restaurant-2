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
const logInContainer = document.querySelector(".log-In");
const signInContainer = document.querySelector(".sign-Up");

const logInData = `
        <h1 class="form-heading">Log-In</h1>
        <div class="form-details">
          <div class="input-container">
                <label for="">Enter Your Name</label>
                <input type="text" required>
          </div>
          <div class="input-container">
                <label for="">Enter Your Password</label>
                <input type="password" required>
           </div>
           <div class="form-submitBtn-container">
                <button class="form-submitBtn btn" id="log-in-Btn" type="submit">Log-In</button>
           </div>
           <p class="form-desc">Don't have an account?<span class="user-toggle" id="create-account-btn">Create Account</span></p>
        </div>`
const signInData = `
       <h1 class="form-heading">Sign-Up</h1>
          <div class="form-details">
              <div class="input-container">
                  <label for="">Enter Your Name</label>
                  <input type="text" required>
                </div>
                <div class="input-container">
                  <label for="">Create Password</label>
                  <input type="password" required>
              </div>
              <div class="input-container">
                  <label for="">Conform Password</label>
                  <input type="password" required>
              </div>
              <div class="form-submitBtn-container">
                <button class="form-submitBtn btn" id="sign-up-Btn" type="submit">Create Account</button>
              </div>
              <p class="form-desc">Already have an account?<span class="user-toggle" id="log-in-span">Log In</span></p>
            </div>
`        

logInContainer.insertAdjacentHTML("afterbegin", logInData);
signInContainer.insertAdjacentHTML("afterbegin", signInData);

let logInSignInForm = document.querySelector(".log-in-sign-in-form");
let formOpenBtn = document.querySelector("#log-in-Btn-open");
let formCloseBtn = document.querySelector("#closeBtn");
let createAccountBtn = document.querySelector("#create-account-btn");
let logInSpan = document.querySelector("#log-in-span");
let logInBtn = document.querySelector("#log-in-Btn");
let signInBtn = document.querySelector("#sign-up-Btn");
let bodyScroll = document.querySelector("body");

formOpenBtn.addEventListener("click", () => {
    logInSignInForm.classList.add("active");
    bodyScroll.classList.add("stop-scrooling");
});

formCloseBtn.addEventListener("click", () => {
    logInSignInForm.classList.remove("active");
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


// Loader section      [[[[[[[[[[[     Start    ]]]]]]]]]]]
let mainContainer = document.querySelector("main");
let loaderContainer = document.querySelector(".loader-container");

// let bgImage = document.querySelector(".bg");

window.onload = () =>
{
    mainContainer.classList.add("active");
    loaderContainer.classList.add("loading-off");
}

// Loader section      [[[[[[[[[[[      End     ]]]]]]]]]]]

// Reviews section    [[[[[[[[[[[     Start    ]]]]]]]]]]]

// let reviewBtn = document.querySelector(".review-btn");
// let particularUserReviewContainer = document.querySelector(".particular-user-review");

// reviewBtn.addEventListener("click" , () => {
//     particularUserReviewContainer.classList.toggle("active");
// })

// Reviews section    [[[[[[[[[[[      End     ]]]]]]]]]]]




