import urlParser from '../../routes/url-parser';
import restaurantDbSource from '../../data/restaurantdb-source';
import createDetailTemplate from '../templates/detail-template';
import spinner from '../templates/spinner-template';
import postInputReview from '../../utils/post-review';
import likeButtonInitiator from '../../utils/like-button-initiator';
import favoriteRestoIdb from '../../data/favorite-restaurant-idb';

const detail = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>
        <div class="detail-main">
          <h2 class="page-title">Informasi Restoran</h2>
          <div id="detail-content"></div>
        </div>
        <div id="toast-container"></div>
        <div id="likeButtonContainer"></div>
      </div>
         
      `;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const main = document.querySelector('.detail-main');
    const loading = document.querySelector('#loading');
    const restaurantElement = document.querySelector('#detail-content');
    main.style.display = 'none';
    loading.innerHTML = spinner();


    try {
      const data = await restaurantDbSource.detailRestaurant(url.id);
      restaurantElement.innerHTML = createDetailTemplate(data.restaurant);

      likeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: favoriteRestoIdb,
        toastContainer: document.querySelector('#toast-container'),
        restaurant: {
          id: data.restaurant.id,
          name: data.restaurant.name,
          city: data.restaurant.city,
          rating: data.restaurant.rating,
          pictureId: data.restaurant.pictureId,
          description: data.restaurant.description,
        },
      });

      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      restaurantElement.innerHTML = `<p class="warning-message">Gagal Memuat Halaman. Mohon refresh halaman ini!</p>`;
      main.style.display = 'block';
      loading.style.display = 'none';
    }

    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        alert('Nama dan ulasan harus diisi!');
        return;
      }
      postInputReview(url, nameInput.value, reviewInput.value);
      nameInput.value = '';
      reviewInput.value = '';
    });
  },
};

export default detail;
