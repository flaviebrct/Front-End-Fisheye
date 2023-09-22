export class ContactFormTitle {
  constructor(photographer) {
    this._photographer = photographer;
  }

  render() {
    const $title = document.createElement("h2");
    $title.classList.add("modal-title");

    const content = `Contactez-moi ${this._photographer.name}`;

    $title.innerHTML = content;
    return $title;
  }
}
