/* eslint-disable no-new */
import FavoriteRestaurantIndexDB from '../../data/favorite-resto-indexDB';
import FavoriteRestaurantSearchPresenter from './restaurant-favorites/favorite-restaurant-search-presenter';
import FavoriteRestaurantSearchView from './restaurant-favorites/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './restaurant-favorites/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();
const FavoriteRestaurant = {
  async render() {
    return view.getTemplate();
  },
  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurant: FavoriteRestaurantIndexDB });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurant: FavoriteRestaurantIndexDB });
  },
};

export default FavoriteRestaurant;
