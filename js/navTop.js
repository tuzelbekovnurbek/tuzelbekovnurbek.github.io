$(document).ready(function(){
   $(window).on('scroll',function(){
      if ($(window).scrollTop()){
         $('nav').addClass('nav-active');
      }else{
         $('nav').removeClass('nav-active');
      }
   });
});