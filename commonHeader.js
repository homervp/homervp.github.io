// Detect environment and set base URL
const BASE_URL = (() => {
  const host = window.location.hostname;
  const path = window.location.pathname;

  if (host.includes("upatras.gr")) {
    return "/~vpapadatos/";
  }
  if (host.includes("github.io")) {
    return "/";
  }
  return "/";
})();

// Inject meta and styles into <head>
document.addEventListener("DOMContentLoaded", () => {
  document.head.insertAdjacentHTML("beforeend", `
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="${BASE_URL}mainStyle.css">
  `);

  // Inject navigation bar into <body>
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="topnav">
      <div class="row">
        <a class="jumbotron" href="${BASE_URL}index.html">Homer Papadatos-Vasilakis</a>
      </div>
      <div class="row">
        <a class="active" href="${BASE_URL}index.html">Home</a>
        <a href="${BASE_URL}TutorialCentral.html">Tutorials</a>
        <a href="${BASE_URL}FlotillaWWII.html">Flotilla WWII</a>
        <a href="${BASE_URL}Recommendations.html">Recommendations</a>

        <div class="dropdown">
          <button class="dropbtn">Projects</button>
          <div class="dropdown-content">
            <a href="${BASE_URL}FlotillaWWII.html">Flotilla WWII</a>
            <a href="${BASE_URL}SurvivalWasteland.html">Survival Wasteland</a>
            <a href="${BASE_URL}TactiCode.html">TactiCode</a>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn">Film making</button>
          <div class="dropdown-content">
            <a href="${BASE_URL}cinematography/film_making_and_writing_resources.html">Film making and writing resources</a>
            <a href="${BASE_URL}cinematography/film_portfolio.html">Film portfolio</a>
          </div>
        </div>

        <a href="${BASE_URL}Contact.html">Contact</a>
      </div>
    </div>
  `);
});
