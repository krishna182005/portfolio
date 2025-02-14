document.addEventListener("DOMContentLoaded", function() {
    let cartCount = 0;
    const cartButton = document.querySelector(".cta");
    const buyButtons = document.querySelectorAll(".buy");

    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            cartCount++;
            cartButton.textContent = `Cart (${cartCount})`;
        });
    });
});
