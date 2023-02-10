class skipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            
        <a href="#main" class="skip-content" tabindex="0">Menuju konten utama</a>
           
        `;
  }
}

customElements.define('skip-content', skipContent);
