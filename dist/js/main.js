jQuery(document).ready(function($) {
    $(document).scroll(function() {
        var $nav = $(".navbar-fixed-top");
        console.log($(this).scrollTop());
        console.log($nav.height());
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    var owl = $('#owl1');
    owl.owlCarousel({
        loop: true,
        margin: 38.25,
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
