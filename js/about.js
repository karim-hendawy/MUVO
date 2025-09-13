
 var btn = document.querySelector(".museum-text .btn");
  
    btn.addEventListener("click", (e) => {
      e.preventDefault();
  
      // تأثير Bounce
      btn.style.transition = "transform 0.2s";
      btn.style.transform = "scale(1.1)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 200);
  
      // يطلع لأول الصفحة بعد الحركة
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 250);
    });

  