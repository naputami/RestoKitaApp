import likeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import favoriteRestoIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonPresenterwithRestaurant = async (restaurant) => {
  await likeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: favoriteRestoIdb,
    toastContainer: document.querySelector('#toast-container'),
    restaurant,
  });
};
export {createLikeButtonPresenterwithRestaurant};
