/* ==========================================================
 * jToast.js v0.0.1
 * http://iasevoli.net/jToast
 * ==========================================================
 * Copyright 2012 Angelo Iasevoli.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

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
