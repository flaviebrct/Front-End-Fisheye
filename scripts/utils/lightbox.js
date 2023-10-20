export const displayLightbox = (data) => {
  const lightboxWrapper = document.querySelector("#lightbox_modal");
  const closingBtn = document.querySelector(".closing-button");
  const previousBtn = document.querySelector(".previous-button");
  const nextBtn = document.querySelector(".next-button");
  const lightboxMedia = document.querySelector(".media-container");
  const mediaCards = Array.from(document.querySelectorAll(".media-card a"));

  const photographerPage = document.querySelector("#photographer-page");

  let currentIndex = 0;

  mediaCards.forEach((media) => {
    media.addEventListener("click", () => {
      const mediaId = media.dataset.id;
      const mediaIndex = data.findIndex((media) => media.id == mediaId);
      currentIndex = mediaIndex;
      lightboxWrapper.style.display = "flex";
      lightboxWrapper.setAttribute("aria-hidden", "false");
      photographerPage.setAttribute("aria-hidden", "true");
      closingBtn.focus();
      lightboxTemplate();
    });
  });

  const lightboxTemplate = () => {
    const currentMedia = data[currentIndex];

    lightboxMedia.innerHTML = `
    ${
      currentMedia.image
        ? `<img class="lightbox-media" src="./assets/photographers/${currentMedia.photographerId}/${currentMedia.image}" alt="Média intitulé '${currentMedia.title}'">`
        : `<video controls class="lightbox-media" alt="Média intitulé '${currentMedia.title}'"><source src="./assets/photographers/${currentMedia.photographerId}/${currentMedia.video}" type="video/mp4"></video>`
    }
    <figcaption class="media-title">${currentMedia.title}</figcaption>`;
  };

  function closeLightbox() {
    lightboxWrapper.style.display = "none";
    lightboxWrapper.setAttribute("aria-hidden", "true");
    photographerPage.setAttribute("aria-hidden", "false");
    lightboxMedia.innerHTML = ``;
  }

  function next() {
    currentIndex++;
    if (currentIndex > data.length - 1) {
      currentIndex = 0;
    }
    lightboxTemplate();
  }

  function previous() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = data.length - 1;
    }
    lightboxTemplate();
  }

  document.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "Escape":
        closeLightbox();
        break;
      case "ArrowLeft":
        previous();
        break;
      case "ArrowRight":
        next();
        break;
    }
  });

  closingBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", next);
  previousBtn.addEventListener("click", previous);
};

