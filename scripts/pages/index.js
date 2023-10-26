import { PhotographerApi } from "../api/PhotographerApi.js";
import { PhotographerCard } from "../templates/PhotographerCard.js";
import { Photographer as PhotographerConstructor } from "../models/PhotographerConstructor.js";

class App {
  constructor() {
    this.$photographersWrapper = document.querySelector(
      ".photographer_section"
    );
    this.photographersApi = new PhotographerApi("data/photographers.json");
  }

  async init() {
    const photographersData = await this.photographersApi.getPhotographers();

    photographersData
      .map((photographer) => new PhotographerConstructor(photographer)) //format photographer data
      .forEach((photographer) => {
        const template = new PhotographerCard(photographer); //render card template
        this.$photographersWrapper.appendChild(template.render());
      });
  }
}

const app = new App();
app.init();
