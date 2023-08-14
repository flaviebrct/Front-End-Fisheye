import { PhotographerApi } from "../api/PhotographerApi.js"
import { Photographer as PhotographerConstructor }  from "../models/PhotographerConstructor.js"
import { PhotographerCard } from "../templates/PhotographerCard.js";


class App {
  constructor() {
    this.$photographersWrapper = document.querySelector(
      ".photographer_section"
    );
    this.photographersApi = new PhotographerApi("data/photographers.json");
  }

  async init() {
    const photographersData = await this.photographersApi.getPhotographers();

    console.log(photographersData);

    photographersData
      .map((photographer) => new PhotographerConstructor(photographer))
      .forEach((photographer) => {
        const Template = new PhotographerCard(photographer);
        this.$photographersWrapper.appendChild(
          Template.render()
        );
      });
  }
}

const app = new App();
app.init();
