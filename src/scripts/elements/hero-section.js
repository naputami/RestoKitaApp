class heroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero-container">
                <div class="hero-overlay">
                    <div class="hero-text">
                        <h1>Resto Kita</h1>
                        <p>Dapatkan inspirasi tempat makan untuk <em>momen spesialmu!</em></p>
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define('hero-section', heroSection);
