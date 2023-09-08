import { MediaFactory } from "../factories/TemplateFactory.js";

export class Gallery {
  constructor(media) {
    this._media = media;
  }

  render() {
    const $card = document.createElement("div");
    $card.classList.add("media-card");

    const $media = new MediaFactory(this._media).createMediaComponent();

    const $mediaInfo = document.createElement("div");
    $mediaInfo.classList.add("media-info");

    const $title = document.createElement("p");
    $title.classList.add("media-title");
    $title.innerHTML = this._media.title;

    const $likes = document.createElement("p");
    $likes.classList.add("media-title");
    $likes.innerHTML = `${this._media.likes} <i class="fa-solid fa-heart"></i>`;

    $mediaInfo.appendChild($title);
    $mediaInfo.appendChild($likes);

    $card.appendChild($media);
    $card.appendChild($mediaInfo);

    return $card;
  }
}
