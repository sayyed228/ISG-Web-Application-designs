"use stirct";

$(document).ready(function() {
    $('.ISG-Tabs li:first-child a').find('.active').show();



    $('.box1').click(function() {
        $('#submissionId').show();
        //$('#submissionId').addClass('swing animated');
		//$('.submissionId .panel-heading').text('Enter Submission ID');
		$('.box2').removeClass('activebox');
		$('#Policy-Number').hide();
		$(this).addClass('activebox');
        swing();
    });
	
	$('.box2').click(function() {
		$('#submissionId').hide();
        $('#Policy-Number').show();
        //$('#Policy-Number').addClass('swing animated');
		$('#EntersubmissionID').attr('placeholder','');
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


$('.rp-btn').click(function() {
 $('.rp-sidebar').show();
 $('.rp-content').removeClass('col-sm-12');
 $('.rp-content').addClass('col-sm-9');
});



$('.RiskInformation').click(function(){
 $('a[href="#RiskInformation"]').trigger( "click" );
});

$('.CoverageInformation').click(function(){
 $('a[href="#CoverageInformation"]').trigger( "click" );
});


$('.Reporting').click(function(){
 $('a[href="#Reporting"]' ).trigger( "click" );
});

$('.Rate_and_Premium').click(function(){
 $('a[href="#RateandPremium"]' ).trigger( "click" );
});


/**** Yes/No Toggle button code *********/


$('.btn-toggle button').click(function() {
	 $(this).siblings("button").removeClass('active btn-primary').addClass(' btn-default');
	 $(this).removeClass(' btn-default').addClass('active btn-primary');
});




});