$("option[value='QUALIFICATION']").addClass("activew");
$("option[value='WORKAUTHORIZATION']").addClass("activew");
$("option[value='OTHER']").addClass("activew");
$(".activew").remove();

$(".footer-signup .btn").click(function () {
    $(".modal.fade").addClass("intro");
});

$(".subscribe-form__close").click(function () {
    $(".modal.fade").removeClass("intro");
});

$("#mobile_menu").click(function () {
    $(".mobile-menu").toggleClass("active");
    $(this).toggleClass("active");
});

$("#menu-item-4220 a").click(function () {
    $("#hospitality-dropdown").toggleClass("active");
    $("#membership-dropdown").removeClass("active");
    $("#racing-dropdown").removeClass("active");
    $("#header__racecourses").removeClass("active");
    $(this).toggleClass("active");
});

$("#menu-item-10 a").click(function () {
    $("#membership-dropdown").toggleClass("active");
    $("#hospitality-dropdown").removeClass("active");
    $("#racing-dropdown").removeClass("active");
    $("#header__racecourses").removeClass("active");
});

$("#menu-item-49979 a").click(function () {
    $("#racing-dropdown").toggleClass("active");
    $("#membership-dropdown").removeClass("active");
    $("#hospitality-dropdown").removeClass("active");
    $("#header__racecourses").removeClass("active");
});

$("#menu-item-201 a").click(function () {
    $("#header__racecourses").toggleClass("active");
    $("#racing-dropdown").removeClass("active");
    $("#membership-dropdown").removeClass("active");
    $("#hospitality-dropdown").removeClass("active");
});

function toggleVisible() {
    var $this = $(this),
        id_selector = $this.find("a")[0].href.split("#")[1],
        action = "add";

    $this.toggleClass("current-menu-item");
    $this.toggleClass("submenu_tab");

    if (id_selector.trim() == "submenu-3") {
        var $asteroOwm = $(".astero-owm");
        var $asteroForecast = $(".astero-forecast");

        if ($asteroOwm.length > 0) {
            $asteroOwm.astero();
        } else if ($asteroForecast.length > 0) {
            $asteroForecast.astero_fc();
        }
    }

    $("#" + id_selector).toggleClass("active_submenu", 2000, "expanded");

    action = $(".active_submenu")[0] ? action : "remove";
    $("header")[action + "Class"]("bg-white");
}

$('.header__menu li[class^="submenu-"]').click(function (e) {
    var $this = $(this),
        isActive = $this.hasClass("current-menu-item");

   
    $('div[id^="submenu-"]').removeClass("active_submenu");
    $('.header__menu li[class^="submenu-"]').removeClass("submenu_tab");
    $(".header__menu > .menu-item").removeClass("current-menu-item");

  
    toggleVisible.call(this);

    if (isActive) {
        toggleVisible.call(this);
    }

    if ($("header").hasClass("search-open")) {
        toggleSearch("remove");
    }

    e.stopPropagation();
    e.preventDefault();
});



$(".container").on("click", function () {
    $('div[id^="submenu-"]').removeClass("active_submenu");
    $('.header__menu li[class^="submenu-"]').removeClass("submenu_tab");
    $(".header__menu > .menu-item").removeClass("current-menu-item");
    $(".current_page_item").addClass("current-menu-item");
    
    $("header").removeClass("bg-white");
});

$('.header__menu > li:not("[class^=submenu-]")').on("click", function () {
 
    $('div[id^="submenu-"]').removeClass("active_submenu");
    $("header").removeClass("bg-white");
    $('.header__menu li[class^="submenu-"]').removeClass("submenu_tab");
    $(".header__menu > .menu-item").removeClass("current-menu-item");
});

$(".news-item").each(function () {
    var $this = $(this),
        itemWidth = $this.width(),
        viewWidth = $(window).width();

    $this.css({ left: (viewWidth - itemWidth) / 2 });
});

var overlay = {
    el: $(".js-overlay"),
    show: function () {
        var that = this;
        if (!this.isVisible) {
            this.el.fadeIn();
            this.isVisible = !this.isVisible;
        }
        this.el.on("click", function () {
            that.hide();
            toggleSearch();
        });
    },
    hide: function () {
        if (this.isVisible) {
            this.el.fadeOut();
            this.isVisible = !this.isVisible;
        }
        this.el.off("click");
    },
    isVisible: false,
};

function toggleSearch(action) {
    var act = action || "toggle",
        $headerSearch = $(".header-search");

    $("header")[act + "Class"]("search-open");

    if ($headerSearch.hasClass("search-visible")) {
        $headerSearch.addClass("search-hide");

        setTimeout(function () {
            $headerSearch.removeClass("search-visible search-hide");
        }, 500);

        overlay.hide();
    } else {
        overlay.show();
        setTimeout(function () {
            $("#s").focus();
        }, 0);
        $headerSearch.addClass("search-visible").removeClass("search-hide");
    }
}

$(".search-button").on("click touchstart", function (ev) {
   
    $('div[id^="submenu-"]').removeClass("active_submenu");
    $('.header__menu li[class^="submenu-"]').removeClass("submenu_tab");

    toggleSearch("toggle");

    ev.preventDefault();
    return false;
});
