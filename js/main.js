(function($)
{
	$("#project-action").text(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0,4)) ? "Tap" : "Click");

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