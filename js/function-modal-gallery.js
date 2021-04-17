import { ulGallery } from './gallery-items';
import { refs } from './index';

export const openGallery = function (event) {
    refs.listGalleryEl.removeEventListener('click', openGallery);
    refs.lightboxEl.addEventListener('click', closeModal);
    window.addEventListener('keydown', closeModal);
    refs.lightboxButtonEl.addEventListener('click', closeModal);
    window.addEventListener('keyup', flickThrough);

    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
    }
    refs.lightboxEl.classList.add('is-open');
    addAttributeOnLightboxImage(event);
};

function addAttributeOnLightboxImage(event) {
    refs.lightboxImageEl.src = event.target.dataset.source;
    refs.lightboxImageEl.alt = event.target.alt;
};

//closing modal

function closeModal(event) {

    if (event.target.nodeName === 'BUTTON' || event.code === 'Escape' || event.target === refs.lightboxOverlayEl) {
        refs.listGalleryEl.addEventListener('click', openGallery);
        refs.lightboxEl.removeEventListener('click', closeModal);
        window.removeEventListener('keydown', closeModal);
        refs.lightboxButtonEl.removeEventListener('click', closeModal);
        refs.lightboxEl.classList.remove('is-open');
        refs.lightboxImageEl.removeAttribute('src');
        refs.lightboxImageEl.removeAttribute('alt');
        window.removeEventListener('keyup', flickThrough);
    };
};


//right and left
let indexCurrentPhoto;
function flickThrough(event) {
    findIndex();

    if (event.code === 'ArrowRight') {
        if (indexCurrentPhoto === ulGallery.length - 1) {
            indexCurrentPhoto = -1;
        };
        refs.lightboxImageEl.src = ulGallery[indexCurrentPhoto + 1].original;
        refs.lightboxImageEl.alt = ulGallery[indexCurrentPhoto + 1].description;
        return refs.lightboxImageEl;
    };

    if (event.code === 'ArrowLeft') {
        if (indexCurrentPhoto === 0) {
            indexCurrentPhoto = ulGallery.length;
        };
        refs.lightboxImageEl.src = ulGallery[indexCurrentPhoto - 1].original;
        refs.lightboxImageEl.alt = ulGallery[indexCurrentPhoto - 1].description;
        return refs.lightboxImageEl;
    };
};

function findIndex() {
    ulGallery.forEach((el, i) => {
        if (el.description === refs.lightboxImageEl.getAttribute('alt')) {
            return indexCurrentPhoto = i;
        }
    })
};