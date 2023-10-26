export function DropDown() {
  const filters = ["Popularité", "Date", "Titre"];

  const filterContainer = document.querySelector(".filter-container");

  // Create the dropdown
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
  button.innerHTML = "Selectionner";
  button.focus();

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

  // Using a loop to create all the filters list items
  filters.forEach((value) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("role", "option");
    listItem.setAttribute("tabindex", "0");
    listItem.setAttribute("data-value", value);
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

  const dropdownButton = document.querySelector(".dropdown-toggle");
  const hidenPart = document.querySelector(".dropdown-list");

  // Function to open the dropdown
  function openDropDown() {
    hidenPart.classList.remove("hidden");
    hidenPart.setAttribute("aria-expanded", "true");
    dropdownButton.classList.toggle("open");
  }

  // Function to close the dropdown
  function closeDropDown() {
    hidenPart.classList.add("hidden");
    hidenPart.setAttribute("aria-expanded", "false");
    dropdownButton.classList.toggle("open");
  }

  // Event listener that open the dropdown by clicking
  dropdownButton.addEventListener("click", openDropDown);

  // Event listener that open the dropdown with keybord navigation
  dropdownButton.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "Enter":
        openDropDown();
        break;
    }
  });

  // Event listener that close the dropdown by clicking
  hidenPart.addEventListener("click", closeDropDown);

  // Event listener that close the dropdown with keybord navigation
  hidenPart.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "Escape":
        closeDropDown();
        break;
    }
  });

  const allFilters = Array.from(
    document.getElementsByClassName("listbox-item")
  );
  allFilters.forEach((element) => {
    // Event listener that update the dropdown value with the selected filter by clicking
    element.addEventListener("click", () => {
      const elementValue = element.getAttribute("data-value");
      button.innerHTML = `${elementValue}`;
      button.appendChild(arrow);
    }),
      // Event listener that update the dropdown value with the selected filter with keybord navigation
      element.addEventListener("keyup", (e) => {
        switch (e.key) {
          case "Enter": {
            const elementValue = element.getAttribute("data-value");
            button.innerHTML = `${elementValue}`;
            button.appendChild(arrow);
            break;
          }
        }
      });
  });
}
