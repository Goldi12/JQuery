$("h1").addClass("big-title margin-50 makeaborder");


$("button").text("i'm changing");

$("button").css("color", "red");

$("button").html("<em>Sign up</em>")

console.log($("img").attr("src"));


$("a").attr("href", "www.goldigupta.com");

$("h1").click(function() {
  $("h1").css("color", "purple");

  setTimeout(function() {
    $("h1").removeClass("makeaborder");

  }, 100);
});




$("button").click(function(){
  $("h1").css("color", "cyan");
});


$("input").keypress(function(event){
  console.log(event.key);
});
$(document).keypress(function(event){
  $("h1").html(event.key);

});




$("h1").on("mouseover", function(){
  $("h1").addClass("namefame");

  setTimeout(function(){
    $("h1").removeClass("namefame");

  },300);

});




$("h1").before("<button>I am Up</button>");
$("h1").after("<button>I am Down</button>");
$("h1").prepend("<button>I am On Left</button>");
$("h1").append("<button>I am on Right</button>");



$("img").on("mouseover", function(){
  $("h1").hide();

});

$("a").on("mouseover", function(){
  $("h1").show();
});


// $("button").remove();
$("h2").on("click", function(){
  $("h1").toggle();
});




// CAN ALSO USE FadeIn , FadeOut

$("h3").on("click", function(){
  $("h1").fadeToggle();
});




// CAN ALSO USE slideUp & slideDown

$("h4").on("click", function(){
  $("h1").slideToggle();
});

// can only be numeriric value works here color can't work

$("h5").on("click", function(){
  $("h1").animate({opacity: 0.5, margin: "29%"});
});
$("h6").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
