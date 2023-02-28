import favoriteRestoIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as testFactories from './helpers/testFactories';


describe('Liking A Restaurant', () => {
  const addLikeButtonandToastContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div><div id="toast-container"></div>';
  };
  beforeEach(() => {
    addLikeButtonandToastContainer();
  });

  it('Should show the like button when the restaurant has not been liked before', async () => {
    await testFactories.createLikeButtonPresenterwithRestaurant({id: 1});

    expect(document.querySelector('like-button')).toBeTruthy();
  });
  it('Should not show toast when the like button not clicked', async () => {
    await testFactories.createLikeButtonPresenterwithRestaurant({id: 1});

    expect(document.querySelector('.toast')).toBeFalsy();
  });
  it('Should not show the unlike button when the restaurant has not been liked before', async () => {
    await testFactories.createLikeButtonPresenterwithRestaurant({id: 1});

    expect(document.querySelector('liked-button')).toBeFalsy();
  });
  it('Should be able to like the restaurant', async () => {
    await testFactories.createLikeButtonPresenterwithRestaurant({id: 1});

    document.querySelector('like-button').dispatchEvent(new Event('click'));
    const restaurant = await favoriteRestoIdb.getRestaurant(1);
    expect(restaurant).toEqual({id: 1});
    favoriteRestoIdb.deleteRestaurant(1);
  });
  it('Should not add the restaurant again when it\'s already liked', async () => {
    await testFactories.createLikeButtonPresenterwithRestaurant({id: 1});

    await favoriteRestoIdb.putRestaurant({id: 1});
    document.querySelector('like-button').dispatchEvent(new Event('click'));
    expect(await favoriteRestoIdb.getAllRestaurants()).toEqual([{id: 1}]);
    favoriteRestoIdb.deleteRestaurant(1);
  });
  it('should add the restaurant when it has not an id', async () => {
    await testFactories.createLikeButtonPresenterwithRestaurant({});

    document.querySelector('like-button').dispatchEvent(new Event('click'));
    expect(await favoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });
});
