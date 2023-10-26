export const updateLike = (data) => {
  const likesButtons = document.querySelectorAll(".like-button");
  const toastTotalLikes = document.querySelector(".photographer-total-like");

  // Function who update the total of likes of all the photogrpaher's medias
  function updateTotalLikes() {
    const totalLikes = data.reduce((acc, data) => acc + data.likes, 0);
    toastTotalLikes.innerHTML = `${totalLikes}`;
  }

  updateTotalLikes();

  // Updates the likes of a specific media by clicking on the heart button
  likesButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const media = data.find((media) => media.id === button.dataset.id);

      // ternary condition to unlike the image if the user had already liked it
      !button.classList.contains("liked") ? media.likes++ : media.likes--;

      button.classList.toggle("liked");

      // Display the new number of like for the specific media
      const likesElement = button.previousElementSibling;
      likesElement.textContent = `${media.likes}`;

      // Update the total of likes of all the photogrpaher's medias
      updateTotalLikes();
    });
  });
};
