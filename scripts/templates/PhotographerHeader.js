export class PhotographerHeader {
  constructor(photographer) {
    this._photographer = photographer;
  }

  render() {
    const photographerHeader = `
      <div class="photographer-profile">
        <h1>${this._photographer.name}</h1>
        <p class="photographer-location">${this._photographer.city}, ${this._photographer.country}</p>
        <p class="photographer-tagline">${this._photographer.tagline}</p>
      </div>
      <button aria-label="Permet l'ouverture du formulaire de contact" class="contact_button" onclick="displayModal()">
        Contactez-moi
      </button>
      <img
        class="photographer-portrait"
        alt="Portrait de ${this._photographer.name}"
        src="${this._photographer.portrait}"
      />
    `;

    return photographerHeader;
  }
}
