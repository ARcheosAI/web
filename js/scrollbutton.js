function scrollTop() { 
    if ($(window).scrollTop() > 500) { // 500 -> This is the value in px of the distance to be scrolled for the 'scroll-to-top' button to show-up
      $(".backToTopBtn").addClass("active");
    } else {
      $(".backToTopBtn").removeClass("active");
    }
  }
  
  $(document).ready( function() { 
    scrollTop();
    $(window).on("scroll", scrollTop);

    $(".backToTopBtn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1);
      return false;
    });
  });
