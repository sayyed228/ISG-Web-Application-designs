"use stirct";

$(document).ready(function() {
    $('.ISG-Tabs li:first-child a').find('.active').show();



    $('.box1').click(function() {
        $('#submissionId').show();
        $('#submissionId').addClass('swing animated');
        //$('.submissionId .panel-heading').text('Enter Submission ID');
        $('.box2').removeClass('activebox');
        $('#Policy-Number').hide();
        $(this).addClass('activebox');
        swing();
    });

    $('.box2').click(function() {
        $('#submissionId').hide();
        $('#Policy-Number').show();
        $('#Policy-Number').addClass('swing animated');
        $('#EntersubmissionID').attr('placeholder', '');
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


    $('#GetECCoverage_Btn').click(function() {
        rp_sidebar();
        $(this).addClass('activebtn');
        $('.rp-sidebar , #GetECCoverage').show();
    });

    $('#GetFWDCoverage_Btn').click(function() {
        rp_sidebar();
        $(this).addClass('activebtn');
        $('.rp-sidebar , #GetFWDCoverage').show();
    });

    $('#GetFWDCoverage_Btn').click(function() {
        rp_sidebar();
        $(this).addClass('activebtn');
        $('.rp-sidebar , #GetFWDCoverage').show();
    });

    $('#GetFWDCCoverage_Btn').click(function() {
        rp_sidebar();
        $(this).addClass('activebtn');
        $('.rp-sidebar , #GetFWDCCoverage').show();
    });

    $('#GetSCCCoverage_Btn').click(function() {
        rp_sidebar();
        $(this).addClass('activebtn');
        $('.rp-sidebar , #GetSCCCoverage').show();
    });

    $('#GetSOCCCoverage_Btn').click(function() {
        rp_sidebar();
        $(this).addClass('activebtn');
        $('.rp-sidebar , #GetSOCCCoverage').show();
    });

    $('#GetTUDCCoverage_Btn').click(function() {
        rp_sidebar();
        $(this).addClass('activebtn');
        $('.rp-sidebar , #GetTUDCCoverage').show();
    });

    $('#GetTCCoverage_Btn').click(function() {
        rp_sidebar();
        $(this).addClass('activebtn');
        $('.rp-sidebar , #GetTCCoverage').show();
    });

    $('#GetOLCCoverage_Btn').click(function() {
        rp_sidebar();
        $(this).addClass('activebtn');
        $('.rp-sidebar , #GetOLCCoverage').show();
    });

    $('#GetPOCCoverage_Btn').click(function() {
        rp_sidebar();
        $(this).addClass('activebtn');
        $('.rp-sidebar , #GetPOCCoverage').show();
    });

    $('#GetLTSPCCoverage_Btn').click(function() {
        rp_sidebar();
        $(this).addClass('activebtn');
        $('.rp-sidebar , #GetLTSPCCoverage').show();
    });

    $('#GetMHCCoverage_Btn').click(function() {
        rp_sidebar();
        $(this).addClass('activebtn');
        $('.rp-sidebar , #GetMHCCoverage').show();
    });

    $('#GetOCOTCCoverage_Btn').click(function() {
        rp_sidebar();
        $(this).addClass('activebtn');
        $('.rp-sidebar , #GetOCOTCCoverage').show();
    });




    function rp_sidebar() {
        $('.rp-btn').removeClass('activebtn');
        $('.rp-sidebar .panel-success').hide();
        $('.rp-content').removeClass('col-sm-12');
        $('.rp-content').addClass('col-sm-9');
        $('.rp-content div').removeClass('col-lg-3');
        $('.rp-content div').addClass('col-lg-4');

    }


    $('.rp-sidebarClose').click(function() {
        $('.rp-sidebar').hide();
        $('.rp-content').removeClass('col-sm-9');
        $('.rp-content').addClass('col-sm-12');
        $('.rp-content div').removeClass('col-lg-4');
        $('.rp-content div').addClass('col-lg-3');

    });


    $('.RiskInformation').click(function() {
        $('a[href="#RiskInformation"]').trigger("click");
    });

    $('.CoverageInformation').click(function() {
        $('a[href="#CoverageInformation"]').trigger("click");
    });


    $('.Reporting').click(function() {
        $('a[href="#Reporting"]').trigger("click");
    });

    $('.Rate_and_Premium').click(function() {
        $('a[href="#RateandPremium"]').trigger("click");
    });


    /**** Yes/No Toggle button code *********/
    $('.btn-toggle button').click(function() {
        $(this).siblings("button").removeClass('active btn-primary').addClass(' btn-default');
        $(this).removeClass(' btn-default').addClass('active btn-primary');
    });


    /**** Yes/No Toggle a code *********/
    $('.btn-toggle a').click(function() {
        $(this).siblings("a").removeClass('active btn-success').addClass(' btn-default');
        $(this).removeClass(' btn-default').addClass('active btn-success');
    });



    //$('.searchbox').fadeIn();

    $('.GetRate').click(function() {
        $('.searchbox2').hide();
        $('.searchbox1').fadeIn();
    });

    $('.Endorse').click(function() {
        $('.searchbox1').hide();
        $('.searchbox2').fadeIn();
    });

    /* searchbox */
    $('#myTabs , .tabContainer').click(function() {
        $('.searchbox1 , .searchbox2').fadeOut();
    });

    /** Type of Reporting Optionals  **/
    $("#target").change(function() {

        var TypeofReportingValue = $(this).val();
        //alert(TypeofReportingValue);

        if (TypeofReportingValue === 'New Starts Reporting') {
            $('.TypeofReportingOptionals').hide();
            $('#NewStartsReporting').show();
        } else if (TypeofReportingValue === 'Single Shot Reporting') {
            $('.TypeofReportingOptionals').hide();
            $('#SingleShotReporting').show();
        } else if (TypeofReportingValue === 'Remodel or Renovation work') {
            $('.TypeofReportingOptionals').hide();
            $('#RemodelorRenovationwork').show();
        } else {

            $('.TypeofReportingOptionals').hide();
        }

    });

});