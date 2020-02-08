/*

Credits:
    - Lummit - https://obnoxious.club/ | https://github.com/Lumm1t/ | Discord: Lummit#0201
    - expl0it, shellcode.team
    - Steam (emoticon: https://steamcommunity-a.akamaihd.net/economy/emoticon/mgh_17)
    - Trollface image (http://www.rw-designer.com/icon-image/7835-256x256x32.png)
    - Tumblr images/icons:
        a) https://68.media.tumblr.com/730ba51e7f6b0203e023deeb0db8367b/tumblr_osgbbiLXWV1suieauo1_500.jpg
        b) https://68.media.tumblr.com/8436227895295acecdea170b612fb766/tumblr_nxgg5bYqm81rclv0wo1_500.jpg
        c) http://images.neon-sign.org/l-m/rose-flower-love-neon-sign.jpg
        d) https://media.istockphoto.com/vectors/rose-neon-sign-vector-id1088857104?k=6&m=1088857104&s=612x612&w=0&h=ZJCYow5i8noF6nTGHEd6b2bbe9X6rVx4cLDoceexAec=
        e) https://image.freepik.com/free-vector/polygonal-geometric-rose-neon-sign_1262-19626.jpg
        f) https://68.media.tumblr.com/49394d5aa66d4c7ea4ffebda38c6be7e/tumblr_orv2rd9eVC1rgewhto1_400.gif
        g) https://ih1.redbubble.net/image.268210271.5200/sticker,375x360-bg,ffffff.u2.png
        h) http://picture-cdn.wheretoget.it/ot63b4-l-610x610-shirt-rose-tumblr-grunge-grunge+t+shirt-clothes-t+shirt-tumblr+shirt-dead+roses-black+bear-soft+grunge-soft-soft+ghetto-ghetto-chill-cute-white-red-red+roses-white+tee-pale-sad-dar.jpg

Thanks for:
    - Google
    - StackOverflow
    - jQuery
    - jQuery Marquee
    - animate.css
    - typed.js
    
GitHub: https://github.com/Lumm1t/obnoxious.club

*/

"use scrict";

