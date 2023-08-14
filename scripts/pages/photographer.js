import { Api } from "../api/api.js";

class App {
  constructor() {
    this.$photographersWrapper = document.querySelector("#main");
    this.api = new Api("data/photographers.json");
  }

  async init() {
    const { media : mediasData, photographers : photographersData} = await this.api.get();
    
    const params = new URL(document.location).searchParams;
    let id = parseInt(params.get("id"));
    
    const filteredPhotographer = photographersData.filter((proprety) => proprety.id === id)[0];
    
    console.log(filteredPhotographer);
  }
}

const app = new App();
app.init();

