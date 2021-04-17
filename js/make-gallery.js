import { refs } from './index';

//makeGallery
export const makeGallery = (array) => {
  const result = array.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link"
    href=${original}>
    <img class="gallery__image"
      src=${preview}
      data-source=${original}
      alt='${description}'/>
  </a>
</li>`);
  refs.listGalleryEl.innerHTML = result.join('');
};
