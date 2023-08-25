// スムーススクロール
$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var type = 'swing';
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({'scrollTop':position},speed,type);
        return false;
    });
});

// トップへスクロール
$(function(){
    var topBtn = $('#top');
    topBtn.hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    topBtn.click(function(){
        $('body,html').animate({'scrollTop':0},500);
    });
});