jQuery(document).ready(function($) {
    
    $(document).scroll(function() {
        var $nav = $(".navbar-fixed-top");
        console.log($(this).scrollTop());
        console.log($nav.height());
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

     $(".scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#scrollTo").offset().top - $(".navbar-fixed-top").height()-56
        }, 2000);
    });
     $(".lessLink").click(function() {
        $('html, body').animate({
            scrollTop: $("#lessBlock").offset().top - $(".navbar-fixed-top").height()-15
        }, 2000);
    });

    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
    $('.navbar-toggle').click(function(event) {

        if ($(this).hasClass('collapsed')) {
            $(this).addClass('menu-show');
            $('.navbar').addClass('hover-navbar');


        } else {
            $(this).removeClass('menu-show');
            $('.navbar').removeClass('hover-navbar');


        }
    });
    var owl = $('#owl1');
    $('.friend-right-click').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.friend-left-click').click(function() {
        owl.trigger('prev.owl.carousel');
    })
    owl.owlCarousel({
        loop: true,
        margin: 38.25,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1,
                pagination: false,
                margin: 12,
                stagePadding: 32.5
            },
            540: {
                items: 2,
                pagination: false
            },
            667: {
                items: 3,
                pagination: false
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1300: {
                items: 4
            }




        }
    });
    var owlPhotos = $('#owl-photos');
    $('.photo-right-click').click(function() {
        owlPhotos.trigger('next.owl.carousel');
    })
    $('.photo-left-click').click(function() {
        owlPhotos.trigger('prev.owl.carousel');
    })
    owlPhotos.owlCarousel({
        loop: true,
        margin: 38.33,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1,
                pagination: false,
                margin: 27,
                stagePadding: 54
            },
            540: {
                items: 2,
                pagination: false
            },
            667: {
                items: 3,
                pagination: false
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1300: {
                items: 4
            }




        }
    });
    var owlSearch = $('#owl-search-1');
    owlSearch.owlCarousel({
        loop: true,
        margin: 38.25,
        mouseDrag: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                pagination: false,
                margin: 27,
                stagePadding: 54
            },
            540: {
                items: 2,
                pagination: false
            },
            667: {
                items: 3,
                pagination: false
            },
            768: {
                items: 2,
                pagination: false
            },
            1024: {
                items: 3,
                pagination: false
            },
            1300: {
                items: 3,
                pagination: false
            }
        }
    });
    var owlSearch2 = $('#owl-search-2');
    owlSearch2.owlCarousel({
        loop: true,
        margin: 38.25,
        mouseDrag: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                pagination: false,
                margin: 27,
                stagePadding: 54
            },
            540: {
                items: 2,
                pagination: false
            },
            667: {
                items: 3,
                pagination: false
            },
            768: {
                items: 2,
                pagination: false
            },
            1024: {
                items: 3,
                pagination: false
            },
            1300: {
                items: 3,
                pagination: false
            }
        }
    });
    var owlSearch3 = $('#owl-search-3');
    owlSearch3.owlCarousel({
        loop: true,
        margin: 38.25,
        mouseDrag: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                pagination: false,
                margin: 27,
                stagePadding: 54
            },
            540: {
                items: 2,
                pagination: false
            },
            667: {
                items: 3,
                pagination: false
            },
            768: {
                items: 2,
                pagination: false
            },
            1024: {
                items: 3,
                pagination: false
            },
            1300: {
                items: 3,
                pagination: false
            }
        }
    });
});
