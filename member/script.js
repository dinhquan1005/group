document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const profileSection = this.closest(".profile");
      const shortDescription =
        profileSection.querySelector(".short-description");
      const fullDescription = profileSection.querySelector(".full-description");

      if (
        fullDescription.style.display === "none" ||
        fullDescription.style.display === ""
      ) {
        fullDescription.style.display = "block";
        shortDescription.style.display = "none";
        this.textContent = "Tạm biệt";
      } else {
        fullDescription.style.display = "none";
        shortDescription.style.display = "block";
        this.textContent = "Có";
      }
    });
  });
});
