export class ContactFormTitle {
  constructor(photographer) {
    this._photographer = photographer;
  }

  // Display the name of the photographer on the contact form modal
  render() {
    const $title = document.createElement("h2");
    $title.classList.add("modal-title");

    const content = `Contactez-moi ${this._photographer.name}`;

    $title.innerHTML = content;
    return $title;
  }
}
