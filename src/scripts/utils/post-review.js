import restaurantDbSource from '../data/restaurantdb-source';
const postInputReview = (url, name, review) => {
  const input = {
    id: url.id,
    name,
    review,
  };

  restaurantDbSource.postReview(input);

  const reviewContainer = document.querySelector('.review-container');
  const format = {year: 'numeric', month: 'long', day: 'numeric'};
  const date = new Date().toLocaleDateString('id-ID', format);
  const newReview = `
    <div class="review">
    <p class="review__content">${review}</p>
    <p class="review__name-date"><i class="fa-solid fa-user"></i>&nbsp;${name} (${date})</p>
    </div>
  `;
  reviewContainer.innerHTML += newReview;
};

export default postInputReview;
