import {
    pictures
} from "./data/pictures.js";


function searchPicture() {
    const searchField = document.getElementById('search-field-name');
    const searchTerm = searchField.value.trim();
    const searchResult = pictures.filter(pic => {
        return pic.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    displayPictures(searchResult);
}

document.getElementById('search-name-btn').addEventListener('click', searchPicture);



function searchArtist() {
    const searchField = document.getElementById('search-field-artist');
    const searchTerm = searchField.value.trim();
    const searchResult = pictures.filter(pic => {
        return pic.artist.toLowerCase().includes(searchTerm.toLowerCase())
    });
    displayPictures(searchResult);
}

document.getElementById('search-artist-btn').addEventListener('click', searchArtist);


function displayPictures(arrayData) {
    const container = document.getElementById('products-container');
    let html = '';

    arrayData.forEach(pic => {

        html +=
            `<div class="card" style="width: 18rem;">
    <img src="${pic.getImg()}"
        class="card-img-top" alt="${pic.getAlt()}">
    <div class="card-body">
        <h5 class="card-title">${pic.getName()}</h5>
        <p class="card-artist">${pic.getArtist()}</p>
        <h5 class="card-price"> ${pic.getPrice()}</h5>   
        <p class="text-danger">${pic.getInStock()}</p>
    </div>
</div>`;
    })
    container.innerHTML = html;
}

displayPictures(pictures);









/* function addTax(price) {
    if (!price || price <= 0 || typeof (price) === 'string') {
        throw Error('Please enter valid price');
    }
    const vat = 1.17
    const fullPrice = (price * vat).toFixed(2);
    return fullPrice;
} */