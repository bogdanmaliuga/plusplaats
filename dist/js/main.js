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
            667:{
                items:3,
                pagination:false
            },
            768: {
                items:2
            },
            1024:{
                items:3
            },
            1300:{
                items:4
            }




        }
    });
});