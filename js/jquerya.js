$(document).ready(function(){
    $('a[href^="#tab1"], a[href^="#tab2"]').click(function() {
    $('.active').removeClass('active');
        $(this).addClass('active');
    });
});


