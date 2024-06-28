let cartOpen = document.querySelector("#cartIcon");
let closeBtn = document.querySelector("#close-icon");
let cartContainer = document.querySelector(".cart-container");

cartOpen.addEventListener("click", () => {
    cartContainer.classList.add("cart-show-hide");
});

closeBtn.addEventListener("click", () => {
    cartContainer.classList.remove("cart-show-hide");
});

// review stars section    [[[[[ Start  ]]]]]
let stars = document.querySelectorAll(".stars");

stars.forEach((star, i) => {
    star.addEventListener("click" , () => {
        let currentStar = i + 1;
        stars.forEach((star, j) => {
            if(currentStar >= j+1)
            {
                star.classList.add("toggleActiveStar");
            }
            else
            {
                star.classList.remove("toggleActiveStar");
            }
        })
    });

    // ["click", "mouseover"].forEach((event) => {
    //       star.addEventListener(event, test(i));
    // });
})
