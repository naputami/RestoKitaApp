import restaurantDbSource from '../../data/restaurantdb-source';
import spinner from '../templates/spinner-template';
const home = {
  async render() {
    return `
        <div class="container">
          <div id="loading"></div>
          <div class="home-main">
            <h2 class="page-title">Temukan rekomendasi restoran di sini!</h2>
            <div id="restaurantListContainer">
            </div>
          </div>
        </div>
       
      `;
  },

  async afterRender() {
    const main = document.querySelector('.home-main');
    const loading = document.querySelector('#loading');
    const restaurantListContainer = document.querySelector('#restaurantListContainer');
    main.style.display = 'none';
    loading.innerHTML = spinner();

    try {
      const restaurantsData = await restaurantDbSource.loadRestaurantList();
      const restaurantListElement = document.createElement('restaurant-list');
      restaurantListElement.restaurants = restaurantsData;
      restaurantListContainer.appendChild(restaurantListElement);
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      restaurantListContainer.innerHTML = `<p class="warning-message"> Gagal Memuat Halaman. Moh<on refresh halaman ini! </p>`;
      main.style.display = 'block';
      loading.style.display = 'none';
    }
  },
};

export default home;
