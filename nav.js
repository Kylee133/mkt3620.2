document.addEventListener("DOMContentLoaded", () => {
  const nav = document.createElement("nav");

  nav.innerHTML = `
    <ul class="nav-links">
      <li><a href="index.html">About Me</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="product.html">Products</a></li>
    </ul>
  `;

  document.body.prepend(nav);
});
