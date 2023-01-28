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
                        <img src="${this._restaurant.pictureId}" alt="suasana di ${this._restaurant.name}">
                    </div>
                    <div class="item-media__rating">
                        <p>${this._restaurant.rating}<span><i class="fa-solid fa-star"></i></span></p>
                    </div>
                </div>
                <div class="item-content">
                    <h2 class="item-content__title">${this._restaurant.name}</h2>
                    <p class="item-content__city">City: ${this._restaurant.city}</p>
                    <p class="item-content__desc">${this._restaurant.description}</p>
                </div>
            </article>
        `;
  }
}

customElements.define('restaurant-item', restaurantItem);
