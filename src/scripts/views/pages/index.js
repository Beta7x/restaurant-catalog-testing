import RestaurantSource from '../../data/restaurant-source';
import { createItemRestaurant } from '../templates/template-creator';

const Index = {
  async render() {
    return `
      <!-- Start Jumbotron Section -->
      <section id="jumbotron">
      <picture class="jumbotron__bg" >
      <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
      <source type="image/webp" srcset="./images/hero-image_2.webp">
      <img src="./images/hero-image_2-large.jpg" alt="restaurant poster">
      </picture>
        <div class="jumbotron__desc">
          <h1 tabindex="0">
            Are you interested in Indonesia food?
          </h1>
          <p tabindex="0">
            Enjoy Indonesian-style dishes with various comfortable places and delicious food.
            You are free to choose the place you like.
          </p>
          <div class="jumbotron__overlay">
          </div>
        </div>
      </section>
      <!-- End Jumbotron Section -->
      <!-- Start RestaurantList Section -->
      <section id="restaurant">
        <h1 tabindex="0">Restaurant list</h1>
        <p tabindex="0">
          The following is a list of recommended favorite restaurants in Indonesia with
          high ratings.
        </p>
        <!-- Start Restaurant List Section -->
        <section class="restaurant__list">
        <!-- End Restaurant List Section -->
        </section>
      </section>
      <!-- End RestaurantList -->
    `;
  },
  async afterRender() {
    const restaurantList = document.querySelector('.restaurant__list');
    const restaurant = await RestaurantSource.favoriteRestaurant();

    restaurant.forEach((restaurants) => {
      restaurantList.innerHTML += createItemRestaurant(restaurants);
    });
  },
};
export default Index;
