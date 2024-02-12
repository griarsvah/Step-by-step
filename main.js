var scripts = [
  'main.css',
  'manifest.json'
];
scripts.forEach(function(scriptUrl) {
  var s = document.createElement('script');
  s.async = false;
  s.src = scriptUrl;
  document.head.appendChild(s);
});
