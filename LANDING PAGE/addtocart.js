const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

// Initialize the cart display on page load
updateCart();

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));

    // Show notification
    const notification = button.querySelector(".notification");
    notification.classList.add("show");
    setTimeout(() => notification.classList.remove("show"), 1500);

    // Check if item is already in the cart
    const existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");

    const itemDetails = document.createElement("span");
    itemDetails.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;

    const itemQuantity = document.createElement("div");
    itemQuantity.classList.add("cart-item-quantity");

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = "1";
    quantityInput.value = item.quantity;
    quantityInput.addEventListener("change", () => {
      const newQuantity = parseInt(quantityInput.value, 10);
      item.quantity = newQuantity;
      updateCart();
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-item");
    removeButton.addEventListener("click", () => {
      cart = cart.filter((cartItem) => cartItem.name !== item.name);
      updateCart();
    });

    itemQuantity.appendChild(quantityInput);
    itemQuantity.appendChild(removeButton);

    li.appendChild(itemDetails);
    li.appendChild(itemQuantity);
    cartItems.appendChild(li);

    total += item.price * item.quantity;
  });

  cartTotal.textContent = `Total: ₱${total.toFixed(2)}`;

  // Save the cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}
