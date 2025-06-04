

menuButton.addEventListener("click", toggleMenu);
function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

const gallery = document.querySelector(".gallery"); // Your <div class="gallery"> should contain the thumbnails
const modal = document.querySelector(".image-modal");

function openModal(event) {
  const clickedImg = event.target.closest("img");
  if (!clickedImg) return;

  const src = clickedImg.getAttribute("src");
  const alt = clickedImg.getAttribute("alt") || "";

  const fullSrc = src.split("-")[0] + "-full.jpeg";

   modal.innerHTML = `
    <img src="${fullSrc}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;

   modal.showModal();

    const closeButton = modal.querySelector(".close-viewer");
  closeButton.addEventListener("click", () => modal.close());
}

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

gallery.addEventListener("click", openModal);
