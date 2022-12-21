/* eslint-disable class-methods-use-this */
import { createItemRestaurant } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <section id="restaurant"  tabindex="0" >
        <h1 tabindex="0">Favorite restaurant list</h1>
        <p tabindex="0">
          Below is a list of your favorite restaurants, click on a restaurant name to add or remove.
        </p>
        <div class='search__container'>
          <input id="query" type="text" class="search__input" placeholder="Put your favorite restaurant here...">
        </div>
        <section class="restaurant__list" id="restaurant__list">
        </section>
      </section>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurant(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createItemRestaurant(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurant__list').innerHTML = html;
    document.getElementById('restaurant__list').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
      <p style="color:#bb0707"  class="restaurant-item__not__found">No restaurants to display</p>
    `;
  }
}
export default FavoriteRestaurantSearchView;
