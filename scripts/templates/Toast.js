export class Toast {
  constructor(photographer) {
    this._photographer = photographer;
  }

  render() {
    const $container = document.createElement("div");
    $container.classList.add("toast-container");

    const toast = `
        <p>${this._photographer.likes} <i class="fa-solid fa-heart"></i> </p>
        <p>${this._photographer.price}€/ jour</p>
    `;

    $container.innerHTML = toast;
    return $container;
  }
}
