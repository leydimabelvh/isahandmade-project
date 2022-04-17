//--------- Navbar
$(window).scroll(function() {
    if ($(window).scrollTop() >= 0) {
        $('.navbar').css('background', '#382d34')
    } 
});

//--------- Comments
$('.comment__sider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
    smartSpeed: 700,
})

//--------- Blog
$('.blog__slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    smartSpeed: 700,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})