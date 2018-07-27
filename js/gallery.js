$(document).ready(function($) {
  // masonry gallery
  var $masonry_gallery = jQuery(".masonry-gallery.gallery");
  if ($masonry_gallery.length > 0) {
    $masonry_gallery.each(function(index, element) {
      //var $masonry_items = $(element).find(".gallery-item");

      // set masonry layout
      $(element).isotope({
        masonry: { columnWidth: $(element).find(".gallery-item")[0] },
        itemSelector: ".gallery-item"
      });
      $(element).isotope("layout");

      /* filtering
      jQuery("#gallery-filter li a").on("click", function() {
        jQuery("#gallery-filter li a").removeClass("active");
        jQuery(this).addClass("active");
        var selector = jQuery(this).attr("data-filter");
        $masonry_gallery.isotope({ filter: selector });
        return false;
      });

      // changing layout
      jQuery("#grid-changer li a").on("click", function() {
        jQuery("#grid-changer li a").removeClass("active");
        jQuery(this).toggleClass("active");

        $masonry_items.removeClass("col-3");
        $masonry_items.removeClass("col-4");
        $masonry_items.removeClass("col-5");
        $masonry_items.toggleClass(
          jQuery(this)
            .closest("li")
            .attr("class")
        );
        $masonry_gallery.isotope("layout");
      });*/
    });
  }

  $("a.popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      titleSrc: function(item) {
        return (
          "<b>" +
          item.el.attr("title") +
          "</b>&nbsp;" +
          item.el.attr("data-caption")
        );
      }
    }
    // other options
  });
});
