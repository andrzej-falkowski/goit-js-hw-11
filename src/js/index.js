'use strict';

import { searchImages } from './pixabayApi';

const searchForm = document.querySelector('form#search-form');
const submit = document.querySelector('form#search-form button[type=submit]');
const resultsGallery = document.querySelector('.gallery');

searchImages();

// searchForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   searchImages().then(query => {
//     // console.log(query);
//     const markup = query
//       .map(query => {
//         return `  <div class="photo-card">
// <img src="${query.previewURL}" alt="" loading="lazy" />
// <div class="info">
//   <p class="info-item">
//     <b>Likes</b>
//   </p>
//   <p class="info-item">
//     <b>Views</b>
//   </p>
//   <p class="info-item">
//     <b>Comments</b>
//   </p>
//   <p class="info-item">
//     <b>Downloads</b>
//   </p>
// </div>
// </div>`;
//       })
//       .join('');
//   });
//   resultsGallery.innerHTML = markup;
// });

// searchQuery = document.querySelector('input[name="searchquery"]')
// let inputData = ""
// let page = 1;
// const getInfo = () => {
//   // const searchQuery = document.querySelector(
//   //   'input[name="searchquery"]'
//   // ).textContent;
//   inputData = searchQuery.value;
//   return console.log(inputData)
// }

// getInfo()
