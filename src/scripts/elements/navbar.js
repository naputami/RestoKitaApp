import logoImg from '../../public/images/logo.png';
class navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav class="nav">
                <div class="menu-mobile">
                    <div class="logo">
                        <img src="${logoImg}" alt="logo">
                    </div>
                    <div class="hamburger-container">
                        <a id="hamburger" href="#">☰</a>
                    </div>
                </div>
                <ul class="menu-list">
                    <li class="menu-item"><a href="#">Home</a></li>
                    <li class="menu-item"><a href="#">Favorites</a></li>
                    <li class="menu-item"><a href="https://github.com/naputami" target="blank_" rel="noopener">About Us</a></li>
                </ul>
            </nav>
        `;
  }
}

customElements.define('nav-bar', navbar);
