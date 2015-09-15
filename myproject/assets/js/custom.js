"use stirct";

$(document).ready(function() {
	$('.ISG-Tabs li:first-child a').find('.active').show();
/*
    $('.ISG-Tabs li a').hover(
        function() {
            $(this).find('.normal').hide();
            $(this).find('.active').show();
        },
        function() {
            $(this).find('.active').hide();
			$(this).find('.normal').show();
        }
    );*/
	
	$('.ISG-Tabs li a').click(function() {
		
		 $('.ISG-Tabs li a').find('.active').hide();
		 $('.ISG-Tabs li a').find('.normal').show();
		 $(this).find('.normal').hide();
		 $(this).find('.active').show();
	});



});