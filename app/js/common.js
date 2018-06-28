$(function() {

	$('a[href^="#"]').click(function() {
    $("html,body").animate({ scrollTop: $(this.hash).offset().top - 15 });
    return false;
    e.preventDefault();
  });

  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
    $(".header-menu")
      .toggleClass("nav-is-active")
      .css("transition", "all .3s ease-in-out");
  });

function scrollbarWidth() {
  var block = $("<div>").css({ height: "50px", width: "50px" }),
    indicator = $("<div>").css({ height: "200px" });

  $("body").append(block.append(indicator));
  var w1 = $("div", block).innerWidth();
  block.css("overflow-y", "scroll");
  var w2 = $("div", block).innerWidth();
  $(block).remove();
  return w1 - w2;
}
$.fn.multiline = function(text) {
  this.text(text);
  this.html(this.html().replace(/\n/g, "<br/>"));
  return this;
};

$(window).on("resize", function() {
	$(".header-menu").css("transition", "none");
	var winwidth = $(window).outerWidth();
  if (winwidth < 992 - scrollbarWidth()) {
   $("#bar-title1").multiline("1.");
   $("#bar-title2").multiline("2.");
   $("#bar-title3").multiline("3.");
   $("#bar-title4").multiline("4.");
  } else  {
     $("#bar-title1").multiline("Не владею");
     $("#bar-title2").multiline("Использую готовые\n решения");
     $("#bar-title3").multiline("Использую готовые решения\n и умею и переделывать");
     $("#bar-title4").multiline("Пишу сложный JS с нуля");
  }
});

$(document).ready(function() {
  var winwidth = $(window).outerWidth();
  if (winwidth < 992 - scrollbarWidth()) {
    $("#bar-title1").multiline("1.");
    $("#bar-title2").multiline("2.");
    $("#bar-title3").multiline("3.");
    $("#bar-title4").multiline("4.");
  } else {
	      $("#bar-title1").multiline("Не владею");
        $("#bar-title2").multiline("Использую готовые\n решения");
        $("#bar-title3").multiline("Использую готовые решения\n и умею и переделывать");
        $("#bar-title4").multiline("Пишу сложный JS с нуля");
  }
});
$("#year").datepicker({
  changeMonth: true,
  changeYear: true,
  yearRange: "1930:2010"
});


$(function() {
  var select = $("#minbeds");
  var slider = $("<div id='slider'></div>")
    .insertAfter(select)
    .slider({
      min: 1,
      max: 4,
      range: "min",
      value: select[0].selectedIndex + 1,
      slide: function(event, ui) {
        select[0].selectedIndex = ui.value - 1;
      }
    });
  $("#minbeds").on("change", function() {
    slider.slider("value", this.selectedIndex + 1);
  });
});

});
