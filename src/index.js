'use strict';

import { fetchImages } from "./pixabayApi";

fetchImages();

const searchForm = document.querySelector('form#search-form')
const submit = document.querySelector('form#search-form button[type=submit]')

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
})