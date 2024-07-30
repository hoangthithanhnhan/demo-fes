$(document).ready(function() {
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
                items:1,
                nav:true
            },
            480:{
                items:2,
                nav:true,
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

    // if(document.getElementById('dynamic1')!=null){
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
    // }else{
    // }
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
    renderBaiViet('hoat-dong-huong-ung','712A6841-081D-459E-91E7-B15C0095E53A',4, 0)
    renderBaiViet('tin-vh-dl','D306DBF2-7DA8-420F-9439-B08500FA7861',4, 1)
    renderLeHoiVanHoa('slide-le-hoi-vh','D99C80DE-B22E-45C5-8CB4-B15C00AB49BF',10)
    renderTinTaiTro('slide-tin-tai-tro','FC71DC62-AEFB-4D26-987D-B15C00AA3D8E',5)
    renderTinTucSuKien('tin-tuc-su-kien','6F533950-0750-4D79-991C-B07A0097FA26',6)
    renderTinTuc('slide-tin-tuc-1','BBAF3396-6924-465B-B2A8-B15C00AC3763',5)
    renderTinTuc('slide-tin-tuc-2','BBAF3396-6924-465B-B2A8-B15C00AC3763',5)
    renderTinTuc('slide-tin-tuc-3','BBAF3396-6924-465B-B2A8-B15C00AC3763',5)
})
function renderTinTucSuKien(element,id,size){
    $.ajax({
        type: 'GET',
        url: `https://huefestival.com/api/APITinBai/v1/News/getListNewsbyCateIDPaging?categoryId=${id}&index=0&size=${size}`,
        dataType: 'json',
        success:function(data){
            if(data && data.ResultObj && data.ResultObj.length>0){
                let left='';
                let right='';
                let html='';
                $.each(data.ResultObj, function(index,value){
                    console.log(data)
                    if(index==0){
                        left+=`
                        <div class="col-xl-5 col-12 tin-tuc-left" id="tin-tuc-left">
                            <a href="#"><img class="img-left" src="https://huefestival.com/${value.UrlThumbAnhDaiDien?value.UrlThumbAnhDaiDien:(value.UrlAnhDaiDien?value.UrlAnhDaiDien:"../assets/images/ve-festival/trong.png")}" alt=""></a>
                            <a href="#" class="item-title title-left">${value.TieuDe}</a>
                            <div class="item-date date-left d-flex align-items-center"> <img class="icon-date" src="./assets/images/tin-tuc/lich.png" alt="">${formatDate(value.ThoiGianCongBo)}</div>
                            <a href="#" class="item-content content-left">${value.TomTat}</a>
                        </div>`
                        }else{
                            right+=`
                            <div class="tin-tuc-center-item d-flex">
                                <a href="#"><img class="img-center" src="https://huefestival.com/${value.UrlThumbAnhDaiDien?value.UrlThumbAnhDaiDien:(value.UrlAnhDaiDien?value.UrlAnhDaiDien:"../assets/images/ve-festival/trong.png")}" alt=""></a>
                                <div class="tin-tuc-content-item">
                                <a href="#" class="item-title title-center">${value.TieuDe}</a>
                                <div class="item-date date-center d-flex align-items-center"> 
                                    <img class="icon-date" src="./assets/images/tin-tuc/lich.png" alt="">${formatDate(value.ThoiGianCongBo)}</div>
                                </div>
                            </div>`
                    }
                })
                html+=`${left}
                        <div class="col-xl-3 col-12 tin-tuc-center" id="tin-tuc-right">
                            ${right}
                        </div>`
                console.log(html)
                $(`#${element}`).prepend(html)
            }
        },
        error:function(e){
            showAlert('Đã xảy ra lỗi trong quá trình xử lý yêu cầu!','danger')
        }
    })
}
function renderTinTuc(element,id,size){
    $.ajax({
        type: 'GET',
        url: `https://huefestival.com/api/APITinBai/v1/News/getListNewsbyCateIDPaging?categoryId=${id}&index=0&size=${size}`,
        dataType: 'json',
        success:function(data){
            if(data && data.ResultObj && data.ResultObj.length>0){
                let html='';
                $.each(data.ResultObj, function(index,value){
                    html+=`
                    <div class="content-right d-flex item">
                        <a href="#"><img class="img-right" src="https://huefestival.com/${value.UrlThumbAnhDaiDien?value.UrlThumbAnhDaiDien:(value.UrlAnhDaiDien?value.UrlAnhDaiDien:"../assets/images/ve-festival/trong.png")}" alt=""></a>
                        <div class="content-right-item">
                            <a href="#" class="item-title ">${value.TieuDe}</a>
                            <div class="item-date date-right d-flex align-items-center"> <img class="icon-date" src="./assets/images/tin-tuc/lich.png" alt="">${formatDate(value.ThoiGianCongBo)}</div>
                        </div>
                    </div>
                    `
                })
                $(`#${element}`).html(html);
                $(`#${element}`).owlCarousel({
                    items:1,
                    loop:true,
                    margin:30,
                    nav:false,
                    dots:false,
                    autoplay:true,
                    autoplayTimeout:2000,
                    autoplayHoverPause:true
                });
            }
        },
        error:function(e){
            showAlert('Đã xảy ra lỗi trong quá trình xử lý yêu cầu!','danger')
        }
    })
}
function renderLeHoiVanHoa(element,id,size){
    $(`${element}`).empty();
    $.ajax({
        type: 'GET',
        url: `https://huefestival.com/api/APITinBai/v1/News/getListNewsbyCateIDPaging?categoryId=${id}&index=0&size=${size}`,
        dataType: 'json',
        success:function(data){
            // console.log(data)
            if(data && data.ResultObj && data.ResultObj.length>0){
                //let html='';
                $.each(data.ResultObj, function(index,value){
                    let html=`
                        <div class="content-item item">
                            <div class="card bg-dark text-white">
                                <img src="https://huefestival.com/${value.UrlThumbAnhDaiDien?value.UrlThumbAnhDaiDien:(value.UrlAnhDaiDien?value.UrlAnhDaiDien:"../assets/images/ve-festival/trong.png")}" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <p class="card-text">${value.TieuDe}</p>
                                </div>
                                <div class="card text-center item-hover">
                                    <div class="card-body">
                                        <h5 class="card-title">${value.TieuDe}</h5>
                                        <p class="card-text">${value.TomTat}</p>
                                        <a href="#" class="btn btn-primary">Xem chi tiết</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                    $(`#${element}`).append(html);
                })
                $(`#${element}`).owlCarousel({
                    loop: false,
                    dots:false,
                    margin: 30,
                    autoplay: true,
                    autoplayTimeout: 3000,
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
                            items: 3
                        },
                        1280:{
                            items:4
                        },
                        1920:{
                            items: 5
                        }
                    }
                });
                resizeimageLeHoiVanHoa();
            }
        },
        error:function(e){
            showAlert('Đã xảy ra lỗi trong quá trình xử lý yêu cầu!','danger')
        }
    })
}
function renderTinTaiTro(element, id, size){
    $.ajax({
        type: 'GET',
        url: `https://huefestival.com/api/APITinBai/v1/News/getListNewsbyCateIDPaging?categoryId=${id}&index=0&size=${size}`,
        dataType: 'json',
        success:function(data){
            if(data && data.ResultObj && data.ResultObj.length>0){
                let html='';
                $.each(data.ResultObj, function(index,value){
                    html+=`
                    <div class="card bg-dark text-white item">
                        <img src="https://huefestival.com/${value.UrlThumbAnhDaiDien?value.UrlThumbAnhDaiDien:(value.UrlAnhDaiDien?value.UrlAnhDaiDien:"../assets/images/ve-festival/trong.png")}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <div class="overlay"></div>
                            <a href="#" class="card-title">${value.TieuDe}</a>
                        </div>  
                    </div>
                    `
                })
                $(`#${element}`).html(html);
                $('#slide-tin-tai-tro').owlCarousel({
                    loop:true,
                    autoplay:false,
                    margin:30,
                    autoplayTimeout:3000,
                    autoplayHoverPause:false,
                    dots:false,
                    responsive:{
                        0:{
                            items:1,
                        },
                        640:{
                            items:2
                        }
                    }
                });

            }
        },
        error:function(e){
            showAlert('Đã xảy ra lỗi trong quá trình xử lý yêu cầu!','danger')
        }
    })
}
function renderBaiViet(element,id,size, isSummary){
    $.ajax({
        type: 'GET',
        url: `https://huefestival.com/api/APITinBai/v1/News/getListNewsbyCateIDPaging?categoryId=${id}&index=0&size=${size}`,
        dataType: 'json',
        success:function(data){
            if(data && data.ResultObj && data.ResultObj.length>0){
                let html='';
                $.each(data.ResultObj, function(index,value){
                    html+=`
                    <div class="col-xl-3 col-lg-6 col-md-6 tin-vl-dl-item hoat-dong-huong-ung-item">
                        <div class="card">
                            <img src="https://huefestival.com/${value.UrlThumbAnhDaiDien?value.UrlThumbAnhDaiDien:(value.UrlAnhDaiDien?value.UrlAnhDaiDien:"../assets/images/ve-festival/trong.png")}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="card-title">${value.TieuDe}</a>
                                ${isSummary == 1 ? `<a href="#" class="card-text"><p>${value.TomTat}</p></a>` : ""}
                            </div>
                        </div>
                    </div>
                    `
                })
                $(`#${element}`).html(html);
            }
        },
        error:function(e){
            showAlert('Đã xảy ra lỗi trong quá trình xử lý yêu cầu!','danger')
        }
    })
}

function resizeimageSuKienKhac(){
    let width=$('main .su-kien-khac .su-kien-khac-right .card').width();
    $('main .su-kien-khac .su-kien-khac-right .card').height(width/0.75);
}

function resizeimageLeHoiVanHoa(){
    let widthLH=$('main .le-hoi-vh .le-hoi-vh-content .content-item .card').width();
    $('main .le-hoi-vh .le-hoi-vh-content .content-item .card').height(widthLH/0.68);
}

function resizeimageVanHoaDuLich(){
    let widthIMG=$('main .tin-vh-dl .tin-vh-dl-content .card img').width();
    $('main .tin-vh-dl .tin-vh-dl-content .card img').height(widthIMG/1.56);
}


$(function(){
    window.addEventListener("resize",resizeimageSuKienKhac);
    window.addEventListener("resize",resizeimageVanHoaDuLich);
    window.addEventListener("resize",resizeimageLeHoiVanHoa);
    window.onresize=function(){
        resizeimageSuKienKhac()
        resizeimageVanHoaDuLich()
        resizeimageLeHoiVanHoa()
    }
    resizeimageSuKienKhac()
});


