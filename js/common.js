// 공통 ----------------------------------------------------------------


// 헤더/푸터 -----------------------------------------------------------
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
// 섹션1,2 -------------------------------------------------------------
function fading(){
    $("#slogan")
        .addClass('active')
        .css({ opacity: 0 })
        .animate({ opacity: 1 },1000, function() {
            $("#slogan").append($("#slogan"))
            $("#slogan").removeClass('active');
        })
}	
setInterval(fading);

// 섹션3,4 -------------------------------------------------------------
// section4 이미지 애니메이션
$("#charNameList").slick({ 
    infinite: true,
    autoplay: true, autoplaySpeed: 1500,
    slidesToShow: 4, slidesToScroll: 1,
    variableWidth: true,
    reponsive: [
        {
            breakpoint: 1326,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3, slidesToScroll: 1,
                variableWidth: true
        }},
        {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                variableWidth: true
                }
        }
    ]

});