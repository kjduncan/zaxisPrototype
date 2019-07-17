$("button.select").click(function(){
  $(this).toggleClass("active");

});

$("button.products").click(function(){
  $(this).addClass("line");
  $("button.canvas").removeClass("line");

});
$("button.canvas").click(function(){
  $(this).addClass("line");
  $("button.products").removeClass("line");

});
$( "#clickme" ).click(function () {
  if ( $( "div.contributors" ).is( ":hidden" ) ) {
    $( "div.contributors" ).slideDown( "slow" );
  } else {
    $( "div.contributors" ).hide();
  }
});
