const colorNavItems = document.querySelectorAll(".colornav__list-item");
const imageIds = ["imageSide", "imageMagsafe", "imageTop"];
const imageTypes = ["side", "magsafe", "top"];

colorNavItems.forEach(item => {
  item.addEventListener("click", () => {
    const color = item.getAttribute("data-color");

    imageIds.forEach((id, index) => {
      const imageElement = document.getElementById(id);

      if (imageElement) {
        imageElement.src = `./src/images/colors/design_${imageTypes[index]}_${color}.jpg`;
      }
    });

    colorNavItems.forEach(navItem => navItem.classList.remove("active"));

    item.classList.add("active");
  });
});