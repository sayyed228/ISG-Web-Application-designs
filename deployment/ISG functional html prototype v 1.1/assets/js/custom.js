"use stirct";

$(document).ready(function() {
    $('.ISG-Tabs li:first-child a').find('.active').show();



    $('.box1').click(function() {
        $('.submissionId').show();
        $('.submissionId').addClass('swing animated');
		//$('.submissionId .panel-heading').text('Enter Submission ID');
		$('.box2').removeClass('activebox');
		$(this).addClass('activebox');
        swing();
    });
	
	$('.box2').click(function() {
        $('.submissionId').show();
        $('.submissionId').addClass('swing animated');
		//$('.submissionId .panel-heading').text('Policy Number');
		$('.box1').removeClass('activebox');
		$(this).addClass('activebox');
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




$('.forgotpassword').click(function() {
	$('.loginboxwrap').hide();
	$('.resetwrap').show();
	$('.resetwrap').addClass('flipInY animated');
	
	 
	});
	
	$('.back-to-login').click(function() {
	$('.resetwrap').hide();
	$('.loginboxwrap').show();
	$('.loginboxwrap').addClass('flipInY animated');
	
	 
	});







$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');  
    
    if ($(this).find('.btn-primary').size()>0) {
    	$(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').size()>0) {
    	$(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').size()>0) {
    	$(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').size()>0) {
    	$(this).find('.btn').toggleClass('btn-info');
    }
    
    $(this).find('.btn').toggleClass('btn-default');
       
});

$('form').submit(function(){
	//alert($(this["options"]).val());
    return false;
});



});