    const hoverElement = $(document).querySelector (".resume");

    hoverElement.addEventListener("mouseenter", function () {
        this.style.backgroundcolor = "#62C0F3";
        this.style.cursor = "pointer";

    });

    hoverElement.addEventListener ("mouseleave",function(){
        this.style.backgroundcolor = "#2DABEF";
    });


    $('a').click(function () {
      $('html, body').animate({
          scrollTop: $( $(this).attr('href')).offset().top
      }, 500);
  
      return false;
  });