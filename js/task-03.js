const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const allGallery = document.querySelector('.gallery');

// for (const image of images) {
//   const li = document.createElement('li');
//   const imageEl = document.createElement('img')
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.width = 320;
//   li.appendChild(imageEl);
//   allGallery.appendChild(li);
// }


const galleryEl = document.querySelector(".gallery");
const makeGallaryImageRowMarkup = (image) => {
  const { url, alt } = image;

  return `
  <li style = 'display: block'>
    <img src = ${url}, alt = ${alt}, width = 240>
  </li>
  `;
};

const gallaryImageRowMarkup = images.map(makeGallaryImageRowMarkup).join("");

galleryEl.insertAdjacentHTML("beforeend", gallaryImageRowMarkup);