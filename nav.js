document.addEventListener("DOMContentLoaded", () => {
  const nav = document.createElement("nav");

  nav.innerHTML = `
    <div class="nav-container">
      index.html
        assets/logo.png
      </a>

      <ul class="nav-links">
        <li>index.htmlAbout Me</a></li>
        <li>portfolio.htmlPortfolio</a></li>
        <li><a href="product.html">Products</a></li>
      </ul>
    </div>
  `;

  nav.classList.add("site-nav");
  document.body.prepend(nav);
});
