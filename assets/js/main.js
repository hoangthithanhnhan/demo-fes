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

    $('#slide-doan-nghe-si').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        center: true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:3
            },
            1024:{
                items:3,
                margin:10
            },
            1366:{
                margin:30
            }
        }
    })

    var owl = $('#slide-su-kien-khac');
    owl.owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        dots:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        navText:['<img class="" src="./assets/images/su-kien-khac/left.png" alt="">','<img class="" src="./assets/images/su-kien-khac/right.png" alt="">'],
        responsive:{
            0:{
                items:2,
                nav:true
            },
            768:{
                loop:true,
                items:3,
                nav:true,
            },
            1025:{
                items:4
            }
        }
    });
    $('.button-right').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.button-left').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })

    $("#slide-tin-tuc-1").owlCarousel({
        items:1,
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $("#slide-tin-tuc-2").owlCarousel({
        items:1,
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $("#slide-tin-tuc-3").owlCarousel({
        items:1,
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });

    $('#slide-tin-tai-tro').owlCarousel({
        loop:true,
        autoplay:true,
        margin:30,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                dots:false
            },
            640:{
                items:2
            }
        }
    });

    $('#slide-nha-tai-tro').owlCarousel({
        loop:true,
        items:7,
        margin:18,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            768:{
                items:4
            },
            992:{
                items:6
            },
            1024:{
                items:6
            },
            1280:{
                items:7
            }
        }
    });

    $("#slide-le-hoi-vh").owlCarousel({
        loop: true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            640:{
                items: 2
            },
            768:{
                items: 3
            },
            1024: {
                items: 3   ,
                autoplay: true,
                autoplayTimeout: 3000
            },
            1280:{
                items:4
            },
            1920:{
                items: 5
            }
        }
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

    var splash=document.getElementById('splash-screen');
    window.addEventListener("load",function(){
        setTimeout(() => {
            splash.style.display='none';
        }, 1000);
    })
})
function resizeimage(){
    let width=$('main .su-kien-khac .su-kien-khac-right .card').width();
    $('main .su-kien-khac .su-kien-khac-right .card').height(width/0.75);

    let widthLH=$('main .le-hoi-vh .le-hoi-vh-content .content-item .card').width();
    $('main .le-hoi-vh .le-hoi-vh-content .content-item .card').height(widthLH/0.68);

    let widthIMG=$('main .tin-vh-dl .tin-vh-dl-content .card img').width();
    $('main .tin-vh-dl .tin-vh-dl-content .card img').height(widthIMG/1.56);

}
$(function(){
    window.addEventListener("resize",resizeimage);
    window.onresize=function(){
        resizeimage()
    }
    resizeimage()
});


// function setMaxHeight(){
//     var maxHeight=0;
//     $('main .tai-tro .tai-tro-content .nha-tai-tro-item').each(function(){
//         var height = $(this).height();
//         console.log(height);
//         if(height>maxHeight){
//             maxHeight=height;
//         }
//     })  
//     $('main .tai-tro .tai-tro-content .nha-tai-tro-item').height(maxHeight);
//         console.log(maxHeight)
// }

// function setMaxHeight() {
//     const container = document.getElementById('slide-nha-tai-tro');
//     const items = container.getElementsByClassName('nha-tai-tro-item');
//     let maxHeight = 0;
//     for (let i = 0; i < items.length; i++) {
//         const itemHeight = items[i].offsetHeight;
//         console.log(itemHeight);
//         if (itemHeight > maxHeight) {
//             maxHeight = itemHeight;
//         }
//     }
//     console.log(maxHeight);
//     console.log(items);

//     for (let i = 0; i < items.length; i++) {
//         items[i].style.height = maxHeight +'px';
//     }
// }

