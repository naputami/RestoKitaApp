const assert = require('assert');
Feature('unliking restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty favorite restaurant', ({I}) => {
  I.see('Kamu belum menambahkan restoran favorit.', '.warning-message');
});


Scenario('unliking one restaurant', async ({I}) => {
  I.see('Kamu belum menambahkan restoran favorit.', '.warning-message');
  // liking one restaurant
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
  // viewing liked restaurant from favorites page
  I.amOnPage('/#/favorites');
  I.waitForElement('restaurant-item', 5);
  I.seeElement('restaurant-item');
  const favoritedRestaurantName = await I.grabTextFrom('restaurant-item h2');
  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
  // clicking item on favorites page
  I.seeElement('restaurant-item a');
  I.click('restaurant-item a');
  // clicking unlike button from detail page
  I.waitForElement('liked-button', 5);
  I.click('liked-button');
  I.seeElement('#unliked-toast');
  // going back to favorite page to check if no restaurant item is displayed
  I.amOnPage('/#/favorites');
  I.see('Kamu belum menambahkan restoran favorit.', '.warning-message');
});
