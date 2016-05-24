$(document).ready(function(){
   $(window).scroll(function(){
      var wscroll = $(window).scrollTop();
      $('.rotate').css('transform' , 'rotate('+wscroll+'deg)'); 
   });
});

$(window).load(function() {
  var buttonCircles = $(".nav-circle");

  $(".btn-nav").on("tap click", function() {
    $(this).toggleClass("closed-nav")
    if ($(this).hasClass("closed-nav")) {
      slideDown();
    } else {
      slideUp()
    }
  });

  $(".round-circle").click(function() {
    $(".btn-nav").toggleClass("closed-nav");
    slideUp();
  })

  function slideDown() {

    var topMargin = 20
    for (i = 0; i < buttonCircles.length; i++) {
      topMargin += 85
      $(buttonCircles[i]).animate({
        top: topMargin
      }, function() {
        $(".circle-container, .round-circle").css("visibility", "visible");
        if ($(".fa-plus").hasClass("unRotateIcon")) {
          $(".fa-plus").removeClass("unRotateIcon").addClass("rotateIcon");
        } else {
          $(".fa-plus").addClass("rotateIcon");
        }

      })
    }
  }

  function slideUp() {

    var resetTop = 20
    for (i = 0; i < buttonCircles.length; i++) {
      $(buttonCircles[i]).animate({
        top: resetTop
      }, 400, function() {
        $(".circle-container, .round-circle").css("visibility", "hidden");
        if ($(".fa-plus").hasClass("rotateIcon")) {
          $(".fa-plus").removeClass("rotateIcon").addClass("unRotateIcon");
        } else {
          $(".fa-plus").addClass("unRotateIcon");
        }
      })
    }
  }

});


setTimeout(function(){
    $(".element0").typed({
        strings: ["X-MEN APPOCALYPSE."],
        typeSpeed: 30, // typing speed
        backDelay: 750, // pause before backspacing
        loop: true, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function(){ } // call function after typing is done
    });
}, 0);

 new WOW().init();

var alerti = function(){
    alert('No Database Found!!');
}


$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});