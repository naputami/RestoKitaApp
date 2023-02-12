import CONFIG from '../../globals/config';
class restaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
            <article class="item-container">
                <div class="item-media">
                    <div class="item-media__img">
                        <img src="${CONFIG.BASE_IMAGE_URL}/${this._restaurant.pictureId}" alt="suasana di ${this._restaurant.name}">
                    </div>
                    <div class="item-media__rating">
                        <p>${this._restaurant.rating}<span><i class="fa-solid fa-star"></i></span></p>
                    </div>
                </div>
                <div class="item-content">
                    <h2 class="item-content__title">${this._restaurant.name}</h2>
                    <p class="item-content__city">Kota: ${this._restaurant.city}</p>
                    <p class="item-content__desc">${this._restaurant.description}</p>
                    <a href="/#/detail/${this._restaurant.id}" class="item-content__readMore" aria-label="read more">Baca selengkapnya&nbsp;<i class="fa-solid fa-angles-right"></i></a>
                </div>
            </article>
        `;
  }
}

customElements.define('restaurant-item', restaurantItem);
