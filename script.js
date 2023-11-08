const socialMediaButtons = document.querySelectorAll(".socialMediaButton");

socialMediaButtons.forEach((button) => {
button.addEventListener("mouseover", () => {
    const icon = button.querySelector("i");
    const buttonText = button.querySelector(".button-text");
    icon.style.display = "none";
    buttonText.style.display = "inline";
});

button.addEventListener("mouseout", () => {
    const icon = button.querySelector("i");
    const buttonText = button.querySelector(".button-text");
    icon.style.display = "inline";
    buttonText.style.display = "none";
});
});
