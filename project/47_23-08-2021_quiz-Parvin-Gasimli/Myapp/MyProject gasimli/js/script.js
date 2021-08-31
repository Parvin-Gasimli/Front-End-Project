$(document).ready(function() {
    "use strict";

    //navbar sticky animate
    let $navbar = $(".slicky-navbar");
    let $navbarMobile = $(".sticky-navbar-mobile");

    $(document).scroll(function() {
        navbarScroll();
    });
    navbarScroll();

    function navbarScroll() {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 200) {
            $navbar.addClass("fixed-nav");
            $navbarMobile.addClass("fixed-nav");
        } else if (scrollTop < 200) {
            $navbar.removeClass("fixed-nav");
            $navbarMobile.removeClass("fixed-nav");
        }
    }
    //dropdown trigger
    $(".second-dropdown-trigger").on({
        mouseenter: function() {
            $(this).parent().css({
                overflow: "visible",
            });
        },
        mouseleave: function() {
            $(this).parent().css({
                overflow: "hidden",
            });
        },
    });

    //Main    SLIDER S
    $(".slider").slick({
        infinite: true,
        speed: 2000,
        fade: true,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 4500,
        prevArrow: '<i class="fal fa-long-arrow-left"></i>',
        nextArrow: '<i class="fal fa-long-arrow-right"></i>',
        responsive: [{
            breakpoint: 1040,
            settings: {
                infinite: true,
                dots: true,
                arrows: false,
            },
        }, ],
    });



    // Search nav animate
    $(".icon .fa-search").on("click", function() {
        $(this).next().toggleClass("search-animate");
    });

    // Mobile nav animate
    $(".mobile-nav .fa-bars").on("click", function() {
        $(this).next().animate({
                right: 0,
            },
            400
        );
        $("body").css({
            "overflow-y": "hidden",
        });
    });
    $(".mobile-nav .fa-times").on("click", function() {
        $(this).parent().animate({
                right: "-422px",
            },
            400
        );
        $("body").css({
            "overflow-y": "auto",
        });
    });


    //Accordion navbar toggle
    $(document).on("click", ".accordion", function() {
        $(this).next().slideToggle(200);
        $(this).children("i").toggleClass("rotate");
    });

    //To top scroll function
    $(document).scroll(function() {
        toTop();
    });

    toTop();

    function toTop() {
        if ($(document).scrollTop() > 200) {
            $(".to-top").fadeIn();
            $(".to-top").css({
                display: "flex",
            });
        } else {
            $(".to-top").fadeOut();
        }
    }
    $(".to-top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 400);
    });
    //valentine-video
    $(".video").on("click", function() {
        $("#video").modal("show");
    });





    //sicky    =====Sliders===========


    // FILTER MTHODU VE ONUN JS OLAN HISSEIS
    $(document).on("click", ".filter-list .filter-list-item", function() {
        let dataSelect = $(this).attr("data-id");
        $(".filter-list .filter-list-item").removeClass("active-filter");
        $(this).addClass("active-filter");
        if ("all" !== dataSelect) {
            $(".products .col-lg-3").each(function() {
                let data = $(this).attr("data-id");
                if (data == dataSelect) {
                    $(this).fadeIn();
                } else {
                    $(this).fadeOut(0);
                }
            });
        } else {
            $(".products .col-lg-3").fadeIn();
        }

    });
    $(".filter-dropdown").on("click", function() {
        $($(this).next()).toggleClass("filter-max-height");
    });
    $(".filter-dropdown-left").on("click", function() {
        $($(this).children(".nav-dropdown")).toggleClass("filter-max-height");
    });


    //---------------------SLICKMETHODU BUG BERPASSI-----------------//

    $(".product-item img").on("click", function() {
        $("#exampleModal").modal("show");
        let src = $(this).attr("src");
        $(".product-img-slider img").each(function() {
            if (src == $(this).attr("src")) {
                fadeInImg($(this));
            } else {
                fadeOutImg($(this));
            }
        });
    });

    $(".product-img-slider i").on("click", function() {
        if ($(this).attr("data-id") == "right") {
            let nextElem = $($(".product-img-slider .actvSlider").next());
            fadeOutImg($(".product-img-slider img"));
            if (nextElem.attr("data-slider") == "stop") {
                let clild = $($(".product-img-slider").children()[0]);
                fadeInImg(clild);
            } else {
                fadeInImg(nextElem);
            }
        } else {
            let prevElem = $($(".product-img-slider .actvSlider").prev());
            fadeOutImg($(".product-img-slider img"));
            if (prevElem.length == 0) {
                let clild = $(
                    $(".product-img-slider").children()[
                        $(".product-img-slider img").length - 1
                    ]
                );
                fadeInImg(clild);
            } else {
                fadeInImg(prevElem);
            }
        }
    });

    function fadeOutImg(elem) {
        elem.animate({
            opacity: 0,
        });
        elem.removeClass("actvSlider");
    }

    function fadeInImg(elem) {
        elem.animate({
            opacity: 1,
        });
        elem.addClass("actvSlider");
    }

    if ($(".progress-bar-fiorello").length == 1) {
        startProgress();
        $(document).scroll(function() {
            startProgress();
        });
    }

    function startProgress() {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(".bar").offset().top;
        var elemBottom = elemTop + $(".bar").height();

        if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
            $(".gray-bar .bar .progress")
                .one()
                .each(function() {
                    progress($(this));
                });
        }
        var elemTopBlc = $(".black-progress-m").offset().top;
        var elemBottomBlc = elemTopBlc + $(".black-progress-m").height();

        if (elemBottomBlc <= docViewBottom && elemTopBlc >= docViewTop) {
            $(".black-progress-m .bar .progress")
                .one()
                .each(function() {
                    progress($(this));
                });
        }
    }

    function progress(myThis) {
        let percent = parseInt(
            myThis
            .parents(".bar")
            .children(".bar-text")
            .children(".percent")
            .attr("data-percent")
        );
        var t = $(myThis);
        $(myThis).animate({
            width: percent + "%",
        }, {
            duration: 3500,
            easing: "linear",
            step: function(now) {
                t.parents(".bar")
                    .find(".percent")
                    .text(Math.ceil(now) + "%");
            },
        });
    }




    //slider instagram
    $(".instagram-slider-slick").slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 2,
        swipeToSlide: true,
        arrows: false,
        responsive: [{
                breakpoint: 1040,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });


    //slider florist
    $(".slider-florist-slick").slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fal fa-long-arrow-left"></i>',
        nextArrow: '<i class="fal fa-long-arrow-right"></i>',
        responsive: [{
            breakpoint: 1040,
            settings: {
                infinite: true,
                arrows: false,
            },
        }, ],
    });



    //===============PRODUCT LIST ACCARDION OLAN TABSIN FUNCTIONU
    $(".click-tabs ul li").on("click", function() {
        let index = $(this).index();
        let child = $($(this).parents(".click-tabs")).next();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        child.children().removeClass("activeDiv");
        $(child.children()[index]).addClass("activeDiv");
    });



    // ====================Counter Method in add to carrt
    $(".minus").click(function() {
        let $input = $(this).parent().find("input");
        let count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
    });

    $(".plus").click(function() {
        let $input = $(this).parent().find("input");
        $input.val(parseInt($input.val()) + 1);
    });
    //accardions
    $(document).on("click", "#accordions .card-header", function() {
        let t = $(this);
        t.parents(".cards").find(".active-header").removeClass("active-header");
        t.addClass("active-header");
        t.next().slideDown(function() {
            $(this).addClass("active");
        });

        t.parents(".cards").find(".active").slideUp(function() {
            t.removeClass("active-header");
            $(this).removeClass("active");
        });
    });



    // ====================Counter Method in add to carrt
    $(".minus").click(function() {
        let $input = $(this).parent().find("input");
        let count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
    });

    $(".caret-right").click(function() {
        let $input = $(this).parent().find("input");
        $input.val(parseInt($input.val()) + 1);
    });
    //accardions
    $(document).on("click", "#accordions .card-header", function() {
        let t = $(this);
        t.parents(".cards").find(".active-header").removeClass("active-header");
        t.addClass("active-header");
        t.next().slideDown(function() {
            $(this).addClass("active");
        });

        t.parents(".cards").find(".active").slideUp(function() {
            t.removeClass("active-header");
            $(this).removeClass("active");
        });
    });






    //======================baskte carda elave etme mnethodu

    let table = $(".table-basket");
    let btns = $(".buy-btn");
    if (localStorage.getItem("basket") == null) {
        localStorage.setItem("basket", JSON.stringify([]));
    }
    btns.each(function() {
        $(this).on("click", function(ev) {
            ev.preventDefault;
            let Id = $(this).parents(".card").attr("data-id");
            let price = $(this).parents(".card").attr("data-price");
            let name;
            let src;
            let count;
            if ($(this).parents(".pro-page").length == 1) {
                name = $(this).parents(".heading").find("h1").text();
                src = $(this).parents(".product-item").find(".col-9 img").attr("src");
                count = parseInt($("#counter").val());
            } else {
                name = $(this).parents(".card").find(".text-img").text();
                src = $(this).parents(".card").find("img").attr("src");
                count = 1;
            }

            if (localStorage.getItem("basket") == null) {
                localStorage.setItem("basket", JSON.stringify([]));
            }
            let basket = JSON.parse(localStorage.getItem("basket"));
            let isExist = basket.find((i) => i.id == Id);
            if (isExist === undefined) {
                basket.push({
                    id: Id,
                    name: name,
                    price: price,
                    src: src,
                    count: count,
                });
            } else {
                if ($(this).parents(".pro-page").length == 1) {
                    isExist.count += parseInt($("#counter").val());
                } else isExist.count++;
            }
            localStorage.setItem("basket", JSON.stringify(basket));
            basCount();
            basketfill();
        });
    });
    basCount();

    function basCount() {
        let basketCount = $(".basket-count");
        let basket = JSON.parse(localStorage.getItem("basket"));

        if (localStorage.getItem("basket") != null) {
            basketCount.text(basket.length);
        }
        TotalPrice();
    }
    basketfill();

    function basketfill() {
        let basketItems = JSON.parse(localStorage.getItem("basket"));
        table.html("");
        for (const basket of basketItems) {
            let item = ` <div class="p-3 pt-4 d-flex " data-id="${basket.id}">
                            <div class="cart-img"><img src="${
                              basket.src
                            }" alt=""> </div>
                            <div class="pl-4">
                                <p class="cart-product-name">${basket.name}
                                </p>
                                <p class="cart-price">${basket.count}X${"$" + basket.price}
                                <i class="fal fa-times float-right"></i>
                                </p>
                            </div>
                        </div>`;
            table.append(item);
        }
        TotalPrice();

        let deletePro = $(".table-basket .fa-times");
        deletePro.each(function() {
            $(this).on("click", function() {
                let Id = $(this).parents(".d-flex").attr("data-id");
                let basket = JSON.parse(localStorage.getItem("basket"));
                basket = basket.filter((i) => i.id != Id);
                localStorage.setItem("basket", JSON.stringify(basket));
                $(this).parents(".d-flex").remove();
                basCount();
            });
        });
    }

    function TotalPrice() {
        let total = 0;
        let basketItems = JSON.parse(localStorage.getItem("basket"));

        for (const basket of basketItems) {
            total += parseInt(basket.count) * parseInt(basket.price);
        }

        $(".totalprice").text("$" + total);
        if (total == 0) {
            $(".no-product").removeClass("d-none");
            $(".mybasket").addClass("d-none");
        } else {
            $(".mybasket").removeClass("d-none");
            $(".no-product").addClass("d-none");
        }
    }






});
$(document).ready(function() {
    // //   AOS Plugin in my web site
    AOS.init({
        duration: 1300
    });
    //pluGin eroor verior saytnda bugf getirir
})