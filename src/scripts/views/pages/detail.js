import urlParser from '../../routes/url-parser';
import restaurantDbSource from '../../data/restaurantdb-source';
import createDetailTemplate from '../templates/detail-template';

const detail = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>
        <div class="detail-main">
          <h3 class="detail-main__title">Informasi Restoran</h3>
          <div id="detail-content"></div>
        </div>
      </div>
         
      `;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantDbSource.detailRestaurant(url.id);
    const restaurantElement = document.querySelector('#detail-content');
    restaurantElement.innerHTML = createDetailTemplate(restaurant.restaurant);
    console.log(restaurant);
  },
};

export default detail;
