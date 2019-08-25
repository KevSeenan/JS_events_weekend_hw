document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-form-item');
  form.addEventListener('submit', handleNewFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

  const purchasedAlbum = document.querySelector('#band-list');
  purchasedAlbum.addEventListener('click', handlePurchasedAlbum);
});

const handleNewFormSubmit = function (event) {
  event.preventDefault();

  const bandListItem = createBandListItem(event.target);
  const bandList = document.querySelector('#band-list');
  bandList.appendChild(bandListItem);

  event.target.reset();
}



const createBandListItem = function (form) {

  const bandListItem = document.createElement('div');
  bandListItem.classList.add('band-list-item');

  const band = document.createElement('h2');
  band.textContent = form.band.value;
  bandListItem.appendChild(band);

  const album = document.createElement('h3');
  album.textContent = form.album.value;
  bandListItem.appendChild(album);

  const genre = document.createElement('p');
  genre.textContent = form.genre.value;
  bandListItem.appendChild(genre);

  const rating = document.createElement('p');
  rating.textContent = form.rating.value;
  bandListItem.appendChild(rating);

  const purchased = document.createElement('p');
  purchased.textContent = "Have this album?"
  bandListItem.appendChild(purchased);

  return bandListItem;
}


const handleDeleteAllClick = function (event) {
  const bandList = document.querySelector('#band-list');
  bandList.innerHTML = '';
}

const handlePurchasedAlbum = function (event) {
  const result = document.querySelector('.band-list-item');
  event.target.textContent = 'I have this album';
}
