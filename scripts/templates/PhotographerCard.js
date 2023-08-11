class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerCard() {
    const $article = document.createElement('article')
    $article.classList.add('photographer-card-wrapper')

    const photographerCard = `
      <a href="/photographer.html" aria-label="Lien cliquable vers le profile de ${this._photographer.name}">
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
