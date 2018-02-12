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

	var specs = [20, 13, 8],
		starfield = $("starfield"),
		stars = [[], [], []],
		height = starfield.height();

	for(var i = 1; i <= 3; i++)
	{
		var positions = new Uint16Array(specs[i - 1]);
		window.crypto.getRandomValues(positions);

		for(var j = 0; j < specs[i - 1]; j++)
		{
			var star = document.createElement("star"),
				star2 = document.createElement("star"),
				x = (positions[j] * 2000) / 65536.0,
				y = Math.random() * height;

			star.style.width = star.style.height = star2.style.width = star2.style.height = i + "px";
			star.style.transform = "translate(" + x + "px, " + y + "px)";
			star2.style.transform = "translate(" + x + "px, " + (y + height) + "px)";
			stars[i - 1].push(star);
			stars[i - 1].push(star2);
			starfield.append(star);
			starfield.append(star2);
		}
	}

	var params = { onComplete: function(self) { self.restart(); }, onCompleteParams: ["{self}"], y: "+="+(-height), ease: Power0.easeNone },
		starBGAnim = TweenLite.to(stars[0], 15, params),
		starMGAnim = TweenLite.to(stars[1], 35, Object.assign({}, params)),
		starFGAnim = TweenLite.to(stars[2], 55, Object.assign({}, params));

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
			document.getElementById('sga').innerHTML = !flag ? ":not(i){font-family:SGARounded,'Helvetica Neue',Helvetica,Arial,sans-serif!important}#hello::before{animation:unset;-webkit-animation:unset;will-change:unset}" : "";
		}
	});

	var hello = $("#hello"),
		textAnim = new TimelineLite({ onComplete: function(self) { self.restart(); }, onCompleteParams: ["{self}"], paused: true }),
		messages = ["مرحبا!!", "Salam!!", "Здравейте!!", "হ্যালো!!", "Zdravo!!", "Ahoj!!", "Hallo!!", "Χαίρετε!!", "¡¡Hola!!", "Tere!!", "سلام!!", "Hei!!", "Bonjour!!", "Ola!", "नमस्ते!!", "Sawubona!!", "Բարեւ!!", "Halo!!", "Nnọọ!!", "Halló!!", "Ciao!!", "שלום!!", "こんにちは!!", "안녕하세요!!", "Sveiki!!", "Salama!!", "Здраво!!", "ഹലോ!!", "Bongu!!", "ဟလို!!", "Moni!!", "Cześć!!", "Olá!!", "Buna!!", "Здравствуйте!!", "හෙලෝ!!", "Përshëndetje!!", "Lumela!!", "Hallå!!", "வணக்கம்!!", "హలో!!", "Салом!!", "สวัสดี!!", "Kamusta!!", "Merhaba!!", "ہیلو!!", "Salom!!", "你好!!", "Hello!!"],
		currentMessage = 0;

	textAnim.to(hello, 1.75, { opacity: 0 }).to(hello, 1.75, { opacity: 1 });;
	textAnim.add(function()
	{
		hello.text(messages[currentMessage]);
		currentMessage = (currentMessage + 1) % messages.length;
	}, 1.75);
	textAnim.play();
	$('[data-toggle="tooltip"]').tooltip();
})(jQuery);