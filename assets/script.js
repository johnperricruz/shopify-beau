$(function(){
  console.log("Loaded.................100%");
  
  $('.loading').fadeOut();
  openReviewTab();
});

function openReviewTab(){
    $("a#review").click(function(e){
		console.log(e);
        e.preventDefault(); //Prevents hash to be appended at the end of the current URL.
      
      	$("div#nav-tab a").removeClass('active show');
        $("a#nav-review-tab").addClass('active show'); 
      
        $(".tab-pane").removeClass('active show');
        $("div#nav-review").addClass('active show');
      
        $('html, body').animate({
            scrollTop: $("div#nav-tab").offset().top
        }, 1000); //Change to whatever you want, this value is in milliseconds.
    });
}