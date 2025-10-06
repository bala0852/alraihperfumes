// CUSTOM JQUERY UI START

// AFFIX NAVIGATION 
$(document).ready(function() {

    var toggleAffix = function(affixElement, scrollElement, wrapper) {

        var height = affixElement.outerHeight(),
            top = wrapper.offset().top;

        if (scrollElement.scrollTop() >= top) {
            wrapper.height(height);
            affixElement.addClass("affix");
        } else {
            affixElement.removeClass("affix");
            wrapper.height('auto');
        }

    };

    $('[data-toggle="affix"]').each(function() {
        var ele = $(this),
            wrapper = $('<div></div>');

        ele.before(wrapper);
        $(window).on('scroll resize', function() {
            toggleAffix(ele, $(this), wrapper);
        });

        // init
        toggleAffix(ele, $(window), wrapper);
    });

});
// OWL JS
$(document).ready(function() {

    $('#productBrands').owlCarousel({
        loop: false,
        nav: true,
        itemsDesktop: false,
        itemsMobile: true,
        dots: false,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 25,
            },
            600: {
                items: 2,
                margin: 25,
            },
            990: {
                items: 4,
                margin: 25,
                nav: true,
            },
            1000: {
                items: 4,
                drag: false,
                nav: false,
                dots: false,
                loop: false,
            }
        }
    });
    $('#whatWeOffer').owlCarousel({
        loop: false,
        nav: true,
        itemsDesktop: false,
        itemsMobile: true,
        dots: false,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 25,
            },
            600: {
                items: 2,
                margin: 25,
            },
            990: {
                items: 4,
                margin: 25,
                nav: true,
            },
            1000: {
                items: 4,
                drag: false,
                nav: false,
                dots: false,
                loop: false,
            }
        }
    });
    $('#buyLuxuryWatchesUhren').owlCarousel({
        loop: false,
        nav: true,
        itemsDesktop: false,
        itemsMobile: true,
        dots: true,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
            },
            768: {
                items: 2,
                dots: true,
                nav: false,
            },
            800: {
                items: 3,
                dots: true,
                nav: false,
            },
            1000: {
                items: 4,
                drag: false,
                nav: false,
                dots: false,
                loop: false,
            }
        }
    });
    $('#buyLuxuryWatchesSchmuck').owlCarousel({
        loop: false,
        nav: true,
        itemsDesktop: false,
        itemsMobile: true,
        dots: true,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
            },
            768: {
                items: 2,
                dots: true,
                nav: false,
            },
            800: {
                items: 3,
                dots: true,
                nav: false,
            },
            1000: {
                items: 4,
                drag: false,
                nav: false,
                dots: false,
                loop: false,
            }
        }
    });

    $('#brandSlides').owlCarousel({
        loop: false,
        nav: true,
        itemsDesktop: false,
        itemsMobile: true,
        dots: true,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: true,
            },
            768: {
                items: 3,
                dots: true,
                nav: false,
            },
            800: {
                items: 4,
                dots: true,
                nav: false,
            },
            1000: {
                items: 5,
                drag: false,
                nav: false,
                dots: false,
                loop: false,
            }
        }
    });

    $('#featuredWatches').owlCarousel({
        loop: false,
        nav: true,
        itemsDesktop: false,
        itemsMobile: true,
        dots: true,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
            },
            768: {
                items: 2,
                dots: true,
                nav: false,
            },
            800: {
                items: 2,
                dots: true,
                nav: false,
            },
            1000: {
                items: 3,
                dots: true,
                nav: false,
            },
            1200: {
                items: 4,
                drag: false,
                nav: false,
                dots: false,
                loop: false,
                margin: 20
            }
        }
    });

});