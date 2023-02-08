class likedButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <button aria-label="unlike this restaurant" id="like-button" class="like">
            <i class="fa-solid fa-thumbs-up"></i>
          </button>    
      `;
  }
}

customElements.define('liked-button', likedButton);
