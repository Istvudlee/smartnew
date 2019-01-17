(function( $ ){

	$(function() {

		$('.popup-form, .call-form').each(function(){
			var form = $(this),
				btn = form.find('.popup-form__btn, .product__callback');
			
			form.find('.popup-form__field').addClass('empty_field');
			
			// Функция проверки полей формы
			function checkInput(){
				form.find('.popup-form__field').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
			// Функция подсветки незаполненных полей
			function lightEmpty(){
				form.find('.empty_field').css({'border-color':'#d8512d'});
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},500);
			}
			
			

			btn.click(function(){
				if($(this).hasClass('disabled')){
					lightEmpty();
					return false
				} else {
					form.submit();
					return false
				}
			});
			
		});
		
	});

})( jQuery );