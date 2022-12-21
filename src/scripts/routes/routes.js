import RestaurantDetail from '../views/pages/restaurant-detail';
import Index from '../views/pages';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';

const routes = {
  '/': Index,
  '/favorite': FavoriteRestaurant,
  '/detail/:id': RestaurantDetail,
};
export default routes;
