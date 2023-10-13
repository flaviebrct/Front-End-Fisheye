export const displayTotalLikes = (data) => {
  const likesButtons = document.querySelectorAll(".like-button");
  const toastTotalLikes = document.querySelector(".photographer-total-like");

  function updateTotalLikes() {
    const totalLikes = data.reduce((acc, data) => acc + data.likes, 0);
    toastTotalLikes.innerHTML = `${totalLikes}`;
  }

  updateTotalLikes();

  console.log(likesButtons);

  likesButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const media = data.find((media) => media.id == button.dataset.id);

      !button.classList.contains("liked") ? media.likes++ : media.likes--;

      button.classList.toggle("liked");

      const likesElement = button.previousElementSibling;
      likesElement.textContent = `${media.likes}`;

      updateTotalLikes();
    });
  });
};
