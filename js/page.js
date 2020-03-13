
var $pageAnim = $.Deferred(function (deferredAnim) {
    deferredAnim.then(fixed_head)
        .then(fixed_title)
        .then(page_title)
        .then(page_title2)
        .then(page_sub_title)
        .then(page_body)
        .then(body_in)
        .then(menu_title)
        .then(skip_none)

});


function fixed_head() {
    $('#fixed_head').delay(100).animate({
        "height": "40px"
    }, 1000, "easeOutExpo");
    document.getElementById("page_body").classList.toggle("none");
}

function fixed_title() {
    $('#fixed_title').delay(100).animate({
        "top": "10px"
    }, 1000, "easeOutExpo");
}


function page_title() {
    $('.picturetitle').delay(500).animate({
        "opacity": "1"
    }, 1000, "easeOutExpo");
}


function page_title2() {
    $('#pagetitle').delay(800).animate({
        "opacity": "1",
        "top": "50%"
    }, 1000, "easeOutExpo");
}


function page_sub_title() {
    $('#page_sub_title').delay(1000).animate({
        "opacity": "1",
        "margin-top": "30px"
    }, 1000, "easeOutExpo");
}

function body_in() {
}

function page_body() {
    $('#page_body').delay(1300).animate({
        "opacity": "1",
        "top": "0px"
    }, 3000, "easeOutExpo");
}

function menu_title() {
    $("#h2_1").delay(1000).animate({
        "opacity": "1",
        "top": "50%"
    }, 1000, "easeInExpo");
    $("#h2_2").delay(2000).animate({
        "opacity": "1",
        "top": "50%"
    }, 1000, "easeInExpo");
    $("#h2_3").delay(3000).animate({
        "opacity": "1",
        "top": "50%"
    }, 1000, "easeInExpo");
    $("#h2_4").delay(4000).animate({
        "opacity": "1",
        "top": "50%"
    }, 1000, "easeInExpo");
    $("#h2_5").delay(5000).animate({
        "opacity": "1",
        "top": "50%"
    }, 1000, "easeInExpo");
    $("#h2_6").delay(6000).animate({
        "opacity": "1",
        "top": "50%"
    }, 1000, "easeInExpo");
    $("#h2_7").delay(7000).animate({
        "opacity": "1",
        "top": "50%"
    }, 1000, "easeInExpo");
    $("#h2_8").delay(7000).animate({
        "opacity": "1",
        "top": "50%"
    }, 1000, "easeInExpo");
    $("#skip").delay(8000).animate({
        "opacity": "0"
    }, 1000, "easeInExpo");
}


function skip_none() {
    $('#skip').delay(9000).queue(function () {
        document.getElementById("skip").classList.toggle("none");
    }, 1000, "easeInExpo");
}