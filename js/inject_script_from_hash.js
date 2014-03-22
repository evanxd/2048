var hash = window.location.hash,
    scriptUrl = hash.substring(1),
    body = null,
    script = null;

if (scriptUrl.indexOf('http') === 0 ||
    scriptUrl.indexOf('file') === 0) {
  body = document.querySelector('body'),
  script = document.createElement('script');
  script.src = scriptUrl;
  body.appendChild(script);
}
