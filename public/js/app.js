const files = [
  
]

var instance = M.Sidenav.getInstance(elem);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  instances = M.Sidenav.init(elems, options);
});

instance.open();

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  instances = M.Parallax.init(elems, options);
});


$(window).on("load", function(){
  $.ready.then(function(){
   $('.parallax').parallax();
     $('#loading').fadeOut(800);
  });
})
