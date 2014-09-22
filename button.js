$(function() {
	$('li.racer').on('click', function() {
		$(this).animate({
			opacity: 0.0,
			paddingLeft: '+=90',
		}, 500, function() {
			$(this).remove();
		});
		go();
	});
});
