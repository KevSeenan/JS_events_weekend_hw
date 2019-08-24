document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-form-item');
  form.addEventListener('submit', handleNewFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
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


  return bandListItem;
}

const handleDeleteAllClick = function (event) {
  const bandList = document.querySelector('#band-list');
  bandList.innerHTML = '';
}
