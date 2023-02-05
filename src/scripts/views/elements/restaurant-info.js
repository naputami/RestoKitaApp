import CONFIG from '../../globals/config';
class restaurantInfo extends HTMLElement {
  set info(info) {
    this._info = info;
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="info-container">
        <div class="info-media">
            <div class="info-media__img">
                <img src="${CONFIG.BASE_IMAGE_URL}/${this._info.pictureId}" alt="suasana di ${this._info.name}">
            </div>
            <div class= "info-media__content">
                <h2>${this._info.name}</h2>
                <p>Kota: ${this._info.city}</p>
                <p>Alamat: ${this._info.address}</p>
                <p>Rating: ${this._info.rating}/5</p>
            </div>
        </div>
        <div class="info-description">
            <p>${this._info.description}</p>
        </div>
    </section>
    `;
  }
}
customElements.define('restaurant-info', restaurantInfo);
