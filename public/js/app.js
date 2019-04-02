
$(window).on("load", function(){
  $.ready.then(function(){
   $('.parallax').parallax();
     $('#loading').fadeOut(800);
  });
})
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});
