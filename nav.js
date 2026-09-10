document.addEventListener("DOMContentLoaded", () => {
  const nav = document.createElement("nav");

  nav.innerHTML = `
    <div class="nav-container">
      <a href="index.html">
        <img src="assets/logo.png" alt="Logo">
      </a>

      <ul class="nav-links">
        <li><a href="index.html">About Me</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="product.html">Products</a></li>
      </ul>
    </div>
  `;

  nav.classList.add("site-nav");
  document.body.prepend(nav);
});
