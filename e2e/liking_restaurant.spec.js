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
  I.waitForElement('restaurant-item a', 5);
  I.seeElement('restaurant-item a');
  I.click(locate('restaurant-item a').first());
  pause();
  I.waitForElement('like-button', 6);
  I.seeElement('like-button');
  I.click('like-button');
  I.amOnPage('/#/favorites');
  I.seeElement('restaurant-item');
});
