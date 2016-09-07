$(document).ready(function()
{


$(document).on('scroll',function()
{
  var lic = $(document).scrollTop();

if(lic>550){
$(".feature-1 .wp-1").addClass("animated fadeInRight");
$(".feature-1 .wp-2").addClass("animated fadeInLeft");	};

if(lic>1100){
$(".feature-2 .wp-3").addClass("animated fadeInRight");
$(".feature-2 .wp-4").addClass("animated fadeInLeft");	};

if(lic>1650){
$(".feature-3 .wp-5").addClass("animated fadeInRight");
$(".feature-3 .wp-6").addClass("animated fadeInLeft");	};	

});


});