import CONFIG from '../../globals/config';

const createDetailTemplate = (restaurant) => `
<section class="info-container">
    <div class="info-media">
        <div class="info-media__img">
            <img src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="suasana di ${restaurant.name}">
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
</section>

`;
export default createDetailTemplate;
