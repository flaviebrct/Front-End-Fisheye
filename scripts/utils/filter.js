import { Gallery } from "../templates/MediasGallery.js";

export function DropDown() {
  const options = ["Popularité", "Date", "Titre"];

  function createDropDown() {
    const filterContainer = document.querySelector(".filter-container");

    const label = document.createElement("p");
    label.setAttribute("id", "dropdown-label");
    label.setAttribute("role", "label");
    label.innerText = "Trier par";

    const dropdownContainer = document.createElement("div");
    dropdownContainer.classList.add("dropdown");

    const button = document.createElement("button");
    button.setAttribute("aria-haspopup", "listbox");
    button.setAttribute("type", "button");
    button.setAttribute("aria-labelledby", "dropdown-label");
    button.classList.add("dropdown-toggle");
    button.innerHTML = options[0];

    const arrow = document.createElement("img");
    arrow.setAttribute("src", "assets/icons/arrow.svg");
    arrow.setAttribute(
      "alt",
      "boutton permettant d'afficher la liste des filtres"
    );
    arrow.classList.add("arrow");

    button.appendChild(arrow);

    const dropdownList = document.createElement("ul");
    dropdownList.setAttribute("role", "listbox");
    dropdownList.setAttribute("aria-expanded", "false");
    dropdownList.classList.add("dropdown-list", "hidden");

    options.forEach((value) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("role", "option");
      listItem.setAttribute("tabindex", "0");
      listItem.classList.add("listbox-item", `${value.toLowerCase()}`);
      listItem.innerHTML = `${value}`;
      dropdownList.appendChild(listItem);

      if (value.toLowerCase() === "popularité") {
        const arrowOpen = document.createElement("img");
        arrowOpen.setAttribute("src", "assets/icons/arrow.svg");
        arrowOpen.setAttribute(
          "alt",
          "boutton permettant d'afficher la liste des filtres"
        );
        arrowOpen.classList.add("arrow", "open");
        listItem.appendChild(arrowOpen);
      }
    });

    dropdownContainer.appendChild(button);
    dropdownContainer.appendChild(dropdownList);

    filterContainer.appendChild(label);
    filterContainer.appendChild(dropdownContainer);
  }
  createDropDown();

  const dropdownButton = document.querySelector(".dropdown-toggle");
  const hidenPart = document.querySelector(".dropdown-list");

  // Écouteur d'évenement permet de dérouler le drop down
  dropdownButton.addEventListener("click", () => {
    console.log("open");
    hidenPart.classList.remove("hidden");
    hidenPart.setAttribute("aria-expanded", "true");
    dropdownButton.classList.toggle("open");
  });

  document.querySelector(".dropdown-list").addEventListener("click", () => {
    console.log("close");
    hidenPart.classList.add("hidden");
    hidenPart.setAttribute("aria-expanded", "false");
    dropdownButton.classList.toggle("open");
  });
}

export function sortMedia(photographer, filter) {
  const data = photographer;

  // const filter = document.querySelector("#sorting-select").value;

  let sortedMedias;

  if (filter === "Popularité") {
    console.log(filter, "dans le if");
    sortedMedias = data.sort((a, b) => b.likes - a.likes);
  } else if (filter === "Date") {
    console.log(filter, "dans le if");
    sortedMedias = data.sort((a, b) => a.likes - b.likes);
  }

  return sortedMedias;
}
