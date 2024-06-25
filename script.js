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
let starClick = 0;
if(starClick == 0)
{

    stars.forEach((star, index) => {
        stars[index].addEventListener("mouseover",() => {
            // stars[index].style.background = "aqua";
        for(let i = 0 ; i <= index ; i++)
        {
            stars[i].style.color = "aqua";
            stars[i].addEventListener("onclick", () => {
                starClick = 1;
            });
        }
        console.log(index);
    });
    if(starClick == 0) {
        stars[index].addEventListener("mouseout",() => {
            // stars[index].style.background = "aqua";
            stars[index].style.color = "white";
            console.log(index);
        });
    }
})
}

// review stars section    [[[[[  End   ]]]]]


