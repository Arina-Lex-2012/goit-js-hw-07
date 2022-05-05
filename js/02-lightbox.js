import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery');
  
const elements = galleryItems.map((item) => {
  const galleryItemEl = document.createElement('a');
  galleryItemEl.classList.add("gallery__item");
  galleryItemEl.href = `${item.original}`;
  
  const galleryImageEl = document.createElement('img');
  galleryImageEl.classList.add('gallery__image');
  galleryImageEl.src = `${item.preview}`;
  galleryImageEl.alt = `${item.description}`;
 
  galleryItemEl.append(galleryImageEl);

  return galleryItemEl;
});

galleryEl.append(...elements);

const onClickItemGallery = function (event) {
    event.preventDefault();
    let currentUrl;

    if (event.target.tagName === 'IMG') {
        currentUrl = event.target.closest('a').href;

        const modalEl = new SimpleLightbox('.gallery a', { /* options */ });
    };
};

galleryEl.addEventListener('click', onClickItemGallery);



