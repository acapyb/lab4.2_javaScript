// script.js — Add to Cart
let cart = [];

function addItem(name, price) {
    cart.push({ name: name, price: price });
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
}

function updateCart() {
    const list = document.getElementById("cart-items");
    list.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = cart[i].name + " - RM " + cart[i].price +
            ' <button onclick="removeItem(' + i + ')">Remove</button>';
        list.appendChild(li);
    }

    document.getElementById("total").innerHTML = calculateTotal();
}

function checkout() {
    alert("Total price: RM " + calculateTotal());
}