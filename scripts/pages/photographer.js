import { Api } from "../api/api.js";

import { Media as MediaConstructor } from "../models/MediaConstructor.js";
import { Photographer as PhotographerConstructor } from "../models/PhotographerConstructor.js";

import { Toast } from "../templates/Toast.js";
import { Gallery } from "../templates/MediasGallery.js";
import { ContactFormTitle } from "../templates/ContactFormTitle.js";
import { PhotographerHeader } from "../templates/PhotographerHeader.js";
import { displayLightbox } from "../utils/lightbox.js";

class App {
  constructor() {
    this.$photograperPage = document.querySelector("#photographer-page");
    this.$photographersWrapper = document.querySelector("#main");
    this.api = new Api("data/photographers.json");
    this.$mediaSection = document.createElement("section");
    this.$modalHeader = document.querySelector("#modal-header");
  }

  async init() {
    const { media: mediasData, photographers: photographersData } =
      await this.api.get();

    const params = new URL(document.location).searchParams;
    let id = parseInt(params.get("id"));

    // Get photographer data
    const filteredPhotographer = photographersData.filter(
      (proprety) => proprety.id === id
    )[0];
    const photographerConstructor = new PhotographerConstructor(
      filteredPhotographer
    );
    const photographerHeaderTemplate = new PhotographerHeader(
      photographerConstructor
    );
    const $header = document.querySelector(".photograph-header");
    $header.innerHTML = photographerHeaderTemplate.render();
    this.$photographersWrapper.appendChild($header);

    // Get photographer medias
    this.$mediaSection.classList.add("media-display-section");
    this.$photographersWrapper.appendChild(this.$mediaSection);

    const filteredMedia = mediasData.filter(
      (proprety) => proprety.photographerId === id
    );
    filteredMedia
      .map((media) => new MediaConstructor(media))
      .forEach((media) => {
        const mediaTemplate = new Gallery(media);
        this.$mediaSection.appendChild(mediaTemplate.render());
      });
    displayLightbox(filteredMedia);

    // Get photographer name in modale
    const contactFormTitleTemplate = new ContactFormTitle(filteredPhotographer);
    this.$modalHeader.appendChild(contactFormTitleTemplate.render());

    // Toast with likes and daily price
    const toastTemplate = new Toast(filteredPhotographer);
    this.$photographersWrapper.appendChild(toastTemplate.render());
  }
}

const app = new App();
app.init();
