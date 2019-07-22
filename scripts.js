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
var productsOpenCount = 0
function isProductOpen($el){
  if ($el.hasClass("block")) {
    productsOpenCount += 1
  }
  else {
    productsOpenCount -= 1
  }
  console.log(productsOpenCount);
  if (productsOpenCount === 1) {
    $("#products").removeClass("two-column");
    $("#products").removeClass("three-column");
    $("#products").addClass("one-column");
  }
  else if (productsOpenCount >= 2 && productsOpenCount < 5) {
    $("#products").removeClass("one-column");
    $("#products").removeClass("three-column");
    $("#products").addClass("two-column");
  }
  else if (productsOpenCount >= 5) {
    $("#products").removeClass("one-column");
    $("#products").removeClass("two-column");
    $("#products").addClass("three-column");
  }
}

$("#card").click(function(){
  $("li.inviteCard").toggleClass("block");
  isProductOpen($("li.inviteCard"));
});
$("#giftWrap").click(function(){
  $("li.wrap").toggleClass("block");
  isProductOpen($("li.wrap"));
});
$("#cupSelect").click(function(){
  $("li.cup").toggleClass("block");
  isProductOpen($("li.cup"));
});
$("#hatSelect").click(function(){
  $("li.hat").toggleClass("block");
  isProductOpen($("li.hat"));
});
$("#balloonSelect").click(function(){
  $("li.balloon").toggleClass("block");
  isProductOpen($("li.balloon"));
});
