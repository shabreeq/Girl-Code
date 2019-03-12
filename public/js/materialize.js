var instance = M.Sidenav.getInstance(elems);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  instances = M.Sidenav.init(elems, onOpenStart);
});


instances.open();