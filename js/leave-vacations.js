$(document).ready(function(){
  $('.btn').click(function(){
    $('.btn').removeClass('active-leave').addClass('btn-time');
     $(this).removeClass('btn-time').addClass('active-leave');
    });
})