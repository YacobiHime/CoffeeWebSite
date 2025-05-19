document.addEventListener('DOMContentLoaded', function() {
    // ローディング画面を非表示
    function end_loader() {
      document.getElementById('my-custom-loader').style.transition = 'opacity 0.8s';
      document.getElementById('my-custom-loader').style.opacity = '0';
      setTimeout(function() {
        document.getElementById('my-custom-loader').style.display = 'none';
      }, 800); // アニメーションが完了するまで待機
    }

    window.addEventListener('load', function() {
      // ローディング画面を非表示
      setTimeout(function() {
        end_loader();
      }, 1500); // 1.5秒後にローディング画面を非表示
    });
});

$(document).ready(function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
    var closeMenu = document.getElementById('js-close-menu');
    var loader = $(".loader");

    // ハンバーガーアイコンをクリックしたら
    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
    
    // 黒背景をクリックしたら
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });

    // メニューを消すボタンをクリックしたら
    closeMenu.addEventListener('click', function () {
        nav.classList.remove('open');
    });

    // ウィンドウサイズの変更に応じてメニューの表示を調整
    $(window).resize(function() {
        if ($(window).width() > 768) {
            nav.classList.remove('open');
        }
    });
    $(window).scroll(function () {
        $('.js-fade').each(function () {
            var pos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > pos - windowHeight + 100) {
                $(this).addClass('scroll');
            }
        });
    })
});
