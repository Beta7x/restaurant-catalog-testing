import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIndexDB from '../../src/scripts/data/favorite-resto-indexDB';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    LikeContainer: document.querySelector('#LikeContainer'),
    favoriteRestaurants: FavoriteRestaurantIndexDB,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
