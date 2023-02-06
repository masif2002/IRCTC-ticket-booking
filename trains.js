$('.seat').click(function() {
    $(this).toggleClass('color') // add class to clicked element
      .siblings() // get siblings
      .removeClass('color'); // remove class from sibling elements 
  });