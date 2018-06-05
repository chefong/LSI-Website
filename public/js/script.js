console.log("Hello");

$(document).ready(function() {

    $(".nav-item").click(function(x) {

        console.log("clicked");
        var sectionLink = $(this).attr("href");
        var navHeight = $(".navbar").outerHeight();
        // console.log(navHeight);
        // console.log($(sectionLink).offset().top);
        $("html, body").animate({scrollTop: $(sectionLink).offset().top - navHeight}, 800);

        x.preventDefault();

    });
});