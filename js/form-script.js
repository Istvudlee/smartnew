$(document).ready(function(){
    $(".popup-form").submit(function(e) {
      e.preventDefault();
      var form_data = $(this).serialize();
      $.ajax({
        method: "POST",
        url: "mail.php",
        data: form_data,
        success: function() {
                  $('.popup').animate({opacity: 0}, 500, 
                    function () {
                $(this).css('display', 'none');
                $('.overlay').fadeOut(2500);
                $(".th_popup_overlay").fadeIn("slow").delay(1500).fadeOut(500);
            }
        );
        }
      });
    });
    });
