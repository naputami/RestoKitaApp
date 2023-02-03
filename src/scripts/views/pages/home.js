import restaurantDbSource from '../../data/restaurantdb-source';
const home = {
  async render() {
    return `
        <h2 class="main__title">Temukan rekomendasi restoran di sini!</h2>
        <restaurant-list></restaurant-list>
      `;
  },

  async afterRender() {
    const restaurantsData = await restaurantDbSource.loadRestaurantList();
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurants = restaurantsData;
  },
};

export default home;
