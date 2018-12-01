/*----------- Hover scripts---------------*/


/* Square 1*/
$(document).ready(function(){
    $(".col.span_1_of_4").hover(function(){
        $(".span_1_of_4").toggleClass("span_1_of_4_hover");
		$("#text1").toggleClass("textclass_hover");
		/*alert($("html").width());
		alert($("html").height());*/
    });
});

/* Square 2*/
$(document).ready(function(){
    $(".col.span_2_of_4").hover(function(){
        $(".span_2_of_4").toggleClass("span_2_of_4_hover");
		$("#text2").toggleClass("textclass_hover");
    });
});

/* Square 3*/
$(document).ready(function(){
    $(".col.span_3_of_4").hover(function(){
        $(".span_3_of_4").toggleClass("span_3_of_4_hover");
		$("#text3").toggleClass("textclass_hover");
    });
});

/* Square 4*/
$(document).ready(function(){
    $(".col.span_4_of_4").hover(function(){
        $(".span_4_of_4").toggleClass("span_4_of_4_hover");
		$("#text4").toggleClass("textclass_hover");
    });
});


/*---------Opening scripts---------*/
/* Square 1*/
$(document).ready(function(){
    $("#col1of4").click(function(){
		
		$("#col1of4").animate({top: '-100%'}, "slow");
		$("#col2of4").animate({top: '-100%'}, "slow");
		$("#col3of4").animate({top: '-100%'}, "slow");
		$("#col4of4").animate({top: '-100%'}, "slow");
		$("#col1of4").fadeOut();
		$("#col2of4").fadeOut();
		$("#col3of4").fadeOut();
		$("#col4of4").fadeOut();
		$("#page1").animate({top: '-10%'}, "slow");
		$("#page1").fadeIn();
		$("#button").fadeIn(3000);
		document.getElementById("button").className='active1';
	});
});



/*$(document).ready(function(){
	$("#button").click(function(){
		$("#page1").fadeOut();
		$("#button").hide();
		$("#col1of4").animate({top: '0'}, "slow");
		$("#col2of4").animate({top: '0'}, "slow");
		$("#col3of4").animate({top: '0'}, "slow");
		$("#col4of4").animate({top: '0'}, "slow");
        
		*//*$("#page1").animate({top: '50%'}, "fast");*//*
	});
});
*/
/* Square 2*/
$(document).ready(function(){
    $("#col2of4").click(function(){
		
		$("#col1of4").animate({top: '-100%'}, "slow");
		$("#col2of4").animate({top: '-100%'}, "slow");
		$("#col3of4").animate({top: '-100%'}, "slow");
		$("#col4of4").animate({top: '-100%'}, "slow");
		$("#col1of4").fadeOut();
		$("#col2of4").fadeOut();
		$("#col3of4").fadeOut();
		$("#col4of4").fadeOut();
		$("#page2").animate({top: '-10%'}, "slow");
		$("#page2").fadeIn();
		$("#button").fadeIn(3000);
        document.getElementById("button").className='active2';
        $("#navigate").fadeIn(3000);
        
	});
});


/* Square 3*/
$(document).ready(function(){
	$("#col3of4").click(function(){
		
		$("#col1of4").animate({top: '-100%'}, "slow");
		$("#col2of4").animate({top: '-100%'}, "slow");
		$("#col3of4").animate({top: '-100%'}, "slow");
		$("#col4of4").animate({top: '-100%'}, "slow");
		$("#col1of4").fadeOut();
		$("#col2of4").fadeOut();
		$("#col3of4").fadeOut();
		$("#col4of4").fadeOut();
		$("#page3").animate({top: '-10%'}, "slow");
		$("#page3").fadeIn();
		$("#button").fadeIn(3000);
		document.getElementById("button").className='active3';
	});
});

/* Square 4*/
$(document).ready(function(){
	$("#col4of4").click(function(){
		
		$("#col1of4").animate({top: '-100%'}, "slow");
		$("#col2of4").animate({top: '-100%'}, "slow");
		$("#col3of4").animate({top: '-100%'}, "slow");
		$("#col4of4").animate({top: '-100%'}, "slow");
		$("#col1of4").fadeOut();
		$("#col2of4").fadeOut();
		$("#col3of4").fadeOut();
		$("#col4of4").fadeOut();
		$("#page4").animate({top: '-10%'}, "slow");
		$("#page4").fadeIn();
		$("#button").fadeIn(3000);
		document.getElementById("button").className='active4';
	});
});


