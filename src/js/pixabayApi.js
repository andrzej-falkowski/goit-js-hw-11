'use strict';

import axios from 'axios';
// export {fetchImages};

const apiKey = '43601558-493cea9937d74fa86e08084b6';
const baseUrl = 'https://pixabay.com/api/';
const searchForm = document.querySelector('form#search-form');

const queryParams = 'image_type=photo&safesearch=true&orientation=horizontal';
// const searchForm = document.querySelector('search-form');
const inputData = searchForm.elements['searchQuery'];
// const inputData = document.getElementById('search-input');

const loadMore = document.querySelector('.load-more');


const submit = document.querySelector('form#search-form button[type=submit]');
const resultsGallery = document.querySelector('.gallery');

let searchQuery = ""
let page = 1;



export async function searchImages() {
  searchQuery = inputData.value;
  console.log(inputData.value)
  const response = await axios.get(
    `${baseUrl}?key=${apiKey}&${queryParams}&q=${searchQuery}`);
const data = await [response.data];
console.log(response.data);

// if (page === 1){
//   resultsGallery.innerHTML = ""
// }

resultsGallery.innerHTML = data.map((result) => {
  `  <div class="photo-card">
  <img src="${result.previewURL}" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
  </div>`
}).join("")

page++
if (page > 1){
loadMore.style.display = 'block';
}
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  page = 1;
  searchImages()
})

// const button = document.querySelector('');
// export async function searchImages(searchQuery) {
// inputData = searchQuery.value

//   const response = await axios.get(
//     `${baseUrl}?key=${apiKey}&${queryParams}&q=${searchQuery}`
//   );
//   const data = await response.data;
//   // console.log(data);
//   return data;
// }
