import { MediaFactory } from "../factories/TemplateFactory.js";

export class Gallery {
  constructor(media) {
    this._media = media;
  }
  render() {
    // Create a div to contain the media
    const $card = document.createElement("div");
    $card.classList.add("media-card");
    const $cardLink = document.createElement("a");
    $cardLink.href = "#";
    $cardLink.dataset.id = this._media.id;
    $cardLink.setAttribute("aria-label", "Overture de la lightbox afin d'afficher le média en plein ecrant")

    // Use the media factory to format the media with the necessary tag, video or image
    const $media = new MediaFactory(this._media, false).createMediaComponent();

    const $mediaInfo = document.createElement("div");
    $mediaInfo.classList.add("media-info");

    // Create a paragraph who contain the name of the media
    const $title = document.createElement("p");
    $title.classList.add("media-title");
    $title.setAttribute("aria-label", "Titre donnée au média")
    $title.innerHTML = this._media.title;


    const $likesContainer = document.createElement("div");
    $likesContainer.classList.add("likes-container");
    
    // Create a span who contain the number of like on the media
    const $likesNumber = document.createElement("span");
    $likesNumber.classList.add("media-title");
    $likesNumber.classList.add("like");
    $likesNumber.setAttribute("aria-label", "Nombre de likes qu'a reçu le média")
    $likesNumber.innerHTML = `${this._media.likes}`;

    // Create a button to allow the user of liking the image
    const $likeButton = document.createElement("button");
    $likeButton.classList.add("like-button");
    $likeButton.setAttribute("aria-label", "Bouton permettant de liker l'image")
    $likeButton.dataset.id = this._media.id
    $likeButton.innerHTML = `<i class="fa-regular fa-heart"></i>`;

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
