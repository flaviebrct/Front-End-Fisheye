class App {
  constructor() {
    this.$photographersWrapper = document.querySelector(
      ".photographer_section"
    );
    this.protographersApi = new PhotographerApi("data/photographers.json");
  }

  async init() {
    const photographersData = await this.protographersApi.getPhotographers();

    console.log(photographersData);

    photographersData
      .map((photographer) => new PhotographerConstructor(photographer))
      .forEach((photographer) => {
        const Template = new PhotographerCard(photographer);
        this.$photographersWrapper.appendChild(
          Template.createPhotographerCard()
        );
      });
  }
}

const app = new App();
app.init();
