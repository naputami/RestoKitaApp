import favoriteRestoIdb from '../../data/favorite-restaurant-idb';
const favorites = {
  async render() {
    return `
    <div class="container">
      <div id="loading"></div>
      <div class="favorite-main">
        <h2 class="main__title">Restoran Favoritmu</h2>
        <restaurant-list></restaurant-list>
      </div> 
    </div>
      `;
  },

  async afterRender() {
    const favoriteRestaurantsData = await favoriteRestoIdb.getAllRestaurants();
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurants = favoriteRestaurantsData;
  },
};

export default favorites;
