// (function ($) {
//   "use strict";

//   // Sticky Navbar
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 0) {
//       $(".navbar").addClass("nav-sticky");
//     } else {
//       $(".navbar").removeClass("nav-sticky");
//     }
//   });
// })(jQuery);

(function ($) {
  "use strict";

  // Sticky Navbar
  $("body").scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("nav-sticky");
    } else {
      $(".navbar").removeClass("nav-sticky");
    }
  });
})(jQuery);
