import * as testFactories from './helpers/testFactories';
import favoriteRestoIdb from '../src/scripts/data/favorite-restaurant-idb';


describe('Unliking a restaurant', ()=> {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  beforeEach(async () => {
    addLikeButtonContainer();
    await favoriteRestoIdb.putRestaurant({id: 1});
  });
  afterEach(async () => {
    favoriteRestoIdb.deleteRestaurant(1);
  });
  it('Should show the unlike button when the restaurant has been liked before', async () => {
    await testFactories.createLikeButtonPresenterwithRestaurant({id: 1});

    expect(document.querySelector('liked-button')).toBeTruthy();
  });
  it('Should not show the unlike button when the restaurant has not been liked before', async () => {
    await testFactories.createLikeButtonPresenterwithRestaurant({id: 1});

    expect(document.querySelector('like-button')).toBeFalsy();
  });
  it('Should be able to remove liked movie from the list', async () => {
    await testFactories.createLikeButtonPresenterwithRestaurant({id: 1});
    document.querySelector('liked-button').dispatchEvent(new Event('click'));
    expect(await favoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });
  it('Should not throw error if the unliked movie is not on the list', async () => {
    await testFactories.createLikeButtonPresenterwithRestaurant({id: 1});
    await favoriteRestoIdb.deleteRestaurant(1);
    document.querySelector('liked-button').dispatchEvent(new Event('click'));
    expect(await favoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });
});
