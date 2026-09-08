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
  // loadStyleOnce("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
  loadStyleOnce("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.css");
  loadStyleOnce(`${BASE_URL}/css/mainStyle.css`);

  await loadScriptOnce(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  );
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadBootstrap();
//   insertNavbar();
});

loadStyleOnce("css/slideshow.css");
loadStyleOnce("css/mainStyle.css");

fetch('nav.html')
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }
        return res.text();
    })
    .then(text => {
        const oldelem = document.querySelector("#replace_with_navbar");
        const newelem = document.createElement("div");

        newelem.innerHTML = text;
        oldelem.replaceWith(newelem);
    })
    .catch(err => console.error("Failed to load navbar:", err));