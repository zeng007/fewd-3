$('#switcher div').click(function(){
  let clickedClass = $(this).attr('class');
  $('body').removeClass().addClass(clickedClass);
})
