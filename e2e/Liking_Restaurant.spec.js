const assert = require('assert');

Feature('Liking Restaurant');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('No restaurants to display', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No restaurants to display', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.seeElement('.restaurant__item__title');
  const firstRestaurant = locate('.restaurant__item__title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__item__title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('searching restaurant', async ({ I }) => {
  I.see('No restaurants to display', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.seeElement('.restaurant__item__title');
  const name = [];
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant__item__title').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    name.push(await I.grabTextFrom('.restaurant__detail__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');
  const searchQuery = name[1].substring(1, 3);
  const matchingRestaurant = name.filter((names) => names.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurant = await I.grabNumberOfVisibleElements('.restaurant__item');
  assert.strictEqual(matchingRestaurant.length, visibleLikedRestaurant);

  matchingRestaurant.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.restaurant__item__title').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
