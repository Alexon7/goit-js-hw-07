import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onOpenBigImg)

console.log(galleryItems);
console.log(createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(items) {
    return galleryItems.map(({preview, original, description })=> {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('');
   
}

function onOpenBigImg(evt) {
    evt.preventDefault();
    
    const imgSource = evt.target.dataset.source;    
    if (!imgSource){
        return;
    }
    
   
    console.log(imgSource);
       console.log(evt.target.alt);

  const instance = basicLightbox.create(
    `
    <img src="${imgSource}" alt="${evt.target.alt}">
`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(evt) {
    if (evt.code === 'Escape') {
      window.removeEventListener('keydown', onEscKeyPress);
      instance.close();
    }
  }

//      const imgSource = evt.target.dataset.source;
//     instance = basicLightbox.create(`<div class="modal"><img src="${imgSource}" alt="${evt.target.alt}"></div>`)
//     instance.show();

//     document.addEventListener("keydown", closeModal);
// }

// function closeModal(evt) {
//     const key = evt.key;
//     if (key === "Escape" ) {
//         document.removeEventListener("keydown", closeModal);
//         instance.close();
//     }
}





console.log(galleryItems);



