import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ LikeContainer, restaurant, favoriteRestaurants }) {
    this._LikeContainer = LikeContainer;
    this._resto = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;
    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._resto;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },
  _renderLike() {
    this._LikeContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._resto);
      await this._renderButton();
    });
  },
  _renderLiked() {
    this._LikeContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._resto.id);
      await this._renderButton();
    });
  },
};
export default LikeButtonInitiator;
