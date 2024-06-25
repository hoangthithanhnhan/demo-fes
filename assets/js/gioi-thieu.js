$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
            $('header').addClass('header-fixed');
        }else{
            $('#backtop').fadeOut();
            $('header').removeClass('header-fixed');
        }
    });
    $('#backtop').click(function(){
        $('html,body').animate({
            scrollTop:0
        }, 1000);
    })
    var splash=document.getElementById('splash-screen');
    window.addEventListener("load",function(){
        splash.style.display='none';
    })
    $('main .modal .modal-dialog .search-block .search-box .form-search').on('keyup',function(){
        var value=$(this).val().trim();
        if (value!==''){
            $('main .modal .modal-dialog .search-result-block').show();
        }
        else{
            $('main .modal .modal-dialog .search-result-block').hide();
        }
    })
})