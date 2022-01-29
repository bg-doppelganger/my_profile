// JavaScript Document
$(function () {

    /*** 上に戻るボタン ***/
    let topBtn = $('#scroll-top');
    topBtn.hide();

    // ある程度スクロールされたら、上に戻るボタンを表示する
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            topBtn.fadeIn(); // フェードインで表示
        } else {
            topBtn.fadeOut(); // フェードアウトで非表示
        }
    });

    topBtn.on("click", function (event) {
        event.preventDefault();  // ページ内リンクの挙動をキャンセル
        $('body,html').animate({ // スムーズにスクロールする設定
            scrollTop: 0
        }, 500);
    });

    /*** ナビゲーションメニュー ***/
    //1.
    $('.close-button, .open-button').on("click",function () {
        $('.header nav').slideToggle();
    });

    /*** スライダー（slick） ***/
    //https://kenwheeler.github.io/slick/
    $('#slick-slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,      
    });
});


 $(function(){
     $('input[name="dark-btn"]').change(function(){
       if($(this).is(':checked')){
         $('body').addClass('dark').css('transition','0.3s');
         $('#section-about__dark-tune1').removeClass('section-about__title');
         $('#section-about__dark-tune1').addClass('section-about__dark-title');
         $('#section-about__dark-tune2').removeClass('section-about__description');
         $('#section-about__dark-tune2').addClass('section-about__dark-description');
         $('#section-gallery__dark-tune1').removeClass('section-gallery__title');
         $('#section-gallery__dark-tune1').addClass('section-gallery__dark-title');
         $('#section-gallery__dark-tune2').addClass('section-gallery__dark-image');
         $.cookie('dark', 'on', { expires: 365, path:'/'});
         
       } else{
         $('body').removeClass('dark').css('transition','0.3s');
         $('#section-about__dark-tune1').removeClass('section-about__dark-title');
         $('#section-about__dark-tune1').addClass('section-about__title');
         $('#section-about__dark-tune2').removeClass('section-about__dark-description');
         $('#section-about__dark-tune2').addClass('section-about__description');
         $('#section-gallery__dark-tune1').removeClass('section-gallery__dark-title');
         $('#section-gallery__dark-tune1').addClass('section-gallery__title');
         $('#section-gallery__dark-tune2').removeClass('section-gallery__dark-image');
         $('#section-gallery__dark-tune2').addClass('section-gallery__light-image');
         $.cookie('dark', 'off', { expires: 365, path:'/'});
       }
     });
   });
