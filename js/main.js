(function($)
{
	"use strict";
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function()
	{
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname)
		{
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	  
			if(target.length)
			{
				$('html, body').animate({
					scrollTop: (target.offset().top - 54)
				}, 1000, "easeInOutExpo");
		
				return false;
	  		}
		}
	});

	$('.js-scroll-trigger').click(function()
	{
		$('.navbar-collapse').collapse('hide');
	});

  	$('body').scrollspy({
		target: '#navbar-main',
		offset: 54
	});

	$('#easter-eggs > i').click(function()
	{
		var $this = $(this),
			prevClass = $this.attr('data-icon');

		$this.attr('data-icon', this.className);
		this.className = '';
		$this.addClass(prevClass);
		var flag = prevClass === "fab fa-grav";
		
		if(flag || prevClass === "fas fa-globe")
		{
			document.getElementById('sga').innerHTML = !flag ? "*:not(i) { font-family: 'SGARounded', 'Helvetica Neue', Helvetica, Arial, sans-serif !important; }" : "";
		}
	});
})(jQuery);