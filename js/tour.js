 var galleryImages = document.querySelectorAll(".grid-gallery img");
    var fullscreenView = document.getElementById("fullscreenView");
    var fullscreenImg = document.getElementById("fullscreenImg");
    var closeBtn = document.getElementById("closeBtn");
    var nextBtn = document.getElementById("next");
    var prevBtn = document.getElementById("prev");
    var caption = document.getElementById("caption");

    var currentIndex = 0;
    var startX = 0;

    function showImage(index) {
      fullscreenImg.src = galleryImages[index].src;
      caption.textContent = galleryImages[index].alt; 
      fullscreenView.style.display = "flex";
      currentIndex = index;
    }

    for (var i = 0; i < galleryImages.length; i++) {
      galleryImages[i].addEventListener("click", function (e) {
        showImage(Array.prototype.indexOf.call(galleryImages, e.target));
      });
    }

    closeBtn.addEventListener("click", function () {
      fullscreenView.style.display = "none";
    });

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      showImage(currentIndex);
    });

    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage(currentIndex);
    });

    // support arrows
    document.addEventListener("keydown", function (e) {
      if (fullscreenView.style.display === "flex") {
        if (e.key === "ArrowRight") {
          nextBtn.click();
        }
        if (e.key === "ArrowLeft") {
          prevBtn.click();
        }
        if (e.key === "Escape") {
          closeBtn.click();
        }
      }
    });