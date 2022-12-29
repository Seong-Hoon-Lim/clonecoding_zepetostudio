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
