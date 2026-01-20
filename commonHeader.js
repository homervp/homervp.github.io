// ============================
// Environment detection
// ============================
const BASE_URL = (() => {
  const host = window.location.hostname;

  if (host.includes("upatras.gr")) return "/~vpapadatos/";
  if (host.includes("github.io")) return "/";
  return "/";
})();

// ============================
// Utility: load external script once
// ============================
function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// ============================
// Utility: load stylesheet once
// ============================
function loadStyleOnce(href) {
  if (document.querySelector(`link[href="${href}"]`)) return;

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

// ============================
// Bootstrap loader
// ============================
async function loadBootstrap() {
  loadStyleOnce("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
  loadStyleOnce(`${BASE_URL}mainStyle.css`);

  await loadScriptOnce(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  );
}

// ============================
// Navbar HTML
// ============================
function insertNavbar() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <meta name="viewport" content="width=device-width, initial-scale=1">
<nav class="navbar navbar-expand-lg navbar-light bg-light" style="font-weight:bolder">
  <div class="container-fluid">
    <div class="" id="mainNavbar">
      <ul class="navbar-nav">

        <li class="nav-item">
          <a class="nav-link" href="${BASE_URL}index.html">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="${BASE_URL}Recommendations.html">Recommendations</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="${BASE_URL}TutorialCentral.html">Tutorials</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
             href="#"
             role="button"
             data-bs-toggle="dropdown"
             aria-expanded="false">
            GameDev
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="${BASE_URL}FlotillaWWII.html">Flotilla WWII</a></li>
            <li><a class="dropdown-item" href="${BASE_URL}TactiCode.html">TactiCode</a></li>
            <li><a class="dropdown-item" href="${BASE_URL}SurvivalWasteland.html">Survival Wasteland</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
             href="#"
             role="button"
             data-bs-toggle="dropdown"
             aria-expanded="false">
            Film Making
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="${BASE_URL}cinematography/film_portfolio.html">Portfolio</a></li>
            <li><a class="dropdown-item" href="${BASE_URL}cinematography/film_making_and_writing_resources.html">Resources</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="${BASE_URL}Contact.html">Contact</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
`
  );
}

// ============================
// Entry point
// ============================
document.addEventListener("DOMContentLoaded", async () => {
  await loadBootstrap();
  insertNavbar();
});