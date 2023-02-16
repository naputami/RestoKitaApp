import {itActsAsFavoriteRestaurantModel} from './contracts/favoriteRestaurantContract';
import favoriteRestoIdb from '../src/scripts/data/favorite-restaurant-idb';


describe('Favorite restaurant idb contract test implementation', () => {
  afterEach(async () => {
    (await favoriteRestoIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await favoriteRestoIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(favoriteRestoIdb);
});
