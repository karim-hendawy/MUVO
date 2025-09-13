var ticketPrice = 0;

var ticketOptions = document.querySelectorAll(".ticket-type-option");
var totalPriceEl = document.getElementById("totalPrice");
var quantityEl = document.getElementById("ticketQuantity");

ticketOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    ticketOptions.forEach(function (o) {
      o.classList.remove("active");
    });
    option.classList.add("active");
    ticketPrice = parseInt(option.dataset.price);
    updateTotal();
  });
});

quantityEl.addEventListener("input", updateTotal);

function updateTotal() {
  var qty = parseInt(quantityEl.value) || 1;
  totalPriceEl.textContent = ticketPrice * qty;
}

document.getElementById("goToPaymentBtn").addEventListener("click", function () {
  var qty = quantityEl.value;

  // اقرأ الحقول الجديدة
  var firstName = document.getElementById("firstName").value.trim();
  var secondName = document.getElementById("secondName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var phone = document.getElementById("phoneNumber").value.trim();
  var email = document.getElementById("emailAddress").value.trim();

  var namePattern = /^[A-Za-z\s]+$/;
  var phonePattern = /^\d{11}$/;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation
  if (!ticketPrice) {
    alert("Please select a ticket type");
    return;
  }
  if (!firstName || !lastName) {
    alert("First and Last Name are required");
    return;
  }
  if (!namePattern.test(firstName) || (secondName && !namePattern.test(secondName)) || !namePattern.test(lastName)) {
    alert("Names must contain letters only");
    return;
  }
  if (!phonePattern.test(phone)) {
    alert("Phone must be exactly 11 digits");
    return;
  }
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email");
    return;
  }

  // الاسم الكامل
  var fullName = firstName + (secondName ? " " + secondName : "") + " " + lastName;

  // Show payment section
  document.getElementById("paymentContainer").classList.remove("hidden");
  document.getElementById("bookingSummary").innerHTML =
    "Name: " + fullName + "<br>" +
    "Email: " + email + "<br>" +
    "Phone: " + phone + "<br>" +
    "You selected: " + qty + " ticket(s)<br>" +
    "Total: $" + (ticketPrice * qty);
});
