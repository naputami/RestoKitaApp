class likeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <button aria-label="like this restaurant" id="like-button" class="like">
            <i class="fa-regular fa-thumbs-up"></i>
        </button>    
    `;
  }
}

customElements.define('like-button', likeButton);
