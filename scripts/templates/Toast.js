export class Toast {
  constructor(photographer) {
    this._photographer = photographer;
  }

  render() {
    const $container = document.createElement("div");
    $container.classList.add("toast-container");

    const toast = `
        <div class="total-likes-container">
          <p class="photographer-total-like"></p>
          <i class="fa-solid fa-heart"></i> 
        </div>
        <p>${this._photographer.price}€/ jour</p>
    `;

    $container.innerHTML = toast;
    return $container;
  }
}
