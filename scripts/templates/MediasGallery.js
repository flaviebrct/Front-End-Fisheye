import { MediaFactory } from "../factories/TemplateFactory.js";
import { displayLightbox } from "../utils/lightbox.js";

export class Gallery {
  constructor(media) {
    this._media = media;
  }
  render() {
    const $card = document.createElement("div");
    $card.classList.add("media-card");
    const $cardLink = document.createElement("a");
    $cardLink.href = "#";
    $cardLink.dataset.id = this._media.id;
    $cardLink.setAttribute("aria-label", "Overture de la lightbox")

    const $media = new MediaFactory(this._media, false).createMediaComponent();

    const $mediaInfo = document.createElement("div");
    $mediaInfo.classList.add("media-info");

    const $title = document.createElement("p");
    $title.classList.add("media-title");
    $title.innerHTML = this._media.title;

    const $likesNumber = document.createElement("span");
    $likesNumber.classList.add("media-title");
    $likesNumber.classList.add("like");
    $likesNumber.innerHTML = `${this._media.likes}`;

    const $likeButton = document.createElement("button");
    $likeButton.classList.add("like-button");
    $likeButton.setAttribute("aria-label", "Like")
    $likeButton.dataset.id = this._media.id
    $likeButton.innerHTML = `<i class="fa-regular fa-heart"></i>`;

    const $likesContainer = document.createElement("div");
    $likesContainer.classList.add("likes-container");
    $likesContainer.appendChild($likesNumber);
    $likesContainer.appendChild($likeButton);

    $mediaInfo.appendChild($title);
    $mediaInfo.appendChild($likesContainer);

    $cardLink.appendChild($media);

    $card.appendChild($cardLink);
    $card.appendChild($mediaInfo);

    return $card;
  }
}
