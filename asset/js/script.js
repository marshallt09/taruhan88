$(document).ready(function () {
    $("#nav-button").on("click", function () {
        $('#navigation:checkbox').change(function () {
            // this will contain a reference to the checkbox   
            if (this.checked) {
                $('nav').css('height', '350px');
            } else {
                $('nav').css('height', '0px');
            }
        });

    });
    $(window).resize(function () {
        if ($(this).width() >= 1025) {
            $('nav').css({
                'height': '30px',
                'top': '0px',
                'position': 'relative'
            });
            $('#navigation').change(function () {
                cb = $(this);
                cb.attr("checked",true);
            });
        }
        if ($(this).width() <= 1024) {
            $('nav').css({
                'height': '0px',
                'top': '60px',
                'width': '100%',
                'position': 'absolute',
            });
            $('aside ul li').css('z-index', '0');
        }
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $('.games-t88').css('display', 'none');
        }
    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $('nav').css({
                'top': '0px',
                'position': 'fixed',
                'width': '1024px',
                'z-index': 2
            });
            $('.logo').css({
                'z-index': 1,
            });
        } else {
            $('nav').css({
                'z-index': '0',
                'position': 'relative',
                //                'z-index': 2

            });
            $('.logo').css('z-index', '3');
        }
    });


    // script navigasi
    $('nav ul li').mouseover(function () { //event mouse hover navigasi
        var PartialPage = this.id.replace('nav-', '');
        if (PartialPage == 'games') { //kalau nama id games
            $('#nav-' + PartialPage).on('click', function () {
                $('.games-t88').css('display', 'block');
            });

        } else {
            if (PartialPage == 'livescore') { //kalau nama id livescore
                $('#nav-' + PartialPage).on('click', function () {
                    widhtPlay(true);
                    RedirectPage(PartialPage);
                });
            } else {

                $('#' + this.id).on('click', function () {
                    widhtPlay(false);
                    RedirectPage(PartialPage);
                });
            }
        }
    });

    function widhtPlay(isNot) {
        if (isNot) {
            var AsWidth = '250px',
                AsPos = 'absolute',
                SecWidth = 'calc(100% - 250px - 1em)',
                SecBg = 'hidden';
            $('#cr').hide();
        } else {
            var AsWidth = '420px',
                AsPos = 'relative',
                SecWidth = 'calc(100% - 420px - 1em)',
                CrDisp = 'block';
            $('#cr').show();
        }
        $('aside').css({
            'width': AsWidth,
            'position': AsPos,
            'right': '0px',
            'transition': 'width .1s ease-in-out'
        });
        $('section').css({
            'width': SecWidth,
            'transition': 'width .1s ease-in-out',
        });
    }

    function RedirectPage(page) {
        $('section').load('/../partial/' + page + '.html'); //local
        $('section').load('/taruhan88/partial/' + page + '.html'); //github
        //$.getScript('/asset/js/register.js');
    }
    // tutup game menu
    $('.close-game').on('click', function () {
        $('.games-t88').css('display', 'none');
    });

});
