document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".more-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = document.getElementById(button.dataset.target);
            
            target.classList.toggle("active");
            
            button.textContent = target.classList.contains("active") ? "Less" : "More";
        });
    });
});
