window.addEventListener("load", function() {
    $("#mobileGnb").css({ left: "-500px" })
})

// .sidemenuSnb > li 마우스 오버
$(".sidemenuList:eq(0)").on("mouseenter", function() {
    $(".sidemenuList:eq(0) .sidemenuSnb > li").slideDown();
})
$(".sidemenuList:eq(0)").on("mouseleave", function() {
    $(".sidemenuList:eq(0) .sidemenuSnb > li").slideUp();
})
$(".sidemenuList:eq(3)").on("mouseenter", function() {
    $(".sidemenuList:eq(3) .sidemenuSnb > li").slideDown();
})
$(".sidemenuList:eq(3)").on("mouseleave", function() {
    $(".sidemenuList:eq(3) .sidemenuSnb > li").slideUp();
})

// #sidemenuLag > dt 마우스 클릭
$("#sidemenuLag dt").toggle(
   function() {
    $("#sidemenuLag li").slideDown();
}, function() {
    $("#sidemenuLag li").slideUp();
})

// #mobileGnb 클릭
$("#mobileGnbClose a").on("click", function() {
    $("#mobileGnb").css({ left: "-500px" });
})
$("#sidebutton").on("click", function() {
    $("#mobileGnb").css({ left: 0 });
})

// #footerList li 클릭
$("#footerList").toggle(    
    function() {
        $("#footerList ul .footerSnb").slideDown();
},  function() {
        $("#footerList ul .footerSnb").slideup();
});

// #lag 클릭
$("#lag").toggle(
    function(){
        $("#lag").css({ overflow: "visible" });
},  function() {
        $("#lag").css({ overflow: "hidden" });
});