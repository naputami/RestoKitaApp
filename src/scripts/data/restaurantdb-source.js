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
  static async postReview(data) {
    const response = await fetch(API_ENPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}
export default restaurantDbSource;
