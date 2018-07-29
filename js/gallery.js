$(document).ready(function($) {
  // masonry gallery
  var $masonry_gallery = jQuery(".masonry-gallery.gallery");
  if ($masonry_gallery.length > 0) {
    $masonry_gallery.each(function(index, element) {
      //var $masonry_items = $(element).find(".gallery-item");

      // set masonry layout
      var $grid = $(element).isotope({
        masonry: { columnWidth: $(element).find(".gallery-item")[0] },
        itemSelector: ".gallery-item"
      });
      $grid.imagesLoaded().progress(function() {
        $grid.isotope("layout");
      });
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
  });
});