/* Homepage button */
$(document).ready(function(){
    $("#button").click(function(){
		$("#page1blog1").hide();
        $("#page1blog2").hide();
        $("#page1blog3").hide();
        $("#page1blog4").hide();
        $("#navigateblog").hide();
		$("#blog1").animate({top: '0'}, "slow");
		$("#blog2").animate({top: '0'}, "slow");
		$("#blog3").animate({top: '0'}, "slow");
		$("#blog4").animate({top: '0'}, "slow");
		$("#page2").fadeOut();
        $("#page1").fadeOut();
        $("#page3").fadeOut();
        $("#page4").fadeOut();
        $("#navigate").hide();
		$("#navigateblog").hide();
		$("#button").hide();
		$("#col1of4").show();
		$("#col2of4").show();
		$("#col3of4").show();
		$("#col4of4").show();
		$("#col1of4").animate({top: '0'}, "slow");
		$("#col2of4").animate({top: '0'}, "slow");
		$("#col3of4").animate({top: '0'}, "slow");
		$("#col4of4").animate({top: '0'}, "slow");
	});
});


/* Square 1: Inside Blogs */

$(document).ready(function(){
    $("#blogtop").click(function(){
        $("#page1").scrollTop(0)
    });
});

/*Blog1*/
$(document).ready(function(){
    $("#blog1").click(function(){
		
		$("#blog1").animate({top: '-125%'}, "slow");
		$("#blog2").animate({top: '-125%'}, "slow");
		$("#blog3").animate({top: '-125%'}, "slow");
		$("#blog4").animate({top: '-125%'}, "slow");
		$("#navigateblog").fadeIn(3000);
		$("#page1blog1").animate({top: '-10%'}, "slow");
		$("#page1blog1").fadeIn();
	});
});

$(document).ready(function(){
    $("#blog1").hover(function(){
	$("#pichead1").hide();},
	function() {
		$("#pichead1").show();
     }
);
});

/*Blog2*/
$(document).ready(function(){
    $("#blog2").click(function(){
		
		$("#blog1").animate({top: '-125%'}, "slow");
		$("#blog2").animate({top: '-125%'}, "slow");
		$("#blog3").animate({top: '-125%'}, "slow");
		$("#blog4").animate({top: '-125%'}, "slow");
		$("#navigateblog").fadeIn(3000);
		$("#page1blog2").animate({top: '-10%'}, "slow");
		$("#page1blog2").fadeIn();
	});
});

$(document).ready(function(){
    $("#blog2").hover(function(){
	$("#pichead2").hide();},
	function() {
		$("#pichead2").show();
     }
);
});
/*Blog3*/
$(document).ready(function(){
    $("#blog3").click(function(){
		$("#blog1").animate({top: '-125%'}, "slow");
		$("#blog2").animate({top: '-125%'}, "slow");
		$("#blog3").animate({top: '-125%'}, "slow");
		$("#blog4").animate({top: '-125%'}, "slow");
		$("#navigateblog").fadeIn(3000);
		$("#page1blog3").animate({top: '-10%'}, "slow");
		$("#page1blog3").fadeIn();
	});
});

$(document).ready(function(){
    $("#blog3").hover(function(){
	$("#pichead3").hide();},
	function() {
		$("#pichead3").show();
     }
);
});
/*Blog4*/
$(document).ready(function(){
    $("#blog4").click(function(){
		
		$("#blog1").animate({top: '-125%'}, "slow");
		$("#blog2").animate({top: '-125%'}, "slow");
		$("#blog3").animate({top: '-125%'}, "slow");
		$("#blog4").animate({top: '-125%'}, "slow");
		$("#navigateblog").fadeIn(3000);
		$("#page1blog4").animate({top: '-10%'}, "slow");
		$("#page1blog4").fadeIn();
	});
});

$(document).ready(function(){
    $("#blog4").hover(function(){
	$("#pichead4").hide();},
	function() {
		$("#pichead4").show();
     }
);
});

