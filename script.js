let cartOpen = document.querySelector("#cartIcon");
let closeBtn = document.querySelector("#close-icon");
let cartContainer = document.querySelector(".cart-container");

cartOpen.addEventListener("click", () => {
    cartContainer.classList.add("cart-show-hide");
});

closeBtn.addEventListener("click", () => {
    cartContainer.classList.remove("cart-show-hide");
})

