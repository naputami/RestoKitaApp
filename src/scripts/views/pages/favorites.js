import favoriteRestoIdb from '../../data/favorite-restaurant-idb';
import spinner from '../templates/spinner-template';
const favorites = {
  async render() {
    return `
    <div class="container">
      <div id="loading"></div>
      <div class="favorite-main">
        <h2 class="page-title">Restoran Favoritmu</h2>
        <div id= "favorite-list">
        </div>
      </div> 
    </div>
      `;
  },

  async afterRender() {
    const main = document.querySelector('.favorite-main');
    const loading = document.querySelector('#loading');
    const favoriteListContainer = document.querySelector('#favorite-list');
    main.style.display = 'none';
    loading.innerHTML = spinner();

    try {
      const favoriteRestaurantsData = await favoriteRestoIdb.getAllRestaurants();
      if (favoriteRestaurantsData.length === 0) {
        favoriteListContainer.innerHTML = `<p class="warning-message">Kamu belum menambahkan restoran favorit.</p>`;
      }
      const restaurantListElement = document.createElement('restaurant-list');
      restaurantListElement.restaurants = favoriteRestaurantsData;
      favoriteListContainer.appendChild(restaurantListElement);
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      favoriteListContainer.innerHTML = `<p class="warning-message">Gagal Memuat Halaman. Moh<on refresh halaman ini!</p>`;
      main.style.display = 'block';
      loading.style.display = 'none';
    }
  },
};

export default favorites;