/*Back to blogs*/
$(document).ready(function(){
    $("#navigateblog").click(function(){
		$("#page1blog1").fadeOut();
        $("#page1blog2").fadeOut();
        $("#page1blog3").fadeOut();
        $("#page1blog4").fadeOut();
        $("#navigateblog").hide();
		$("#blog1").animate({top: '0'}, "slow");
		$("#blog2").animate({top: '0'}, "slow");
		$("#blog3").animate({top: '0'}, "slow");
		$("#blog4").animate({top: '0'}, "slow");
	});
});



/* Square 2: Inside Resume */
/* Scroll functions and back to the top functions */

$(document).ready(function(){
    $("#top").click(function(){
        $("#page2").scrollTop(0)
    });
});

$(document).ready(function(){
    $("#summary").click(function(){
        var x = $("#resume1").offset().top - $("#page2").offset().top + $("#page2").scrollTop() - 20;
        $("#page2").animate({ scrollTop: x}, "slow");
        
    });
});


$(document).ready(function(){
    $("#education").click(function(){
        var x = $("#resume22").offset().top - $("#page2").offset().top + $("#page2").scrollTop() - 10;
        $("#page2").animate({ scrollTop: x}, "slow");
        
    });
});


$(document).ready(function(){
    $("#workexp").click(function(){
        var x = $("#resume32").offset().top - $("#page2").offset().top + $("#page2").scrollTop() - 10;
        $("#page2").animate({ scrollTop: x}, "slow");
        
    });
});

$(document).ready(function(){
    $("#exp").click(function(){
        var x = $("#resume42").offset().top - $("#page2").offset().top + $("#page2").scrollTop() - 10;
        $("#page2").animate({ scrollTop: x}, "slow");
        
    });
});

$(document).ready(function(){
    $("#skills").click(function(){
        var x = $("#resume52").offset().top - $("#page2").offset().top + $("#page2").scrollTop() - 10;
        $("#page2").animate({ scrollTop: x}, "slow");
        
    });
});

$(document).ready(function(){
    $("#interests").click(function(){
        var x = $("#resume62").offset().top - $("#page2").offset().top + $("#page2").scrollTop() - 10;
        $("#page2").animate({ scrollTop: x}, "slow");
        
    });
});


/*Links for headings*/

function openCCI(){
    window.open("http://www.cci.com/");
}
function openCentrica(){
    window.open("https://www.centrica.com/");
}
function openWarwickUni(){
    window.open("http://www2.warwick.ac.uk/");
}
function openSecondarySchool(){
    window.open("http://www.harrogategrammar.co.uk/");
}
function openWarwickMathsInst(){
    window.open("http://www2.warwick.ac.uk/fac/sci/maths/");
}
function openURSS(){
    window.open("http://www2.warwick.ac.uk/services/scs/experience/urss/");
}
function openWIA(){
    window.open("http://www2.warwick.ac.uk/giving/priority/responsibility/wina/");
}
function openHDFT(){
    window.open("http://www.hdft.nhs.uk/");
}
function openCCF(){
    window.open("http://www.ccfaccountancy.co.uk/");
}
function openAthena(){
    window.open("http://www.ecu.ac.uk/equality-charters/athena-swan/");
}

function openWMS(){
    window.open("http://warwickmaths.org/");
}

function openYoga(){
    window.open("http://warwicksport.warwick.ac.uk/clubs/yoga/");
}



/* Square 3: Inside Projects */

function inprogress() {
	alert('OOPS! This is still a working progress. Contact me for more details!');
}

/* Project 1 */
$(document).ready(function(){
	$("#full1").click(function(){
		if ($("#proj2:visible").length == 0) {
			$("#proj2").show();
    		$("#proj3").show();
			$("#proj4").show();
			$("#proj1text1").hide();
			$("#proj1text2").hide();
			$("#proj1").animate({width: '50%', height: '50%'}, "fast");
            $("#proj2").animate({width: '50%'},"slow");
    		$("#proj3").animate({width: '50%', height: '50%'},"slow");
			$("#proj4").animate({height: '50%'},"slow");
			document.getElementById("proj1scroll").style.overflow = "hidden";
			$(this).text('Take a closer look!');
		}
		else {
			$("#proj2").hide();
			$("#proj3").hide();
			$("#proj4").hide();
			$("#proj1text1").fadeIn();
			$("#proj1text2").fadeIn();
			$("#proj2").animate({width: '0%'},"slow");
			$("#proj3").animate({width: '0%', height: '0%'},"slow");
			$("#proj4").animate({height: '0%'},"slow");
			$("#proj1").animate({width: '100%', height: '100%'}, "slow");
			document.getElementById("proj1scroll").style.overflow = "auto";
			$(this).text('GET ME OUT OF HERE!');	
		}
	});
	
});

