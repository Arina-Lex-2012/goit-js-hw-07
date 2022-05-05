import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
  
const elements = galleryItems.map((item) => {
  const galleryItemEl = document.createElement('div');
  galleryItemEl.classList.add("gallery__item");

  const galleryLinkEl = document.createElement('a');
  galleryLinkEl.classList.add('gallery__link');
  galleryLinkEl.href = `${item.original}`;
  

  const galleryImageEl = document.createElement('img');
  galleryImageEl.classList.add('gallery__image');
  galleryImageEl.src = `${item.preview}`;
  galleryImageEl.setAttribute('data-source', `${item.original}`);
  galleryImageEl.alt = `${item.description}`;
  
  galleryLinkEl.append(galleryImageEl);
  galleryItemEl.append(galleryLinkEl);

  return galleryItemEl;
});

galleryEl.append(...elements);


const onClickItemGallery = function (event) {
  event.preventDefault();
  let currentUrl;

  if (event.target.tagName === 'IMG') {
    currentUrl = event.target.dataset.source;

    const modalEl = basicLightbox.create(`
    <div class="modal">
        <a><img src="${currentUrl}"></a>
    </div>
`, {
      onShow: (modalEl) => {
    modalEl.element().querySelector('a').onclick = modalEl.close;
      }
    });

    modalEl.show();
  };
};

galleryEl.addEventListener('click', onClickItemGallery);












// for (let i = 0; i < galleryItems.length; i += 1){
//   const galleryEl = document.querySelector('.gallery');

//   const galleryItemEl = document.createElement('div');
//   galleryItemEl.classList.add("gallery_item");


//   const galleryLinkEl = document.createElement('a');
//   galleryLinkEl.classList.add('gallery_link');
//   galleryLinkEl.href = `${galleryItems[i].original}`;

//   const galleryImageEl = document.createElement('img');
//   galleryImageEl.classList.add('gallery_image');
//   galleryImageEl.src = `${galleryItems[i].preview}`;
//   galleryImageEl.setAttribute('data-source', `${galleryItems[i].preview}`);
//   galleryImageEl.alt = `${galleryItems[i].description}`;

//   galleryItemEl.append(galleryLinkEl);

//   galleryEl.append(galleryItemEl);

// }

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */