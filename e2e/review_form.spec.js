const assert = require('assert');
Feature('adding review');

Before(({I}) => {
  I.amOnPage('/');
});

Scenario('adding review from detail page', async ({I}) => {
  // clicking first restaurant item on home page
  I.seeElement('#restaurantListContainer');
  I.waitForElement('restaurant-list', 5);
  I.seeElement('restaurant-list');
  I.seeElement('restaurant-item');
  I.seeElement('restaurant-item a');
  const firstRestaurant = locate('restaurant-item a').last();
  I.click(firstRestaurant);
  // viewing review form
  I.waitForElement('#review-form', 5);
  I.seeElement('#review-form');
  // filling review form
  const userName = 'Anon';
  const userReview = 'Makanannya murah';
  I.fillField('#inputName', userName);
  I.fillField('#inputReview', userReview);
  // submiting filled review form
  I.click('#submit-review');
  // checking if inputed value is same as displayed value
  const lastSubmitedReview = locate('.review__content').last();
  const textOfLastSubmitedReview = await I.grabTextFrom(lastSubmitedReview);
  assert.strictEqual(userReview, textOfLastSubmitedReview);
});