(function () {
    var timeouts = [];

    window.mobileAndTabletCheck = function () {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    $(document).ready(function () {
        var links = [
            {
                name: 'Lummit',
                link: '76561197960276740'
            },
                
            {
                name: 'Neso',
                link: '76561198193201687'
            },
                
            {
                name: 'loljuxd',
                link: '76561197985625197'
            },

            {
                name: 'Vez',
                link: '76561198823371232'
            },

            {
                name: 'mannin',
                link: '76561198053882179'
            }
        ];
         
        for (var i in links) {
            var link = links[i];

            $('#marquee').append('<a href="https://steamcommunity.com/profiles/' + link.link + '" target="_BLANK">' + link.name + '</a>');

            link = $('#marquee').children('a').last();
                
            if (i != links.length - 1) 
                $('#marquee').append(' <img class="emoticon" src="assets/others/mgh_17.png"> ');
        }

        if (window.mobileAndTabletCheck()) {
            $("#background").replaceWith('<div id="background" style="background-image: url(https://obnoxious.club/assets/images/mobile-background.jpg);"></div>');

            app.shouldIgnoreVideo = true;
        } 

        app.titleChanger();
        app.iconChanger([
            "assets/icons/roses/rose1.jpg",
            "assets/icons/roses/rose2.jpg",
            "assets/icons/roses/rose3.jpg",
            "assets/icons/roses/rose4.jpg",
            "assets/icons/roses/rose5.jpg",
            "assets/icons/roses/rose6.jpg",
            "assets/icons/roses/rose7.jpg",
            "assets/icons/roses/rose8.jpg",
            "assets/icons/roses/rose1.jpg",
        ]);
    });

    if ($.cookie('videoTime')) {
        app.videoElement.currentTime = $.cookie('videoTime');
        app.audioElement.currentTime = $.cookie('videoTime');
    }

    document.addEventListener('contextmenu', function (event) { 
        event.preventDefault() 
    });

    $(window).on('keydown', function () {
        if (event.keyCode == 123)
            return false;
        else if (event.ctrlKey && event.shiftKey && event.keyCode == 73)
            return false;
        else if (event.ctrlKey && event.keyCode == 73)
            return false;
        else if (event.ctrlKey && event.shiftKey && event.keyCode == 74)
            return false;
        else if (event.ctrlKey && event.keyCode == 74)
            return false;
        });

    document.body.onkeyup = function (e) {
        if (e.keyCode == 32 && app.skippedIntro)
        {
            if (app.backgroundToggler)
            {
                app.videoElement.play();
                app.audioElement.play();
            }
            else
            {
                app.videoElement.pause();
                app.audioElement.pause();
            }

            return app.backgroundToggler = !app.backgroundToggler;
        }
    }

    $('html').on('contextmenu', function (event) {
        var img = document.createElement("img");
        img.src = "assets/others/trollface.jpg"; 
        img.width = 64;
        img.height = 64;
        img.alt = "obnoxious.club";
        img.style = "position: absolute; left: " + event.pageX + "px; top: " + event.pageY + "px; z-index: 10";
        img.className = "troll" + ( (app.skippedIntro) ? "" : " trollface-light" );

        document.body.appendChild(img);
    });

    setInterval( function () {
        $(".troll").remove();
    }, 600);

    $(".skip").click(function () {
        skipIntro();
    });

    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () 
            {
                $(this).removeClass('animated ' + animationName);
            });
            return this;
        }
    });

    var writeLine = function (text, speed, timeout, callback) {
        timeout = (typeof timeout === "number") ? timeout : [0, callback = timeout];

        setTimeout(function () {
            var typed = new Typed("#line" + ((app.id !== 2) ? ++app.id : app.id += 2), 
            {
                strings: text,
                typeSpeed: speed,
                onComplete: callback
            });
        }, timeout);
    };

    (function () {
        $.getJSON('https://freegeoip.app/json/', function (data) {

            writeLine(["Authenticating...", "Granting access to <span style='font-size: 14px; color: #06d;'>[unknown]</span>..."], 30, function () {

                if (app.skippedIntro)
                	return;

                clearCursor();

                var usernames = ["user", "dude"];

                writeLine(["Access granted! <span style='font-size: 14px; color: #0f0;'>[success]</span>", "Welcome back, <i style='color: #0f0'>" +  ((data.ip) ? data.ip : usernames[Math.floor(Math.random()*usernames.length)]) 
                    + "</i>! By the way, nice to see someone from " + ((data.country_name) ? data.country_name : 'your country') + " here!"], 30, 500, function () {

                    if (app.skippedIntro)
                        return;

                    clearCursor();

                    writeLine(["<i style='color: #F62459'>obnoxious.club $$$</i>"], 120, 500, function () {

                        timeouts.push(setTimeout(function () {

                            if (app.skippedIntro)
                                return;

                            clearCursor();

                            setTimeout(function () {

                                skipIntro();

                            }, 500);

                        }, 1000));

                    });

                });

            });

        });

    })()

    var skipIntro = function () {

        if (app.skippedIntro)
            return;

        app.skippedIntro = true;

        timeouts.forEach(function (timeout) {
            clearTimeout(timeout);
        });

        $(".top-right").remove();

        $('#main').fadeOut(100, function () {
            
            $("#main").remove();

            $('#marquee').marquee({
                duration: 15000,
                gap: 420,
                delayBeforeStart: 1000,
                direction: 'left',
                duplicated: true
            });

            setTimeout(function () {
                $('.brand-header').animateCss(app.effects[ Math.floor(Math.random() * app.effects.length) ]);
            }, 200);

            setTimeout(function () {
                var typed = new Typed("#brand", 
                {
                    strings: app.brandDescription,
                    typeSpeed: 40,
                    onComplete: function () {
                        clearCursor()
                    }
                });
            }, 1350);

            setTimeout(function () {
                if (!app.shouldIgnoreVideo) {
                    app.videoElement.play();
                    app.audioElement.play();
                }

                app.videoElement.addEventListener("timeupdate", function () {
                    $.cookie('videoTime', app.videoElement.currentTime, { expires: 1 });
                }, false);

                $('.marquee-container').css('visibility','visible').hide().fadeIn(100);

                $('.marquee-container').animateCss('zoomIn');

                $('.container').fadeIn();

                $('.background').fadeIn(200, function () {
                    if (!app.shouldIgnoreVideo)
                        $("#audio").animate({volume: app.musicVolume}, app.musicFadeIn);
                });
            }, 200);
        });
     };

    var clearCursor = function () {
        return $("span").siblings(".typed-cursor").css("opacity", "0");
    }
})()
