// CUSTOM JQUERY UI START

// Smooth Scrolling for Navigation Links
$(document).ready(function () {
    $('.smooth-scroll').on('click', function (e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000, 'easeInOutExpo');
        }
    });
});

// Header Video Background Enhancement
$(document).ready(function () {
    // Ensure video plays
    var video = $('.video-background video')[0];
    if (video) {
        video.play().catch(function (error) {
            console.log('Video autoplay prevented:', error);
        });
    }

    // Add scroll effect to header
    $(window).scroll(function () {
        var scrolled = $(this).scrollTop();
        var rate = scrolled * -0.5;
        $('.video-background').css('transform', 'translate3d(0, ' + rate + 'px, 0)');
    });
});

// Navigation Active State
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        $('.nav-link').each(function (i) {
            var target = $($(this).attr('href'));
            if (target.length && target.offset().top <= scrollDistance + 200) {
                $('.nav-link').removeClass('active');
                $(this).addClass('active');
            }
        });
    });
});

// AFFIX NAVIGATION 
$(document).ready(function () {

    var toggleAffix = function (affixElement, scrollElement, wrapper) {

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

    $('[data-toggle="affix"]').each(function () {
        var ele = $(this),
            wrapper = $('<div></div>');

        ele.before(wrapper);
        $(window).on('scroll resize', function () {
            toggleAffix(ele, $(this), wrapper);
        });

        // init
        toggleAffix(ele, $(window), wrapper);
    });

});
// OWL JS
$(document).ready(function () {

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