function initTrion() {
    //   loader ------------------
    "use strict";
    firstLoad();
    function firstLoad() {
        setTimeout(function () {
            jQuery(".main-loader-wrap .loader-spin").addClass("novisspin");
        }, 1500);
        setTimeout(function () {
            jQuery(".main-loader-wrap").fadeOut(500);
        }, 2200);
        var chdpt = jQuery(".content-holder").data("pagetitle");
        jQuery(".breadcrumb-wrap span").text(chdpt);
    }
    //   Background image ------------------
    var a = jQuery(".bg");
    a.each(function (a) {
        if (jQuery(this).attr("data-bg")) jQuery(this).css("background-image", "url(" + jQuery(this).data("bg") + ")");
    });
    //  scrollToFixed------------------
    jQuery(".scroll-nav-wrap ").scrollToFixed({
        minWidth: 1068,
        zIndex: 112,
        marginTop: 90,
    });
    jQuery(".boxed-filter").scrollToFixed({
        minWidth: 1068,
        zIndex: 112,
        marginTop: 60,
    });
    jQuery(".fix-tab").scrollToFixed({
        minWidth: 1068,
        zIndex: 112,
        marginTop: 170,
        removeOffsets: true,
        limit: function () {
            var a = jQuery(".limit-box").offset().top - jQuery(".fix-tab").outerHeight(true) + 10;
            return a;
        }
    });
    jQuery(".fix-aside").scrollToFixed({
        minWidth: 1258,
        zIndex: 112,
        marginTop: 110,
        removeOffsets: true,
        limit: function () {
            var a = jQuery(".limit-box").offset().top - jQuery(".fix-aside").outerHeight(true);
            return a;
        }
    });
    if (jQuery(".fixed-bar").outerHeight(true) < jQuery(".post-container").outerHeight(true)) {
        jQuery(".fixed-bar").addClass("fixbar-action");
        jQuery(".fixbar-action").scrollToFixed({
            minWidth: 1064,
            marginTop: function () {
                var a = jQuery(window).height() - jQuery(".fixed-bar").outerHeight(true) - 100;
                if (a >= 0) return 20;
                return a;
            },
            removeOffsets: true,
            limit: function () {
                var a = jQuery(".limit-box").offset().top - jQuery(".fixed-bar").outerHeight() - 30;
                return a;
            }
        });
    } else jQuery(".fixed-bar").removeClass("fixbar-action");
    //   Isotope------------------
    function n() {
        if (jQuery(".gallery-items").length) {
            var a = jQuery(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three"
            });
            a.imagesLoaded(function () {
                a.isotope("layout");
            });
            jQuery(".gallery-filters").on("click  ", "a.gallery-filter", function (b) {
                b.preventDefault();
                var c = jQuery(this).attr("data-filter"),
                    d = jQuery(this).text();
                a.isotope({
                    filter: c
                });
                jQuery(".gallery-filters a").removeClass("gallery-filter-active");
                jQuery(this).addClass("gallery-filter-active");
            });
        }
        jQuery(".gallery-items").isotope("on", "layoutComplete", function (a, b) {
            var b = a.length;
            jQuery(".num-album").html(b);
        });
        var b = jQuery(".gallery-item").length;
        jQuery(".all-album , .num-album").html(b);
    }
    n();
    jQuery(window).on("load", function () {
        n();
    });
    jQuery(".gallery-item").on(' ', function () {
        jQuery(this).trigger('hover');
    }).on('touchend', function () {
        jQuery(this).trigger('hover');
    });
    //   Swiper------------------
    if (jQuery(".portfolio-wrap").length > 0) {
        var prwrap = new Swiper(".portfolio-wrap .swiper-container", {
            slidesPerView: "auto",
			//preloadImages: false,
            centeredSlides: false,
            spaceBetween: 10,
            grabCursor: true,
            freeMode: false,


            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',

            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    if (jQuery(".fs-gallery-wrap").length > 0) {
        var h = jQuery(".fs-gallery-wrap").data("autoplayslider"),
            i = jQuery(".fs-gallery-wrap").data("slidereffect");
        var j = new Swiper(".fs-gallery-wrap .swiper-container", {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            effect: i,
            speed: 1400,
            grabCursor: true,
            loop: true,
            parallax: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        j.on("slideChangeTransitionStart", function () {
            jQuery(".slider-progress-bar").removeClass("act-slider");
        });
        j.on("slideChangeTransitionEnd", function () {
            jQuery(".slider-progress-bar").addClass("act-slider");
        });
    }
    if (jQuery(".hero-carousel ").length > 0) {
        var heroCarusel = new Swiper(".hero-carousel .swiper-container", {
            preloadImages: false,
            loop: true,
            centeredSlides: true,
            freeMode: false,
            slidesPerView: 2,
            spaceBetween: 10,
            grabCursor: true,
            mousewheel: false,
            parallax: true,
            speed: 1400,
            effect: "slide",
            init: false,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.fs-slider-wrap_pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1064: {
                    slidesPerView: 2
                },
                640: {
                    slidesPerView: 1,
                    centeredSlides: false,
                },
            }
        });
        setTimeout(function () {
            heroCarusel.init();
        }, 1);
        heroCarusel.on("slideChangeTransitionStart", function () {
            jQuery(".slider-progress-bar").removeClass("act-slider");
        });
        heroCarusel.on("slideChangeTransitionEnd", function () {
            jQuery(".slider-progress-bar").addClass("act-slider");
        });
    }
    if (jQuery(".single-slider").length > 0) {
        var m2 = new Swiper(".single-slider .swiper-container", {
            effect: jQuery(".single-slider").data("effects"),
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true,
            grabCursor: true,
            autoHeight: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    if (jQuery(".testilider").length > 0) {
        var m = new Swiper(".testilider .swiper-container", {
            pagination: {
                el: '.testi-pagination',
                type: 'fraction',

            },
            effect: jQuery(".single-slider").data("effects"),
            loop: true,
            grabCursor: true,
            autoHeight: false,
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    centeredSlides: false,
                }
            }
        });
    }
    if (jQuery(".inline-carousel").length > 0) {
        var swiper2 = new Swiper('.inline-carousel .swiper-container', {
            pagination: {
                el: '.client-pagin',
                clickable: true,
            },
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 10,
            loop: true,

            navigation: {
                nextEl: '.inline-car-control .swiper-button-next',
                prevEl: '.inline-car-control .swiper-button-prev',
            },
            breakpoints: {
                1064: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                520: {
                    slidesPerView: 1,
                },
            }
        });
    }
    //   lightGallery------------------
    jQuery(".image-popup , .single-popup-image").lightGallery({
        selector: "this",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        counter: false
    });
    var o = jQuery(".lightgallery"),
        p = o.data("looped");
    o.lightGallery({
        selector: ".lightgallery a.popup-image , .lightgallery  a.popgal",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        loop: p,
        counter: false
    });
    jQuery('#html5-videos').lightGallery({
        selector: 'this',
        counter: false,
        download: false,
        zoom: false
    });
    jQuery(".filter-button").on("click  ", function () {
        jQuery(".hid-filter").slideToggle(500);
    });
    jQuery(".mob-filter_btn").on("click  ", function () {
        jQuery(".gfm").slideToggle(500);
    });
    //   appear------------------
    jQuery(".stats").appear(function () {
        jQuery(".num").countTo();
    });
    jQuery(".inline-facts").append("<span class='dec-counter'></span>");
    jQuery(".dec-counter").each(function () {
        var numdec = jQuery(this).parents(".inline-facts").find("div.num").data("num");
        jQuery(this).text(numdec)
    });
    jQuery(".piechart-holder").appear(function () {
        jQuery(this).find(".chart").each(function () {
            var cbc = jQuery(".piechart-holder").attr("data-skcolor");
            jQuery(".chart").easyPieChart({
                barColor: cbc,
                trackColor: "#3F3F44",
                scaleColor: false,
                size: "150",
                lineWidth: "45",
                lineCap: "butt",
                animate: 3500,
                easing: "easeInBounce",
                onStep: function (a, b, c) {
                    jQuery(this.el).find(".percent").text(Math.round(c));
                }
            });
        });
    });
    jQuery(".skillbar-box").appear(function () {
        jQuery(this).find("div.skillbar-bg").each(function () {
            jQuery(this).find(".custom-skillbar").delay(600).animate({
                width: jQuery(this).attr("data-percent")
            }, 1500);
        });
    });
    // Share   ------------------
    jQuery(".share-container").share({
        networks: ['facebook', 'pinterest', 'twitter', 'tumblr']
    });
    var shrcn = jQuery(".share-container"),
        swra = jQuery(".share-wrapper"),
        shic = jQuery(".share-icon"),
        ssbtn = jQuery(".show-share");
    function showShare() {
        swra.slideDown(300);
        ssbtn.addClass("uncl-share");
        shrcn.removeClass("isShare");
        shic.each(function (a) {
            var boi = jQuery(this);
            setTimeout(function () {
                TweenMax.to(boi, 1.0, {
                    force3D: false,
                    opacity: "1"
                });
            }, 130 * a);
        });
    }
    function hideShare() {
        ssbtn.removeClass("uncl-share");
        shrcn.addClass("isShare");
        TweenMax.to(jQuery(".share-icon"), 1.0, {
            force3D: false,
            opacity: "0",
            onComplete: function () {
                swra.slideUp(300);
            }
        });
    }
    ssbtn.on("click", function () {
        if (jQuery(".share-container").hasClass("isShare")) showShare();
        else hideShare();
    });
    //   tabs------------------
    jQuery("ul.tabs li").on("click", function () {
        var a = jQuery(this).attr("data-tab"),
            b = jQuery("ul.tabs li");
        b.removeClass("current");
        jQuery(".tab-content").removeClass("current");
        jQuery(this).addClass("current");
        jQuery("#" + a).addClass("current");
        return false;
    });
    //   scroll to------------------
    jQuery(".custom-scroll-link").on("click", function () {
        var a = 70;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = jQuery(this.hash);
            b = b.length ? b : jQuery("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                jQuery("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
    jQuery(".scroll-nav  ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 140,
        threshold: 140,
        speed: 1200,
        currentClass: "act-link"
    });
    jQuery(".to-top").on("click", function (a) {
        a.preventDefault();
        jQuery("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    jQuery(window).on("scroll", function () {
        var a = jQuery(document).height();
        var b = jQuery(window).height();
        var c = jQuery(window).scrollTop();
        var d = c / (a - b) * 100;
        jQuery(".progress-bar").css({
            width: d + "%"
        });
    });
     //   Contact form------------------
     jQuery("#contactform").submit(function() {
         var a = jQuery(this).attr("action");
         jQuery("#message").slideUp(750, function() {
             jQuery("#message").hide();
             jQuery("#submit").attr("disabled", "disabled");
             jQuery.post(a, {
                 name: jQuery("#name").val(),
                 email: jQuery("#email").val(),
                 comments: jQuery("#comments").val(),

             }, function(a) {
                 document.getElementById("message").innerHTML = a;
                 jQuery("#message").slideDown("slow");
                 jQuery("#submit").removeAttr("disabled");
                 if (null != a.match("success")) jQuery("#contactform").slideDown("slow");
             });
         });
         return false;
     });
     jQuery("#contactform input, #contactform textarea").keyup(function() {
         jQuery("#message").slideUp(1500);
     });
    //  Map------------------	
    if (jQuery("#map-single").length > 0) {
        var latlog = jQuery('#map-single').data('latlog'),
            popupTextit = jQuery('#map-single').data('popuptext'),
            map = L.map('map-single').setView(latlog, 15);
			map.scrollWheelZoom.disable();
        L.tileLayer(jQuery('#map-single').data('map-back'), {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var greenIcon = L.icon({
            iconUrl: jQuery('#map-single').data('popupicon'),
            iconSize: [40, 40],
            popupAnchor: [0, -26]
        });
        L.marker(latlog, {
            icon: greenIcon
        }).addTo(map).bindPopup(popupTextit).openPopup();
    }
    //   mailchimp------------------
    jQuery("#subscribe").ajaxChimp({
        language: "eng",
        url: "https://gmail.us1.list-manage.com/subscribe/post?u=1fe818378d5c129b210719d80&amp;id=a2792f681b"
    });
    jQuery.ajaxChimp.translations.eng = {
        submit: "Submitting...",
        0: '<i class="fal fa-check"></i> We will be in touch soon!',
        1: '<i class="fal fa-exclamation-circle"></i> You must enter a valid e-mail address.',
        2: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.',
        3: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.',
        4: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.',
        5: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.'
    };
    //   Video------------------
    var v = jQuery(".background-youtube").data("vid");
    var f = jQuery(".background-youtube").data("mv");
    jQuery(".background-youtube").YTPlayer({
        fitToBackground: true,
        videoId: v,
        pauseOnScroll: false,
        mute: f,
        callback: function () {
            var a = jQuery(".background-youtube").data("ytPlayer").player;
        }
    });
    var w = jQuery(".background-vimeo").data("vim");
    jQuery(".background-vimeo").append('<iframe src="//player.vimeo.com/video/' + w + '?background=1"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>');
    jQuery(".video-holder").height(jQuery(".media-container").height());
    if (jQuery(window).width() > 1024) {
        if (jQuery(".video-holder").length > 0)
            if (jQuery(".media-container").height() / 9 * 16 > jQuery(".media-container").width()) {
                jQuery(".background-vimeo iframe ").height(jQuery(".media-container").height()).width(jQuery(".media-container").height() / 9 * 16);
                jQuery(".background-vimeo iframe ").css({
                    "margin-left": -1 * jQuery("iframe").width() / 2 + "px",
                    top: "-75px",
                    "margin-top": "0px"
                });
            }
        else {
            jQuery(".background-vimeo iframe ").width(jQuery(window).width()).height(jQuery(window).width() / 16 * 9);
            jQuery(".background-vimeo iframe ").css({
                "margin-left": -1 * jQuery("iframe").width() / 2 + "px",
                "margin-top": -1 * jQuery("iframe").height() / 2 + "px",
                top: "50%"
            });
        }
    } else if (jQuery(window).width() < 760) {
        jQuery(".video-holder").height(jQuery(".media-container").height());
        jQuery(".background-vimeo iframe ").height(jQuery(".media-container").height());
    } else {
        jQuery(".video-holder").height(jQuery(".media-container").height());
        jQuery(".background-vimeo iframe ").height(jQuery(".media-container").height());
    }
    jQuery(".video-container").css("width", jQuery(window).width() + "px");
    jQuery(".video-container ").css("height", 720 / 1280 * jQuery(window).width()) + "px";
    if (jQuery(".video-container").height() < jQuery(window).height()) {
        jQuery(".video-container ").css("height", jQuery(window).height() + "px");
        jQuery(".video-container").css("width", 1280 / 720 * jQuery(window).height()) + "px";
    }
    jQuery(".filter-header").on("click", function () {
        if (jQuery(window).width() < 1258) {
            jQuery(".fixed-filter .gallery-filters").slideToggle(400);
        }
        return false;
    });
    jQuery("a , .btn ,   textarea,   input  , .leaflet-control-zoom , .aside-show_cf , .close-contact_form , .closedet_style  , .nav-button , .swiper-pagination-bullet , .to-top-btn  , .gc-slider-cont , .share-button , .hp_popup").on({
        mouseenter: function () {
            jQuery(".element-item").addClass("elem_hover");
        },
        mouseleave: function () {
            jQuery(".element-item").removeClass("elem_hover");
        }
    });
    jQuery("  .swiper-slide ,  #portfolio_horizontal_container").on({
        mouseenter: function () {
            jQuery(".element-item").addClass("slider_hover");
        },
        mouseleave: function () {
            jQuery(".element-item").removeClass("slider_hover");
        }
    });
    jQuery(".swiper-slide a , .next-project-swiper-link , #portfolio_horizontal_container a").on({
        mouseenter: function () {
            jQuery(".element-item").removeClass("slider_hover");
        },
        mouseleave: function () {
            jQuery(".element-item").addClass("slider_hover");
        }
    });
    jQuery(".next-project-swiper-link").on({
        mouseenter: function () {
            jQuery(".element-item").addClass("slider_linknext");
        },
        mouseleave: function () {
            jQuery(".element-item").removeClass("slider_linknext");
        }
    });
    jQuery(".psn_button").on("click", function () {
        jQuery(".scroll-nav-wrap").slideToggle(400);

    });
    jQuery(".scroll-nav ul li a").on("click", function () {
        if (jQuery(window).width() < 768) {
            jQuery(".scroll-nav-wrap").delay(1200).slideUp(400);
        }
        return false;
    });
	
}
// parallax ------------------
function initparallax() {
    var a = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
    if (null == trueMobile) {
        var b = new Scrollax();
        b.reload();
        b.init();
    }
    if (trueMobile) jQuery(".background-video").remove();
}
if (jQuery(".element-item").length > 0) {
    var mouse = {
        x: 0,
        y: 0
    };
    var pos = {
        x: 0,
        y: 0
    };
    var ratio = 0.15;
    var active = false;
    var ball = document.querySelector('.element-item');
    TweenLite.set(ball, {
        xPercent: -50,
        yPercent: -50
    });
    document.addEventListener("mousemove", mouseMove);
    function mouseMove(e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        mouse.x = e.pageX;
        mouse.y = e.pageY - scrollTop;
    }
    TweenMax.ticker.addEventListener("tick", updatePosition);
    function updatePosition() {
        if (!active) {
            pos.x += (mouse.x - pos.x) * ratio;
            pos.y += (mouse.y - pos.y) * ratio;
            TweenMax.set(ball, {
                x: pos.x,
                y: pos.y
            });
        }
    }
}
//  menu  ------------------
jQuery("<div class='nav-overlay'></div>").appendTo("#main");
jQuery(".nav-holder nav li a.act-link").closest("li").addClass("actli");
jQuery(".nav-holder nav li ul.dropdown-menu").parent("li").append('<span class="nav-dec"></span>');
jQuery(".nav-holder nav li.has-dropdown").on("click", function () {
    jQuery(this).each(function () {
        jQuery(this).children("ul").stop().slideToggle(400);
    });
});
jQuery('.nav-holder-wrap').perfectScrollbar();
function hideMenu() {
    jQuery(".nav-holder-wrap").animate({
        left: -450 + "px"
    }, 550);
    jQuery(".nav-button-wrap").addClass("vis-menbut");
	jQuery(".nav-overlay").fadeOut(100);
}
function showMenu() {
    jQuery(".nav-holder-wrap").animate({
        left: 0
    }, 550);
    jQuery(".nav-button-wrap").removeClass("vis-menbut");
    if (jQuery(window).width() < 1068) {
 		jQuery(".nav-overlay").fadeIn(100)
    }
}
jQuery(".nav-button").on("click  ", function () {
    if (jQuery(this).parent(".nav-button-wrap").hasClass("vis-menbut")) showMenu();
    else hideMenu();
    return false;
});
jQuery(".nav-overlay").on("click  ", function () {
    hideMenu();
});
jQuery(".nav-holder nav a.ajax").on("click", function () {
    if (jQuery(window).width() < 1068) {
        setTimeout(function () {
            hideMenu();
        }, 500);
    }
});

//   load animation------------------
jQuery.fn.duplicate = function (a, b) {
    var c = [];
    for (var d = 0; d < a; d++) jQuery.merge(c, this.clone(b).get());
    return this.pushStack(c);
};
jQuery("<div class='page-load' data-ran='25'><div class='loader-spin'><span></span></div></div>").appendTo("#main");
jQuery("<div class='pl-row'><span class='pl-row-anim'></span></div>").duplicate(25).appendTo(".page-load");
function contentAnimShow() {
    jQuery(".share-button").removeClass("uncl-share");
    jQuery(".page-load").fadeIn(1);
    function a(a) {
        var b = a.length,
            c, d;
        while (b) {
            d = Math.floor(Math.random() * b--);
            c = a[b];
            a[b] = a[d];
            a[d] = c;
        }
        return a;
    }
    var b = jQuery(".pl-row-anim");
    jQuery(a(b).slice(0, jQuery(".page-load").data("ran"))).each(function (a) {
        var bfg = jQuery(this);
        setTimeout(function () {
            TweenMax.to(bfg, 0.2, {
                force3D: true,
                scale: 1,
                opacity: 1,
                ease: Power2.easeOut
            });
        }, 30 * a);
    });
    setTimeout(function () {
        jQuery(".loader-spin").addClass("visspin");
    }, 300);
    TweenMax.to(jQuery(".breadcrumb-wrap span"), 0.7, {
        force3D: true,
        y: -30,
        opacity: 0,
        delay: 0.7,
        ease: Power2.easeOut,
        onComplete: function () {
            TweenMax.to(jQuery(".breadcrumb-wrap span"), 0.1, {
                force3D: true,
                y: 30
            });
        }
    });
}
function contentAnimHide() {
    var chdpt = jQuery(".content-hilder").data("pagetitle");
    jQuery(".breadcrumb-wrap span").text(chdpt);
    TweenMax.to(jQuery(".breadcrumb-wrap span"), 0.7, {
        force3D: true,
        y: 0,
        opacity: 1,
        delay: 0.8,
        ease: Power2.easeOut
    });
    function a(a) {
        var b = a.length,
            c, d;
        while (b) {
            d = Math.floor(Math.random() * b--);
            c = a[b];
            a[b] = a[d];
            a[d] = c;
        }
        return a;
    }
    setTimeout(function () {
        var b = jQuery(".pl-row-anim");
        jQuery(a(b).slice(0, jQuery(".page-load").data("ran"))).each(function (a) {
            var bfg = jQuery(this);
            setTimeout(function () {
                TweenMax.to(bfg, 0.2, {
                    force3D: true,
                    scale: 0.3,
                    opacity: 0,

                    ease: Power2.easeOut
                });
            }, 30 * a);
        });
        jQuery(".loader-spin").removeClass("visspin");
    }, 500);
    setTimeout(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, {
            queue: true,
            duration: 10,
        });
    }, 120);
    setTimeout(function () {
        jQuery(".page-load").fadeOut(1);
    }, 1200);
}
jQuery('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
//   Init Ajax------------------
jQuery(function () {
    jQuery.coretemp({
        reloadbox: "#wrapper",
        outDuration: 1200,
        inDuration: 100
    });
    readyFunctions();
    jQuery(document).on({
        ksctbCallback: function () {
            readyFunctions();
        }
    });
});
function initajaxload () {
}
function inittitlereplace () {
}
function initmenuajaxdisable () {
	jQuery(".menu-item-has-children > a").each(function(i){
	jQuery(this).removeClass('ajax');
	})
	jQuery(".menu-item-type-custom > a").each(function(i){
	jQuery(this).removeClass('ajax');
	})
	//jQuery(document).on('click', 'a[href*="#"]:not([href="#"]), [href])');
}
function inittrionwoo () {
}
//   Init All Functions------------------
function readyFunctions() {
    initTrion();
    initparallax();
	initajaxload ();
	inittitlereplace ();
	initmenuajaxdisable ();
	inittrionwoo ();
}