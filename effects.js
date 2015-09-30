$(window).scroll(function() {
    if($(this).scrollTop() > 300)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.transparent-navbar').addClass('transparent');
    } else {
        $('.transparent-navbar').removeClass('transparent');
    }
});