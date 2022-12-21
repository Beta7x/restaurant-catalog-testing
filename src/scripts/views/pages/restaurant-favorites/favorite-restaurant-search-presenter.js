class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurant, view }) {
    this._view = view;
    this._favoriteResto = favoriteRestaurant;
    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestaurant(latestQuery).then();
    });
  }

  async _searchRestaurant(latestQuery) {
    this._latestQuery = latestQuery.trim();
    let foundRestaurant;
    if (this.latestQuery.length > 0) {
      foundRestaurant = await this._favoriteResto.searchRestaurant(this.latestQuery);
    } else {
      foundRestaurant = await this._favoriteResto.getAllRestaurant();
    }

    this._showFoundRestaurant(foundRestaurant);
  }

  _showFoundRestaurant(restaurants) {
    this._view.showFavoriteRestaurant(restaurants);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;
