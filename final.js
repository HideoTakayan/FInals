window.onload = function () {
  console.log("Trang đã tải xong");
  addTabIndexes();
};

function showlightbox(el) {
  const lightbox = document.querySelector(".cover-bg");
  const img = lightbox.querySelector("img");
  img.src = el.src;
  lightbox.style.display = "flex";
  console.log("Phóng to ảnh: " + el.src);
}

function hidelightbox(event) {
  if (event) event.stopPropagation(); // tránh đóng khi bấm vào ảnh hoặc nút
  document.querySelector(".cover-bg").style.display = "none";
  console.log("Đóng lightbox");
}

function addTabIndexes() {
  const figures = document.querySelectorAll("figure");

  for (let i = 0; i < figures.length; i++) {
    const figure = figures[i];
    const index = i + 1;
    figure.setAttribute("tabindex", "0");

    figure.addEventListener("mouseover", function () {
      console.log(`Chuột vào ảnh ${index}`);
      this.classList.add("hovered");
    });

    figure.addEventListener("mouseleave", function () {
      console.log(`Chuột rời ảnh ${index}`);
      this.classList.remove("hovered");
    });

    figure.addEventListener("focus", function () {
      console.log(`Focus ảnh ${index}`);
      this.classList.add("hovered");
    });

    figure.addEventListener("blur", function () {
      console.log(`Blur ảnh ${index}`);
      this.classList.remove("hovered");
    });
  }
}
