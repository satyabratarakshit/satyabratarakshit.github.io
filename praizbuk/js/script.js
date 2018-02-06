$(function () {
    $(".navbar-default .dropdown-toggle, .dropdown-menu").mouseenter(function () {
        $(".dropdown").addClass("open");
    });
    $(".navbar-default .dropdown-toggle, .dropdown-menu").mouseleave(function () {
        $(".dropdown").removeClass("open");
    });
    $("#scroltotop").click(function () {
        $(window).scrollTop(0);
    });

    $(window).scroll(function () {
        showscroltop()
    });

    showscroltop = function () {
        var top = ($(window).scrollTop() || $("body").scrollTop());
        if (top > 100) {
            $("#scroltotop").show();
            $("footer").show();
            // console.log(top);
        } else {
            $("#scroltotop").hide();
            $("footer").hide();
            // console.log("not working");
        }
    }
    $("#loginmodal #login").click(function () {
        var data = $("#email").val();
        if (data == "") {
            $("#email").css("border", "1px solid red");
            $("#eemail").show();
            // console.log(typeof data);
        } else {
            $("#email").css("border", "none");
            $("#eemail").hide();
            // console.log(data);
        }
        var password = $("#password").val();
        if (password == "") {
            $("#password").css("border", "1px solid red");
            $("#epassword").show();
            // console.log(typeof data);
        } else {
            $("#password").css("border", "none");
            $("#epassword").hide();
            // console.log(data);
        }
    });
});