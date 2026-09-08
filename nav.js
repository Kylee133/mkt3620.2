// nav.js
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.createElement("nav");
  nav.classList.add("main-nav");

  nav.innerHTML = `
    <ul class="nav-list">
      <li><a href="index.html">About Me</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  `;

  document.body.prepend(nav);
});
