// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const listEl = document.querySelector('.gallery');
function createHtml (items) {
    return items.map((item) => {
       return `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>`
    }).join('');
}
listEl.insertAdjacentHTML('beforeend',createHtml(galleryItems) );

const lightbox = new SimpleLightbox('.gallery a')

// listEl.addEventListener('click' ,onImgClick )
// function onImgClick(evt){
//     evt.preventDefault();
//     if(evt.target.nodeName !== 'IMG'){
//         return;
//     }
//     lightbox.open(evt.target.dataset.href);

//     document.addEventListener('keydown',onEscPress);
    
//     document.body.addEventListener('click', onBackdropClick);
    
// }






