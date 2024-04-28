'use strict'

import axios from 'axios';
export {fetchImages};

const apiKey = '43601558-493cea9937d74fa86e08084b6';
const baseUrl = 'https://pixabay.com/api/';
const searchQuery = document.querySelector('input[name="searchquery"]').textContent;


const button = document.querySelector('')

const fetchImages = async () => {
    const response = await axios.get(`${baseUrl}?key=${apiKey}&q=${searchQuery}`)
    const data = await response.data
    console.log(data);
    return data;
}