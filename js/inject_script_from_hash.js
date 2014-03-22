var hash = window.location.hash,
    scriptUrl = hash.substring(1),
    head = null,
    script = null;

if (scriptUrl.indexOf('http') === 0 ||
    scriptUrl.indexOf('file') === 0) {
  head = document.querySelector('head'),
  script = document.createElement('script');
  script.src = scriptUrl;
  head.appendChild(script);
}
