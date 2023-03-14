import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const cardsImg = makeImagesGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", cardsImg);
galleryList.addEventListener("click", onModalImgClick);

function makeImagesGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(``);
}

function onModalImgClick(e) {
  e.preventDefault();
 
  if (e.target.nodeName !== "IMG") {
    return;
  }

  window.addEventListener("keydown", onEscapePress);

  const urlLargeImg = e.target.getAttribute("data-source");
  const instance = basicLightbox.create(`
    <img src="${urlLargeImg}" width="800" height="600">
`);
  instance.show();
}

function onEscapePress(event) {
  if (event.code !== "Escape") {
    return;
  }

  const closeEl = document.querySelector(".basicLightbox");
    closeEl.remove();
    window.removeEventListener("keydown", onEscapePress);
}

document.getElementsByTagName("img").ondragstart = function () {
  return false;
};
