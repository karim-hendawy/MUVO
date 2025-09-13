document.addEventListener("DOMContentLoaded", function () {

  var header = document.querySelector("header");
  var menuToggle = document.getElementById("menu-toggle");
  var navLinks = document.getElementById("nav-links");
  var dropBtns = document.querySelectorAll(".dropbtn");
  var navItems = document.querySelectorAll('header ul li a');
  var scrollBtn = document.querySelector(".scroll-up"); // زر الـ scroll-up

  // =============================
  // تغيير استايل الـ navbar عند scroll
  // =============================
  window.addEventListener("scroll", function () {
    // للـ navbar
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // للـ scroll-up button بعد 100vh
    if (window.scrollY > window.innerHeight) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // =============================
  // فتح/إغلاق القائمة الرئيسية على الموبايل وتحويل الأيقونة
  // =============================
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");

    var icon = menuToggle.querySelector("i");
    if (menuToggle.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      icon.style.color = "red";
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      icon.style.color = "#fff";
    }
  });

  // =============================
  // فتح/إغلاق dropdown على الموبايل مع دوران السهم
  // =============================

  dropBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var dropdown = btn.nextElementSibling;
      var arrow = btn.querySelector("i");

      // قفل أي dropdown مفتوح غير الحالي
      document.querySelectorAll(".dropdown-content").forEach(function (menu) {
        if (menu !== dropdown) {
          menu.classList.remove("show");
          var otherArrow = menu.previousElementSibling.querySelector("i");
          if (otherArrow) otherArrow.classList.remove("rotate");
        }
      });

      // فتح/إغلاق الحالي
      dropdown.classList.toggle("show");
      if (arrow) arrow.classList.toggle("rotate");
    });
  });

  // =============================
  // تفعيل الزر النشط تلقائيًا حسب الصفحة الحالية
  // =============================
  var currentPage = window.location.pathname;
  navItems.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || currentPage.includes(href)) {
      link.classList.add('active');
    }
  });

  // =============================
  // تفعيل زر scroll-up للرجوع للأعلى
  // =============================
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
