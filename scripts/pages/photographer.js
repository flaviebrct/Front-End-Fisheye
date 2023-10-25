import { Api } from "../api/api.js";

import { Media as MediaConstructor } from "../models/MediaConstructor.js";
import { Photographer as PhotographerConstructor } from "../models/PhotographerConstructor.js";

import { Toast } from "../templates/Toast.js";
import { Gallery } from "../templates/MediasGallery.js";
import { ContactFormTitle } from "../templates/ContactFormTitle.js";
import { PhotographerHeader } from "../templates/PhotographerHeader.js";
import { displayLightbox } from "../utils/lightbox.js";
import { displayTotalLikes } from "../utils/likes.js";
import { DropDown } from "../utils/filter.js";

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
    const photographer = photographersData.filter(
      (proprety) => proprety.id === id
    )[0];
    const photographerConstructor = new PhotographerConstructor(photographer);
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

    function displayMedia(data, parent) {
      data
        .map((media) => new MediaConstructor(media))
        .forEach((media) => {
          const mediaTemplate = new Gallery(media);
          parent.appendChild(mediaTemplate.render());
        });
    }
    console.log(filteredMedia);
    displayMedia(filteredMedia, this.$mediaSection);

    DropDown();

    // Get photographer name in modale
    const contactFormTitleTemplate = new ContactFormTitle(photographer);
    this.$modalHeader.appendChild(contactFormTitleTemplate.render());

    // Toast with likes and daily price
    const toastTemplate = new Toast(photographer);
    this.$photographersWrapper.appendChild(toastTemplate.render());

    displayLightbox(filteredMedia);
    displayTotalLikes(filteredMedia);

    const filters = Array.from(document.getElementsByClassName("listbox-item"));

    let sortedMedias = [];

    function sortByPopularity(parent) {
      sortedMedias = filteredMedia.sort((a, b) => b.likes - a.likes);
      document.querySelector(".media-display-section").innerHTML = "";
      //elements are displayed with the new order of medias
      displayMedia(sortedMedias, parent);
      displayLightbox(sortedMedias);
      displayTotalLikes(sortedMedias);
    }

    function sortByDate(parent) {
      //sort by date
      sortedMedias = filteredMedia.sort(
        (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
      );
      document.querySelector(".media-display-section").innerHTML = "";
      //elements are displayed with the new order of medias
      displayMedia(sortedMedias, parent);
      displayLightbox(sortedMedias);
      displayTotalLikes(sortedMedias);
    }

    function sortByTitle(parent) {
      sortedMedias = filteredMedia.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
      });
      document.querySelector(".media-display-section").innerHTML = "";
      //elements are displayed with the new order of medias
      displayMedia(sortedMedias, parent);
      displayLightbox(sortedMedias);
      displayTotalLikes(sortedMedias);
    }

    filters.forEach(
      (element, index) => {
        element.addEventListener("click", () => {
          if (index == 0) {
            sortByPopularity(this.$mediaSection);
          } else if (index === 1) {
            sortByDate(this.$mediaSection);
          } else if (index === 2) {
            sortByTitle(this.$mediaSection);
          }
        }),
          element.addEventListener("keyup", (e) => {
            switch (e.key) {
              case "Enter":
                if (index == 0) {
                  sortByPopularity(this.$mediaSection);
                } else if (index === 1) {
                  sortByDate(this.$mediaSection);
                } else if (index === 2) {
                  sortByTitle(this.$mediaSection);
                }
            }
          });
      }
      //   element.addEventListener("keyup", (e) => {
      //     switch (e.key) {
      //       case "Enter":
      //         openDropDown();
      //         break;
      //       case "Escape":
      //         closeDropDown();
      //         break;
      //     }
      //   });
    );
  }
}

const app = new App();
app.init();
