import {likedToast, unlikedToast} from '../views/templates/toast-template';

const likeButtonInitiator = {
  async init({likeButtonContainer, toastContainer, favoriteRestaurants, restaurant}) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurants = favoriteRestaurants;
    this._toastContainer = toastContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restaurant;

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
    this._likeButtonContainer.innerHTML = `<like-button></like-button>`;

    const likeButton = document.querySelector('like-button');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      await this._renderButton();
      this._renderToastUnliked();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = `<liked-button></liked-button>`;

    const likedButton = document.querySelector('liked-button');
    likedButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      await this._renderButton();
      this._renderToastLiked();
    });
  },

  _renderToastLiked() {
    this._toastContainer.innerHTML = unlikedToast();
    setTimeout(() => document.querySelector('.toast').classList.add('hide'), 1500);
  },

  _renderToastUnliked() {
    this._toastContainer.innerHTML = likedToast();
    setTimeout(() => document.querySelector('.toast').classList.add('hide'), 1500);
  },
};

export default likeButtonInitiator;
