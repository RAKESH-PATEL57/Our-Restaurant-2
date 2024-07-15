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
})
