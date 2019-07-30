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
$("button.products").click(function(){
  $("div.high-preview").addClass("block");
});
$("button.canvas").click(function(){
  $("div.high-preview").removeClass("block");
});
$( "#contribute-open" ).click(function () {
  if ( $( "div.contributors" ).is( ":hidden" ) ) {
    $( "div.contributors" ).slideDown( "slow" );
  } else {
    $( "div.contributors" ).hide();
  }
});

$("button.products").click(function(){
  $("div.layout").addClass("hidden");
  $("#layout-open").removeClass("sidebar-active");
});
$("button.canvas").click(function(){
  $("div.layout").removeClass("hidden");
  $("#layout-open").addClass("sidebar-active")
});
// $("img.layout-image").click(function(){
//   $(this).toggleClass("active-border");
// });

// $( "#layout-open" ).click(function () {
//   if ( $( "div.layout" ).is( ":hidden" ) ) {
//     $( "div.layout" ).slideToggle("slow");
//   } else {
//     $( "div.layout" ).hide();
//   }
// });
$("#layout-open").click(function(){
    $("div.layout").animate({
      width: "toggle"
    });
    $(this).toggleClass("sidebar-active");
  });

$("#layout-open").click(function(){
  $("div.layout-selected").toggleClass("block");
});

var productsOpenCount = 0
function isProductOpen($el){
  if ($el.hasClass("block")) {
    productsOpenCount += 1
  }
  else {
    productsOpenCount -= 1
  }
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



var modal = document.getElementById("spreadModal");

var btn = document.getElementById("modalGo");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
