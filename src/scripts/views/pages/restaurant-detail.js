import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createDetailRestaurant } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIndexDB from '../../data/favorite-resto-indexDB';

const RestaurantDetail = {
  async render() {
    return `
      <article class="restaurant__detail" tabindex="0" >
      </article>
      <div id="LikeContainer"></div>
    `;
  },
  async afterRender() {
    // This function will be called after render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const main = document.querySelector('.restaurant__detail');
    main.innerHTML = createDetailRestaurant(restaurant);
    console.log(LikeButtonInitiator);
    await LikeButtonInitiator.init({
      LikeContainer: document.querySelector('#LikeContainer'),
      favoriteRestaurants: FavoriteRestaurantIndexDB,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        address: restaurant.address,
        description: restaurant.description,
        categories: restaurant.categories,
        menus: restaurant.menus,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};
export default RestaurantDetail;
