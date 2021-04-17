import { ulGallery } from './gallery-items';

export const refs = {
    listGalleryEl: document.querySelector('.js-gallery'),
    lightboxButtonEl: document.querySelector('button[data-action="close-lightbox"]'),
    lightboxEl: document.querySelector('.js-lightbox'),
    lightboxImageEl: document.querySelector('.lightbox__image'),
    lightboxOverlayEl: document.querySelector('.lightbox__overlay'),
    arrImgPreviewEl: document.querySelectorAll('.gallery__image'),
};

import {
    makeGallery
} from './make-gallery';
makeGallery(ulGallery);
import {
    openGallery
} from './function-modal-gallery';
refs.listGalleryEl.addEventListener('click', openGallery);


//lazy
// if ('loading' in HTMLImageElement.prototype) {

//     refs.arrImgPreviewEl.forEach(img => {
//         img.setAttribute('data-src', img.src);
//         img.setAttribute('loading', 'lazy');
//     });
// } else {
//     const scriptEl = document.createElement('script');
//     scriptEl.src = "./js/lazysizes.min.js";
//     scriptEl.async = "";
//     const bodyEl = document.querySelector('body');
//     bodyEl.append(scriptEl);
//     img.classList.add('lazyload');
// };