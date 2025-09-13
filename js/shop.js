
var buttons = document.querySelectorAll(".add-to-cart");
var cartItems = document.getElementById("cart-items");
var totalEl = document.getElementById("total");
var checkoutBtn = document.getElementById("checkoutBtn");

var cart = []; 


for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var name = this.dataset.name;
    var price = parseInt(this.dataset.price);

    
    cart.push({ name: name, price: price });

    updateCart();
  });
}


function updateCart() {
  cartItems.innerHTML = ""; 

  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var li = document.createElement("li");
    li.textContent = cart[i].name + " - EGP" + cart[i].price;
    cartItems.appendChild(li);

    total += cart[i].price;
  }

  totalEl.textContent = "Total: EGP" + total;
}

checkoutBtn.addEventListener("click", function() {
  if(cart.length === 0){
    alert("Your cart is empty!");
  } else {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    alert("Thank you for your purchase! Total: EGP" + total);
    cart = [];
    updateCart();
  }
});