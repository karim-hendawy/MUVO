document.addEventListener("DOMContentLoaded", function() {
  var menuToggle = document.getElementById("menu-toggle");
  var navLinks = document.getElementById("nav-links");
  var dropBtns = document.querySelectorAll(".dropbtn");
  var navItems = document.querySelectorAll('header ul li a');

  // ===== Toggle mobile we tablet menu =====
  menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("rotate");

    var icon = menuToggle.querySelector("i");
    if (menuToggle.classList.contains("rotate")) {
      icon.classList.replace("fa-bars", "fa-xmark");
      icon.style.color = "red";
    } else {
      icon.classList.replace("fa-xmark", "fa-bars");
      icon.style.color = "#fff";
    }
  });

  // ===== elsahm ellf Dropdawn =====
  for (var i = 0; i < dropBtns.length; i++) {
    (function() {
      var btn = dropBtns[i];
      var dropdown = btn.nextElementSibling;
      var arrow = btn.querySelector("i");

      // Click toggle
      btn.addEventListener("click", function(e) {
        e.preventDefault();

        // close Dropdawn lo maftoh
        var allDropdowns = document.querySelectorAll(".dropdown-content");
        for (var j = 0; j < allDropdowns.length; j++) {
          var menu = allDropdowns[j];
          if (menu !== dropdown) {
            menu.classList.remove("show");
            var otherArrow = menu.previousElementSibling.querySelector("i");
            if (otherArrow) otherArrow.classList.remove("rotate");
          }
        }

        // فتح/إغلاق الحالي
        dropdown.classList.toggle("show");
        if (arrow) arrow.classList.toggle("rotate");
      });

      // Desktop hover for dropdown
      btn.parentElement.addEventListener("mouseenter", function() {
        if (window.innerWidth >= 1025) {
          dropdown.classList.add("show");
          if (arrow) arrow.classList.add("rotate");
        }
      });

      btn.parentElement.addEventListener("mouseleave", function() {
        if (window.innerWidth >= 1025) {
          dropdown.classList.remove("show");
          if (arrow) arrow.classList.remove("rotate");
        }
      });
    })();
  }

  // Close dropdowns when clicking outside header
  document.addEventListener("click", function(e) {
    if (!e.target.closest("header")) {
      var allDropdowns = document.querySelectorAll(".dropdown-content");
      for (var i = 0; i < allDropdowns.length; i++) {
        var menu = allDropdowns[i];
        menu.classList.remove("show");
        var otherArrow = menu.previousElementSibling.querySelector("i");
        if (otherArrow) otherArrow.classList.remove("rotate");
      }
    }
  });

  // ===== Activate the current page link =====
  var currentPage = window.location.pathname;
  for (var i = 0; i < navItems.length; i++) {
    var link = navItems[i];
    var href = link.getAttribute('href');
    if (currentPage.endsWith(href)) {
      link.classList.add('active');
    }
  }
});
