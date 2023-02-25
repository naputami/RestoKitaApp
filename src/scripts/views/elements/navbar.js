import logoImg from '../../../public/images/logo.png';
import logoImgSmall from '../../../public/images/resized/logo-small.png';
class navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav class="nav">
                <div class="menu-mobile">
                    <div class="logo">
                        <picture>
                            <source media="(max-width: 600px)" srcset="${logoImgSmall}">
                            <img src="${logoImg}" alt="logo">
                        </picture>
                    </div>
                    <div class="hamburger-container">
                        <a id="hamburger" href="#" aria-label="toggle drawer">☰</a>
                    </div>
                </div>
                <ul class="menu-list">
                    <li class="menu-item"><a href="#/home">Beranda</a></li>
                    <li class="menu-item"><a href="#/favorites">Favorit</a></li>
                    <li class="menu-item"><a href="https://github.com/naputami" target="blank_" rel="noopener">Profil Kami</a></li>
                </ul>
            </nav>
        `;
  }
}

customElements.define('nav-bar', navbar);
