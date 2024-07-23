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
    $(window).on('load',function(){
        splash.style.display='none'; 
    })

    $('#exampleModal').on('shown.bs.modal',function(){
        $('#form-search').trigger('focus');
    })
    
    $('#form-search').on('keyup',function(){
        var value=$(this).val().trim();
        if (value!==''){
            $('main .modal .modal-dialog .search-result-block').show();
            $('#button-clear').show();
            $('#button-clear').css({
                'display':'flex',
                'align-items': 'center',
            })
            $('#button-clear').on('click',function(){
                $('#form-search').val('');
                $('#form-search').trigger('focus');
                $('main .modal .modal-dialog .search-result-block').hide();
                $(this).hide();
            })
        }
        else{
            $('main .modal .modal-dialog .search-result-block').hide();
            $('#button-clear').hide();
        }
    })
    $('#exampleModal').on('hidden.bs.modal',function(){
        $('#form-search').val('');
        $('main .modal .search-result-block').hide();
        $('#button-clear').hide();
    })
})
