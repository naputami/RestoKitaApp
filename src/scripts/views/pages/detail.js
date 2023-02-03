import urlParser from '../../routes/url-parser';
import restaurantDbSource from '../../data/restaurantdb-source';

const detail = {
  async render() {
    return `
      <section class="restaurant-detail">
      <h2 class="restaurant-detail__title">Detail Page</h2>
      </section>
       
      `;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantDbSource.detailRestaurant(url.id);
    console.log(restaurant);
  },
};

export default detail;
