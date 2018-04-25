 $(document).ready(function() {
 	// jQuery Function Number 1
	$("button.ingredients").click(function() {
		// jQuery Function Number 2
		$(".recipe-box").css('display','block');
		$(".instructions-box").css('display','none');
		$(".recipe-title3").css('display', 'none');
		$(".recipe-title2").css('display', 'none');
		$(".recipe-title").css('display', 'none');
	});

	$("button.steps").click(function() {
		$(".instructions-box").css('display','block');
		$(".recipe-box").css('display','none');
		$(".recipe-title").css('display', 'none');
	});

	$(".egg-1").hover(function() {
		// jQuery Function Number 3
		$("#banner").css('background-color', '#f16632');
		$("h1").css('color','#f16632');
	});

	$(".egg-1").mouseout(function() {
		$("#banner").css('background-color', '#FFB90F');
		$("h1").css('color','#FFB90F');
	});

	$(".egg-2").hover(function() {
		$("#banner").css('background-color', '#FF8C00');
		$("h1").css('color','#FF8C00');
	});

	$(".egg-2").mouseout(function() {
		// jQuery Function Number 4
		$("#banner").css('background-color', '#FFB90F');
		$("h1").css('color','#FFB90F');
	});

	$(".egg-3").hover(function() {
		$("#banner").css('background-color', '#FF7F50');
		$("h1").css('color', '#FF7F50');
	});

	$(".egg-3").mouseout(function() {
		$("#banner").css('background-color', '#FFB90F');
		$("h1").css('color','#FFB90F');
	});

	$(".egg-4").hover(function() {
		$("#banner").css('background-color', '#ff981a');
		$("h1").css('color', '#ff981a');
	});

	$(".egg-4").mouseout(function() {
		$("#banner").css('background-color', '#FFB90F');
		$("h1").css('color','#FFB90F');
	});

});

