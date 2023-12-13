$(function(){

var $container = $("#progress"),
	$progressbar = $container.find(".progress-bar"),
	$progresstext = $container.find(".progress-text"),

	imgLoad = imagesLoaded("body"),
	imgTotal = imgLoad.images.length,
	imgLoaded = 0,
	current = 0,

	progressTimer = setInterval(updateProgress, 1000/60);

	$("html, body").animate({ scrollTop : 0  })

	imgLoad.on('progress',function(){
		imgLoaded++;
		console.log(imgLoaded);
	});

	function updateProgress (){
		// 100으로 맞춰주세요.
		var target = (imgLoaded/imgTotal) *100;

		current += (target -current) * 0.03;

		$progresstext.text("Loading..."+Math.floor(current)+"%");
		
		if(current > 99.9){
			clearInterval(progressTimer);
			$container.addClass("progress-complete");
			$progressbar.add($progresstext).delay(500).animate({opacity:0},250,
			function(){
				// 1000으로 맞춰주세요
				$container.animate({top:"-1000%"},0,"easeInOutQuint");
			});
			setTimeout(function(){
				$("html, body").animate({ scrollTop : 38.4 * Math.floor(current)  })
			}, 1000)
		}
	}
});
