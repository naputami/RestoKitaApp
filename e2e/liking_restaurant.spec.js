const assert = require('assert');
Feature('liking restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty favorite restaurant', ({I}) => {
  I.see('Kamu belum menambahkan restoran favorit.', '.warning-message');
});


Scenario('liking one restaurant', async ({I}) => {
  I.see('Kamu belum menambahkan restoran favorit.', '.warning-message');
  I.amOnPage('/');
  I.seeElement('#restaurantListContainer');
  I.waitForElement('restaurant-list', 5);
  I.seeElement('restaurant-list');
  I.seeElement('restaurant-item');
  I.seeElement('restaurant-item a');
  const firstRestaurant = locate('restaurant-item a').first();
  I.click(firstRestaurant);
  I.waitForElement('h3', 5);
  const firstRestaurantName = await I.grabTextFrom('h3');
  I.seeElement('like-button');
  I.click('like-button');
  I.seeElement('#liked-toast');
  I.amOnPage('/#/favorites');
  I.waitForElement('restaurant-item', 5);
  I.seeElement('restaurant-item');
  const favoritedRestaurantName = await I.grabTextFrom('restaurant-item h2');
  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});
