import { galleryItems } from './gallery-items.js';
// Change code below this line
// const galleryContainer = document.querySelector('.gallery');


// galleryContainer.insertAdjacentHTML('beforeend', createGallery(galleryItems));


// function createGallery(galleryItems) {
//     return galleryItems.map(({preview, original, description })=> {
//         return `<a class="gallery__item" href="${original}">
//   <img class="gallery__image" src="${preview}" alt="${description}" />
// </a>`;
//     }).join('');
    
// }

const galleryContainer = document.querySelector('.gallery');


  const createGalleryEl = galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join('');
    
  galleryContainer.insertAdjacentHTML('beforeend', createGalleryEl);


 
 new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
    captionDelay: 250,
  captionPosition: 'bottom',
});

console.log(galleryItems);
