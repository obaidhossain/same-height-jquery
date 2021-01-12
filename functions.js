function measureheight(ptitle) {
  var maxGridTitleHeight = 0;

  $(ptitle).each(function(){
    if ($(this).height() > maxGridTitleHeight) { maxGridTitleHeight = $(this).height(); }
  });

  $(ptitle).height(maxGridTitleHeight); 
}
