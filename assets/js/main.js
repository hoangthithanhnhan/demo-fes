$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else{
            $('#backtop').fadeOut();    
        }
    });
    $('#backtop').click(function(){
        $('html,body').animate({
            scrollTop:0
        }, 1000);
    })

    $('#slide-doan-nghe-si').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        center: true,
        responsive:{
            0:{
                items:1
            },
            1024:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    $("#slide-su-kien-khac").owlCarousel({
        loop:true,
        margin:30,
        autoplay:false,
        dots:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $("#slide-tin-tuc-1").owlCarousel({
        items:1,
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $("#slide-tin-tuc-2").owlCarousel({
        items:1,
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $("#slide-tin-tuc-3").owlCarousel({
        items:1,
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });

    var owl = $('#slide-su-kien-khac');
    owl.owlCarousel();
    $('.button-right').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.button-left').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })

    $('#slide-tin-tai-tro').owlCarousel({
        items:2,
        loop:true,
        autoplay:false,
        margin:30,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    $('#slide-nha-tai-tro').owlCarousel({
        items:7,
        loop:true,
        margin:20,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:false
    });

    document.getElementById('dynamic1').addEventListener('click', function() {
        lightGallery(document.getElementById('dynamic1'), {
            dynamic: true,
            dynamicEl: [{   
                "src": './assets/images/thu-vien-anh-video/img2.png',
                'thumb': './assets/images/thu-vien-anh-video/img2.png',
            }, {
                'src': './assets/images/thu-vien-anh-video/img2.png',
                'thumb': './assets/images/thu-vien-anh-video/img2.png',
            }, {
                'src': './assets/images/thu-vien-anh-video/img2.png',
                'thumb': './assets/images/thu-vien-anh-video/img2.png',
            }]
        })
    });
    document.getElementById('dynamic2').addEventListener('click', function() {
        lightGallery(document.getElementById('dynamic2'), {
            dynamic: true,
            dynamicEl: [{   
                "src": './assets/images/thu-vien-anh-video/img3.png',
                'thumb': './assets/images/thu-vien-anh-video/img3.png',
            }, {
                'src': './assets/images/thu-vien-anh-video/img3.png',
                'thumb': './assets/images/thu-vien-anh-video/img3.png',
            }, {
                'src': './assets/images/thu-vien-anh-video/img3.png',
                'thumb': './assets/images/thu-vien-anh-video/img3.png',
            }]
        })
    });
    document.getElementById('dynamic3').addEventListener('click', function() {
        lightGallery(document.getElementById('dynamic3'), {
            dynamic: true,
            dynamicEl: [{   
                "src": './assets/images/thu-vien-anh-video/img5.png',
                'thumb': './assets/images/thu-vien-anh-video/img5.png',
            }, {
                'src': './assets/images/thu-vien-anh-video/img5.png',
                'thumb': './assets/images/thu-vien-anh-video/img5.png',
            }, {
                'src': './assets/images/thu-vien-anh-video/img5.png',
                'thumb': './assets/images/thu-vien-anh-video/img5.png',
            }]
        })
    });
    document.getElementById('dynamic4').addEventListener('click', function() {
        lightGallery(document.getElementById('dynamic4'), {
            dynamic: true,
            dynamicEl: [{   
                "src": './assets/images/thu-vien-anh-video/img4.png',
                'thumb': './assets/images/thu-vien-anh-video/img4.png',
            }, {
                'src': './assets/images/thu-vien-anh-video/img4.png',
                'thumb': './assets/images/thu-vien-anh-video/img4.png',
            }, {
                'src': './assets/images/thu-vien-anh-video/img4.png',
                'thumb': './assets/images/thu-vien-anh-video/img4.png',
            }]
        })
    });
    document.getElementById('dynamic-video').addEventListener('click', function() {
        lightGallery(document.getElementById('dynamic4'), {
            dynamic: true,
            dynamicEl: [{   
                "src": 'https://youtu.be/IDVkEvj0KZM?si=MuEaUGYLHCLqN7Yy',
                'thumb': 'https://youtu.be/IDVkEvj0KZM?si=MuEaUGYLHCLqN7Yy',
            }, {
                'src': 'https://youtu.be/IDVkEvj0KZM?si=MuEaUGYLHCLqN7Yy',
                'thumb': 'https://youtu.be/IDVkEvj0KZM?si=MuEaUGYLHCLqN7Yy',
            }, {
                'src': 'https://youtu.be/IDVkEvj0KZM?si=MuEaUGYLHCLqN7Yy',
                'thumb': 'https://youtu.be/IDVkEvj0KZM?si=MuEaUGYLHCLqN7Yy',
            }]
        })
    });

    lightGallery(document.getElementById('lightgallery'));
    lightGallery(document.getElementById('video-gallery'));

    $('#list').click(function() {
        $('.chuong-trinh-chinh-content').hide();
        $('.chuong-trinh-chinh-list').show();
        $('#list').addClass('active');
        $('#table').removeClass('active');
    });
    
    $('#table').click(function() {
        $('.chuong-trinh-chinh-content').show();
        $('.chuong-trinh-chinh-list').hide();
        $('#table').addClass('active');
        $('#list').removeClass('active');
    });

    $('[data-toggle="tooltip"]').tooltip()

    $('#list').on('click', function () {
        $(this).tooltip('hide');
    });
    $('#table').on('click', function () {
        $(this).tooltip('hide');
    });

    // setTimeout(setMaxHeight,2000)
    setMaxHeight();

})

function resizeimage(){
    let width=$('main .su-kien-khac .su-kien-khac-right .card').width();
    console.log(width);
    $('main .su-kien-khac .su-kien-khac-right .card').css('height',height=width/0.75)
    console.log(height);
}
$(function(){
    window.addEventListener("resize",resizeimage);
    window.onresize=function(){
        resizeimage()
    }
    resizeimage()
});

// function resizeimage(){
//     $('main .su-kien-khac .su-kien-khac-right .card').each(function(){
//         var height = $(this).height();
//         console.log(height);
//         var width=height*0.75;
//         $(this).css('width',width)
//     })
// }

function setMaxHeight(){
    var maxHeight=0;
    $('main .tai-tro .tai-tro-content .nha-tai-tro-item').each(function(){
        var height = $(this).height();
        console.log(height);
        maxHeight=height;   
        if(height>maxHeight){
            maxHeight=height;
        }
    })  
    $(this).css('height',maxHeight)
        console.log(maxHeight)
}

function setMaxHeight() {
    const container = document.getElementById('slide-nha-tai-tro');
    const items = container.getElementsByClassName('nha-tai-tro-item');
    let maxHeight = 0;
    for (let i = 0; i < items.length; i++) {
        const itemHeight = items[i].offsetHeight;
        console.log(itemHeight);
        if (itemHeight > maxHeight) {
            maxHeight = itemHeight;
        }
    }
    console.log(maxHeight);
    console.log(items);

    for (let i = 0; i < items.length; i++) {
        items[i].style.height = maxHeight +'px';
    }
}

