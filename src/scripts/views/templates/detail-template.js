import CONFIG from '../../globals/config';

const createDetailTemplate = (restaurant) => `
<section class="info-container">
    <div class="info-media">
        <div class="info-media__img">
            <picture>
            <source srcset="${CONFIG.BASE_IMAGE_URL.small}/${restaurant.pictureId}" type="image/webp" media="all and (max-width: 600px)" />        
            <source srcset="${CONFIG.BASE_IMAGE_URL.small}/${restaurant.pictureId}" type="image/jpeg" media="all and (max-width: 600px)" />
            <source srcset="${CONFIG.BASE_IMAGE_URL.medium}/${restaurant.pictureId}" type="image/webp" media="all and (min-width: 601px) and (max-width: 960px)" />    
            <source srcset="${CONFIG.BASE_IMAGE_URL.medium}/${restaurant.pictureId}" type="image/jpeg" media="all and (min-width: 601px) and (max-width: 960px)" />
            <source srcset="${CONFIG.BASE_IMAGE_URL.large}/${restaurant.pictureId}" type="image/webp" media="all and (min-width: 961px)" />        
            <source srcset="${CONFIG.BASE_IMAGE_URL.large}/${restaurant.pictureId}" type="image/jpeg" media="all and (min-width: 961px)" />
            <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL.large}/${restaurant.pictureId}" alt="suasana di ${restaurant.name}">
            </picture>
        </div>
        <div class= "info-media__content">
            <h3>${restaurant.name}</h3>
            <div class= "info-media__content__with-icon">
                <span><i class="fa-solid fa-map-location"></i></span>
                <p>${restaurant.city} - ${restaurant.address}</p>
            </div>
            <div class= "info-media__content__with-icon">
                <span><i class="fa-solid fa-star"></i></span>
                <p>${restaurant.rating}/5</p>
            </div>
            <div class= "info-media__content__with-icon">
            <span><i class="fa-solid fa-tags"></i></span>
            <p>${restaurant.categories.map((category) => `<span class="category">${category.name}</span>`)}</p>
        </div>
        </div>
    </div>
    <div class="info-description">
        <h4 class="subsection-title">Deskripsi</h4>
        <p class="info-text">${restaurant.description}</p>
    </div>
    <div class="info-menu">
        <h4 class="subsection-title">Menu</h4>
        <div class="menu-container">
            <div class="menu-container__item">
                <h5>Makanan</h5>
                <ul>
                    ${restaurant.menus.foods.map((food) => `<li class="info-text">${food.name}</li>`).join('')}
                </ul>
            </div>
            <div class="menu-container__item">
                <h5>Minuman</h5>
                <ul>
                    ${restaurant.menus.drinks.map((drink) => `<li class="info-text">${drink.name}</li>`).join('')}
                </ul>
            </div>
        </div>
    </div>
    <div class="info-review">
        <h4 class="subsection-title">Ulasan Pengunjung</h4>
        <div class="review-container">
            ${restaurant.customerReviews.map((review) => `<div class="review">
                <p class="review__content">${review.review}</p>
                <p class="review__name-date"><i class="fa-solid fa-user"></i>&nbsp;${review.name} (${review.date})</p>
            </div>`).join('')}
        </div>
    </div>
    <div id="review-form">
    <h4 class="subsection-title">Apa pendapatmu tentang restoran ini?</h4>
    <form>
      <div class="form-field">
        <label for="inputName" class="form-field__label">Nama</label>
        <input name="inputName" class="form-field__input type="text" id="inputName" require>
      </div>
      <div class="form-field">
        <label for="inputReview" class="form-field__label">Ulasan</label>
        <input name="inputReview" class="form-field__input type="text" id="inputReview" require>
      </div>
      <button type="submit" id="submit-review">Kirim</button>
    </form>
  </div>
</section>

`;
export default createDetailTemplate;
