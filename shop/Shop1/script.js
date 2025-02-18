document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".glass-button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Thanks for clicking!");
        });
    });
});
