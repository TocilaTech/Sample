$('.thumbnail').hover(
	function(){
		$(this).find('.caption').slideDown(250); 
	},
	function(){
		$(this).find('.caption').slideUp(250);
	}
);
