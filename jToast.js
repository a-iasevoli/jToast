/*
 * 
 * varie callback
 * linkabile
 * toast con chiusura non automatica
 * 
 * 
 */

(function($) {
	var toast = [];
	var id = 0;
	
	removeToastAnimation = function(toast) {
		toast.animate({
			opacity: 0
		}, 500, function(){
			toast.parent().animate({
				height: '0px'
			}, 200, function(){
				toast.parent().remove();
			});
		});
	};
	
	removeToast = function(toast, duration) {
		setTimeout(function() { removeToastAnimation(toast)}, duration);
	};
	
	$('.toast .close').live('click', function(){
		removeToastAnimation($(this).parent());
	});
	
	jToast = function(options) {
		
		 var settings = $.extend( {
		      'type' : 'info',
		      'text' : '',
		      'duration': 8000
		    }, options);
		

		if($('.toaster').length == 0) {
			$('<div/>', {
				'class' : 'toaster'
			}).appendTo('body');
			
			$('.toaster').css({
				bottom: '0px',
				left: '0px'
			});
			
		}
		
		toastContainer = $('<div/>', {
			'class' : 'toast-container'
		});
		
		toast = $('<div/>', {
			'class' : 'toast alert-'+settings.type,
			id : id,
			html: settings.text
		});
		
		close = $('<button/>', {
			'class' : 'close',
			text : 'x'
		});
		
		toastContainer.html(toast).appendTo('.toaster');
		toast.slideDown();
		removeToast(toast, settings.duration);
		id++;

	};
})(jQuery);
