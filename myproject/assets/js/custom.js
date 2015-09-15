"use stirct";

$(document).ready(function() {
    $('.ISG-Tabs li:first-child a').find('.active').show();



    $('.box1').click(function() {
        $('.submissionId').show();
        $('.submissionId').addClass('swing animated');
		$('.submissionId .panel-heading').text('Enter Submission ID');
        swing();
    });
	
	$('.box2').click(function() {
        $('.submissionId').show();
        $('.submissionId').addClass('swing animated');
		$('.submissionId .panel-heading').text('Policy Number');
        swing();
    });

    function swing() {
        setTimeout(function() {
            $('.submissionId').removeClass('swing animated');
        }, 2000);
    }


    $('.ISG-Tabs li a').click(function() {

        $('.ISG-Tabs li a').find('.active').hide();
        $('.ISG-Tabs li a').find('.normal').show();
        $(this).find('.normal').hide();
        $(this).find('.active').show();
    });



});