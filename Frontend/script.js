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
const formOpenBtn = document.querySelector("#formOpenBtn");
const formPopUp = document.querySelector(".form-popup");
const formCloseButton = document.querySelector("#close_Btn");
const logInBtn = document.querySelector("#login");
const signInBtn = document.querySelector("#signup");

const homeheader = document.querySelector('.header');
const homepage = document.querySelector('.home');
// const bodyScroll = document.querySelector('.body');

formOpenBtn.onclick = () => {
    formPopUp.classList.add("show");
    homeheader.classList.add('headerblur');
    homepage.classList.add('homeblur');
    // bodyScroll.classList.add('bodyScroll');
  
};
formCloseButton.onclick = () => {
    formPopUp.classList.remove("show");
    homeheader.classList.remove('headerblur');
    homepage.classList.remove('homeblur');
    // bodyScroll.classList.remove('bodyScroll');
}

signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formPopUp.classList.add("active");

});


logInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formPopUp.classList.remove("active");
});


