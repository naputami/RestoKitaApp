import API_ENPOINT from '../globals/api-endpoint';
class restaurantDbSource {
  static async loadRestaurantList() {
    const response = await fetch(API_ENPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
  static async detailRestaurant(id) {
    const response = await fetch(API_ENPOINT.DETAIL(id));
    return response.json();
  }
}
export default restaurantDbSource;
