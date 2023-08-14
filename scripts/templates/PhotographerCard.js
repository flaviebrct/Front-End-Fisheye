export class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  render() {
    const $article = document.createElement("article");
    $article.classList.add("photographer-card-wrapper");

    const photographerCard = `
      <a href="./photographer.html?id=${this._photographer.id}" aria-label="Lien vers le profil de ${this._photographer.name}">
        <img
          alt="Portrait de ${this._photographer.name}"
          src="${this._photographer.portrait}"
        />
        <h2>${this._photographer.name}</h2>
        <p class="photographer-location">${this._photographer.city}, ${this._photographer.country}</p>
        <p class="photographer-tagline">${this._photographer.tagline}</p>
        <p class="photographer-price">${this._photographer.price}€/jour</p>
      </a>
    `;

    $article.innerHTML = photographerCard;
    return $article;
  }
}
