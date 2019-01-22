/**
 * Created by Alexey on 27.10.2016.
 */

$(document).ready(function(){
    $('.product__btn').click(function (e) {
        e.preventDefault();

        $('.overlay').fadeIn(400,
            function () {
                $('.popup-app')
                    .css('display', 'block')
                    .animate({opacity: 1}, 200);
            });
        return false;
    });

    $('.overlay').click(function () {
        $('.popup').animate({opacity: 0}, 200,
            function () {
                $(this).css('display', 'none');
                $('.overlay').fadeOut(400);
                $('.th_popup_overlay').fadeOut(400);
            }
        );
    });

   $('form input[name=phone]').mask("+7 (999) 999-99-99");
   $('.menu1 > a').click(function() {
    $('.active').removeClass('active');
        $(this).addClass('active');
    });
    $('.burger').on('click', function(){
        $(this).toggleClass('burgeractiv');
        $('.menumobhead').toggleClass ('activemenumob');
        $("body").toggleClass("locked");
      });
  /* if (screen.width === 414){
          $(document).ready(function(){
            $('.tabgo').css('margin-left', '68px');
          });
    };*/
    function resizeScrenn(){
        if ($(window).width() === 414){
            $('.tabgo').css('margin-left', '68px');
            $('#logowedo img').css('width', '84px');
            $('.vozm').css('margin-left', '82px');
          } else if ($(window).width() === 360) {
            $('#logowedo img').css('width', '72px');
          };
      	};
      resizeScrenn();
      /*$(window).resize(function(){
      	resizeScrenn();
      });*/

    
    var flky = new Flickity( '.hero-carousel', {
        // options, defaults listed
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false
      })
    var flky2 = new Flickity( '.hero-carousel2', {
        // options, defaults listed
        cellAlign: 'left',
        contain: true,
        prevNextButtons: true,
        pageDots: false,
        draggable: true

      })
});
