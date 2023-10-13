import { MediaFactory } from "../factories/TemplateFactory.js";
import { displayLightbox } from "../utils/lightbox.js";

export class Gallery {
  constructor(media) {
    this._media = media;
  }
  render() {
    console.log(this._media);
    const $card = document.createElement("div");
    $card.classList.add("media-card");
    const $cardLink = document.createElement("a");
    $cardLink.href = "#";
    $cardLink.dataset.id = this._media.id;

    const $media = new MediaFactory(this._media, false).createMediaComponent();

    const $mediaInfo = document.createElement("div");
    $mediaInfo.classList.add("media-info");

    const $title = document.createElement("p");
    $title.classList.add("media-title");
    $title.innerHTML = this._media.title;

    const $likes = document.createElement("p");
    $likes.classList.add("media-title");
    $likes.classList.add("like");
    $likes.innerHTML = `${this._media.likes} <i class="fa-regular fa-heart like-button"></i>`;

    $mediaInfo.appendChild($title);
    $mediaInfo.appendChild($likes);

    $cardLink.appendChild($media);

    $card.appendChild($cardLink);
    $card.appendChild($mediaInfo);

    return $card;
  }
}