/* Project 2 */
$(document).ready(function(){
	$("#full2").click(function(){
		
		if ($("#proj1:visible").length == 0) {
			$("#proj1").show();
			$("#proj3").show();
			$("#proj4").show();
			$("#proj2text1").hide();
			$("#proj2text2").hide();
			$("#proj2").animate({width: '50%', height: '50%'}, "fast");
			$("#proj1").animate({width: '50%'},"slow");
			$("#proj3").animate({height: '50%'},"slow");
			$("#proj4").animate({width: '50%', height: '50%'},"slow");
			document.getElementById("proj2scroll").style.overflow = "hidden";
			$(this).text('Take a closer look!');	
		}
		else {
			$("#proj2").animate({width: '100%', height: '100%'}, "slow");
			$("#proj1").animate({width: '0%'},"fast");
			$("#proj3").animate({height: '0%'},"fast");
			$("#proj4").animate({height: '0%'},"fast");
			$("#proj2text1").fadeIn();
			$("#proj2text2").fadeIn();
			$("#proj1").hide();
			$("#proj3").hide();
			$("#proj4").hide();
			document.getElementById("proj2scroll").style.overflow = "auto";
			$(this).text('GET ME OUT OF HERE!');
		}
	});	
});


/*project 3*/
$(document).ready(function(){
	$("#full3").click(function(){
		if ($("#proj4:visible").length == 0) {
			$("#proj1").show();
    		$("#proj2").show();
			$("#proj4").show();
			$("#proj3text1").hide();
			$("#proj3text2").hide();
			$("#proj3text3").hide();
			$("#proj3").animate({width: '50%', height: '50%'}, "fast");
            $("#proj1").animate({width: '50%', height: '50%'},"slow");
    		$("#proj2").animate({height: '50%'},"slow");
			$("#proj4").animate({width: '50%'},"slow");
			document.getElementById("proj3scroll").style.overflow = "hidden";
			$(this).text('Take a closer look!');	
		}
		else {
			$("#proj3").animate({width: '100%', height: '100%'}, "slow");
			$("#proj1").animate({height: '0%'},"fast");
			$("#proj2").animate({height: '0%'},"fast");
			$("#proj4").animate({width: '0%'},"fast");
			$("#proj3text1").fadeIn();
			$("#proj3text2").fadeIn();
			$("#proj3text3").fadeIn();
            $("#proj1").hide();
            $("#proj2").hide();
            $("#proj4").hide();
			document.getElementById("proj3scroll").style.overflow = "auto";
			$(this).text('GET ME OUT OF HERE!');
		}
	});	
});

/*Project4*/
$(document).ready(function(){
	$("#full4").click(function(){
		if ($("#proj1:visible").length == 0) {
			$("#proj1").show();
    		$("#proj2").show();
			$("#proj3").show();
			$("#proj4text1").hide();
			$("#proj4text2").hide();
			$("#proj4text3").hide();
			$("#proj4").animate({width: '50%', height: '50%'}, "fast");
            $("#proj1").animate({height: '50%'},"slow");
    		$("#proj2").animate({height: '50%'},"slow");
			$("#proj3").animate({width: '50%', height: '50%'},"slow");
			document.getElementById("proj4scroll").style.overflow = "hidden";
			$(this).text('Take a closer look!');	
		}
		else {
			$("#proj4").animate({width: '100%', height: '100%'}, "slow");
			$("#proj1").animate({height: '0%'},"fast");
			$("#proj2").animate({height: '0%'},"fast");
			$("#proj3").animate({width: '0%'},"fast");
			$("#proj4text1").fadeIn();
			$("#proj4text2").fadeIn();
			$("#proj4text3").fadeIn();
            $("#proj1").hide();
            $("#proj2").hide();
            $("#proj3").hide();
			document.getElementById("proj4scroll").style.overflow = "auto";
			$(this).text('GET ME OUT OF HERE!');
		}
	});	
});


/* Inside Contact Me */

function openLinkedin(){
    window.open("https://uk.linkedin.com/pub/roseanna-ferguson/78/165/b32");
}
