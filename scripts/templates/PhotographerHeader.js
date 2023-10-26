export class PhotographerHeader {
  constructor(photographer) {
    this._photographer = photographer;
  }

  // Render the photographer header template with data
  render() {
    const photographerHeader = `
      <div class="photographer-profile">
        <h1 aria-label="Nom et prénom du photographe séléctionné">${this._photographer.name}</h1>
        <p class="photographer-location" aria-label="Localisation du photographe séléctionné">${this._photographer.city}, ${this._photographer.country}</p>
        <p class="photographer-tagline" aria-label="Slogan du photographe séléctionné">${this._photographer.tagline}</p>
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
