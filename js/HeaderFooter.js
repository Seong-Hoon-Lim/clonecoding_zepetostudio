window.addEventListener("load", function() {
    $("#mobileGnb").css({ left: "-500px" })
})

// .sidemenuSnb > li 마우스 오버
$(".sidemenuList:eq(0) a").on("mouseenter", function() {
    $(".sidemenuList:eq(0) .sidemenuSnb > li").css({ display: "block" })
})
$(".sidemenuList:eq(0) a").on("mouseleave", function() {
    $(".sidemenuList:eq(0) .sidemenuSnb > li").css({ display: "none" })
})
$(".sidemenuList:eq(3) a").on("mouseenter", function() {
    $(".sidemenuList:eq(3) .sidemenuSnb > li").css({ display: "block" })
})
$(".sidemenuList:eq(3) a").on("mouseleave", function() {
    $(".sidemenuList:eq(3) .sidemenuSnb > li").css({ display: "none" })
})

// #sidemenuLag > dt 마우스 오버
$("#sidemenuLag dt").on("mouseenter", function() {
    $("#sidemenuLag li").css({ display: "block" })
})
$("#sidemenuLag dt").on("mouseenter", function() {
    $("#sidemenuLag li").css({ display: "none" })
})

// #mobileGnb 클릭
$("#mobileGnb").on("click", function() {
    $("#mobileGnb").css({ left: "-500px" });
})
$("#sidebutton").on("click", function() {
    $("#mobileGnb").css({ left: 0 });
})