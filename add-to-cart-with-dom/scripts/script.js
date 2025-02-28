const ringButtons = document.querySelectorAll(".ring-button");
for (let i = 0; i < ringButtons.length; i++) {
  const ringButton = ringButtons[i];
  ringButton.addEventListener("click", function (event) {
    const color = event.target.id.replace("-color", "");

    for (let j = 0; j < ringButtons.length; j++) {
      ringButtons[j].classList.remove("border-purple-600");
      ringButtons[j].classList.add("border-gray-300");
    }
    event.target.classList.add("border-purple-600");
    event.target.classList.remove("border=gray-300");

    const productImage = document.getElementById("product-image");
    productImage.src = "./images/" + color + ".png";
  });
}
