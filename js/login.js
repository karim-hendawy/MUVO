var sign_in_btn = document.querySelector("#sign-in-btn");
var sign_up_btn = document.querySelector("#sign-up-btn");
var container = document.querySelector(".container");

// Toggle forms
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// ===== Validation =====
var signInForm = document.querySelector(".sign-in-form");
var signUpForm = document.querySelector(".sign-up-form");

function showError(input, message) {
  var errorMsg = input.parentElement.querySelector(".error-message");
  if (errorMsg) {
    errorMsg.textContent = message;
    errorMsg.style.color = "red";
  }
}

function clearError(input) {
  var errorMsg = input.parentElement.querySelector(".error-message");
  if (errorMsg) errorMsg.textContent = "";
}

// ===== Username validation =====
function validateUsername(input) {
  var username = input.value.trim();
  var usernameRegex = /^[A-Za-z][A-Za-z0-9]*$/;
  if (!username) return "Username is required";
  if (!usernameRegex.test(username)) return "Username must start with a letter";
  return "";
}

// ===== Sign up validation =====
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var username = signUpForm.querySelector('input[type="text"]');
  var email = signUpForm.querySelector('input[type="email"]');
  var password = signUpForm.querySelector('input[type="password"]');
  var valid = true;

  // Username validation
  var errorMsg = validateUsername(username);
  if (errorMsg) {
    showError(username, errorMsg);
    valid = false;
  } else clearError(username);

  // Email validation
  if (!email.value.trim()) {
    showError(email, "Email is required");
    valid = false;
  } else {
    var emailRegex = /^[^\s@]+@(gmail\.com|yahoo\.com|hotmail\.com)$/i;
    if (!emailRegex.test(email.value)) {
      showError(email, "Email must be Gmail, Yahoo, or Hotmail");
      valid = false;
    } else clearError(email);
  }

  // Password validation
  if (!password.value.trim()) {
    showError(password, "Password is required");
    valid = false;
  } else if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    valid = false;
  } else clearError(password);

  if (valid) {
    // Check if email or username already exists
    if (
      localStorage.getItem(email.value.toLowerCase()) ||
      localStorage.getItem(username.value.toLowerCase())
    ) {
      showError(email, "This email or username is already registered!");
      return;
    }

    // Store user data (by email and by username)
    var userData = {
      username: username.value,
      email: email.value.toLowerCase(),
      password: password.value,
    };

    localStorage.setItem(email.value.toLowerCase(), JSON.stringify(userData));
    localStorage.setItem(
      username.value.toLowerCase(),
      JSON.stringify(userData)
    );

    signUpForm.reset();
    container.classList.remove("sign-up-mode"); // العودة لصفحة تسجيل الدخول
  }
});

// ===== Sign in validation =====
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var usernameOrEmailInput = signInForm.querySelector('input[type="text"]');
  var passwordInput = signInForm.querySelector('input[type="password"]');
  var usernameOrEmail = usernameOrEmailInput.value.trim().toLowerCase();
  var password = passwordInput.value.trim();
  var valid = true;

  clearError(usernameOrEmailInput);
  clearError(passwordInput);

  if (!usernameOrEmail) {
    showError(usernameOrEmailInput, "Username or Email is required");
    valid = false;
  }

  if (!password) {
    showError(passwordInput, "Password is required");
    valid = false;
  }

  if (!valid) return;

  // Check stored data by username or email
  const storedData = localStorage.getItem(usernameOrEmail);
  if (storedData) {
    var userData = JSON.parse(storedData);
    if (userData.password === password) {
      signInForm.reset();
      // Redirect to home page
      window.location.href = "../index.html";
    } else {
      showError(passwordInput, "Incorrect password!");
    }
  } else {
    showError(usernameOrEmailInput, "User not found!");
  }
});
// Toggle password visibility
var toggleIcons = document.querySelectorAll(".password-toggle");
toggleIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    var passwordInput = icon.parentElement.querySelector(".password-input");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove("fa-lock");
      icon.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-lock");
    }
  });
});


var sign_in_btn = document.querySelector("#sign-in-btn");
var sign_up_btn = document.querySelector("#sign-up-btn");
var container = document.querySelector(".container");

// Toggle forms
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// ===== Validation =====
var signInForm = document.querySelector(".sign-in-form");
var signUpForm = document.querySelector(".sign-up-form");

// Check URL parameter (mode)
var params = new URLSearchParams(window.location.search);
var mode = params.get("mode");

// لو جاي من اللينك "Sign Up"
if (mode === "register") {
  container.classList.add("sign-up-mode");
}

// لو جاي من اللينك "Login" أو مفيش باراميتر
else {
  container.classList.remove("sign-up-mode");
}
