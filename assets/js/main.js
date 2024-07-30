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
        
    })
    splash.style.display='none'; 

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
    renderNavBar()

    var TieuDe = $('.main-content .title').text().toLowerCase();
    let dropdown=$('.dropdown-item');
    $.each(dropdown, function(index, value){ 
        let navbarTitle=value.text.toLowerCase();
        if(TieuDe==navbarTitle){
            $(this).parents('.nav-item.dropdown').addClass('active')
        }
    })
})
function renderNavBar(){
    let nav='';
    nav+=
    `
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="../index.html">Trang chủ</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Festival Huế
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./ve-festival.html">Về Festival Huế</a></li>
                <li><a class="dropdown-item" href="./bieu-trung.html">Biểu trưng Festival Huế</a></li>
                <li><a class="dropdown-item" href="#">Các đoàn nghệ thuật</a></li>
                <li><a class="dropdown-item" href="#">Danh sách nhà tài trợ</a></li>
                <li><a class="dropdown-item" href="#">Danh sách phóng viên, đơn vị truyền thông</a></li>
                <li><a class="dropdown-item" href="#">Lịch sử các kỳ Festival</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="./tin-tuc-hd.html" role="button" data-toggle="dropdown" aria-expanded="false">
                Tin tức - Sự kiện
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./tin-tuc-hd.html">Tin tức hoạt động</a></li>
                <li><a class="dropdown-item" href="./hoat-dong-huong-ung.html">Hoạt động hưởng ứng</a></li>
                <li><a class="dropdown-item" href="#">Tin văn hóa - Du lịch</a></li>
                <li><a class="dropdown-item" href="#">Tin lễ hội Văn hóa Việt Nam</a></li>
                <li><a class="dropdown-item" href="#">Sự kiện Văn hóa - Du lịch</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Festival Huế 2024
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./fes-mua-xuan.html">Festival mùa Xuân</a></li>
                <li><a class="dropdown-item" href="#">Festival mùa Hạ</a></li>
                <li><a class="dropdown-item" href="#">Festival mùa Thu</a></li>
                <li><a class="dropdown-item" href="#">Festival mùa Đông</a></li>
                <li><a class="dropdown-item" href="#">Tuần lễ cao điểm</a></li>
                <li><a class="dropdown-item" href="#">Bản đồ điểm diễn ra chương trình</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Tài trợ
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Đăng ký tài trợ</a></li>
                <li><a class="dropdown-item" href="./tai-tro.html">Danh sách các đơn vị tài trợ</a></li>
                <li><a class="dropdown-item" href="./ky-ket-tai-tro.html">Tin ký kết tài trợ</a></li>
                <li><a class="dropdown-item" href="#">Hồ sơ tài trợ</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Văn hóa - Di sản
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Bản đồ địa điểm tham quan di tích - di sản</a></li>
                <li><a class="dropdown-item" href="#">Bản đồ địa điểm dịch vụ du lịch</a></li>
                <li><a class="dropdown-item" href="./lang-nghe.html">Làng nghề - Nghề thủ công mỹ nghệ</a></li>
                <li><a class="dropdown-item" href="#">Mô hình 3D về di sản, cổ vật</a></li>
                <li><a class="dropdown-item" href="./le-hoi.html">Lễ hội văn hóa</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Thư viện
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Hình ảnh</a></li>
                <li><a class="dropdown-item" href="#">Video</a></li>
                <li><a class="dropdown-item" href="#">Mô hình 3D</a></li>
                <li><a class="dropdown-item" href="#">Livestream</a></li>
            </ul>
        </li>
    </ul>
    `
    $('#navbarNavDropdown').html(nav)
}
//thông báo
function showAlert(message, type) {
    Swal.fire({
        text: message,
        icon: type,
        confirmButtonText: 'OK',
        timer:1000
    });
}
//render dữ liệu ở SIDEBAR
function renderNewSideBar(element,focus,sort){
    $.ajax({
        type:'GET',
        url:`https://huefestival.com/api/APITinBai/v1/News/getListNewsbyCateIDPaging?categoryId=6F533950-0750-4D79-991C-B07A0097FA26&index=0&size=5&focus=${focus}&sort=${sort}`,
        dataType:'json',
        success:function(data){
            //console.log(data)
            if(data && data.ResultObj && data.ResultObj.length>0){
                let html='';
                $.each(data.ResultObj, function(index,value){
                    html+=`
                        <div class="content">
                            <a href="#"><img class="img" src='https://huefestival.com/${value.UrlThumbAnhDaiDien ? value.UrlThumbAnhDaiDien : (value.UrlAnhDaiDien ? value.UrlAnhDaiDien : "../assets/images/ve-festival/trong.png")}' alt=""></a>
                            <div class="text">
                                <a href="#" class="text-title">${value.TieuDe}</a>
                                <a href="#" class="text-date"><img class="icon-date" src="../../assets/images/ve-festival/calendar.png" alt="">${formatDate(value.ThoiGianCongBo)}</a>
                            </div>
                        </div>
                    `
                })
                $(`#${element}`).html(html)
            }
        },
        error:function(e){
            showAlert('Đã xảy ra lỗi trong quá trình xử lý yêu cầu!','danger')
        }
    });
}
function renderNewSideBarDSVH(element,focus,sort){
    $.ajax({
        type:'GET',
        url:`https://huefestival.com/api/APITinBai/v1/News/getListNewsbyCateIDPaging?categoryId=6F533950-0750-4D79-991C-B07A0097FA26&index=0&size=5&focus=${focus}&sort=${sort}`,
        dataType:'json',
        success:function(data){
            //console.log(data)
            if(data && data.ResultObj && data.ResultObj.length>0){
                let html='';
                $.each(data.ResultObj, function(index,value){
                    html+=`
                        <div class="content content-lhvh">
                            <a href="#"><img class="img" src='https://huefestival.com/${value.UrlThumbAnhDaiDien ? value.UrlThumbAnhDaiDien : (value.UrlAnhDaiDien ? value.UrlAnhDaiDien : "../../assets/images/ve-festival/trong.png")}' alt=""></a>
                            <div class="text">
                                <a href="#" class="text-title">${value.TieuDe}</a>
                            </div>
                        </div>
                    `
                })
                $(`#${element}`).html(html)
            }
        },
        error:function(e){
            showAlert('Đã xảy ra lỗi trong quá trình xử lý yêu cầu!','danger')
        }
    });
}
//render dữ liệu bài viết bên phải
function renderMainContent(element,id){
    $.ajax({
        type: 'GET',
        url: `https://huefestival.com/api/APITinBai/v1/News/getNews?newsId=${id}`,
        dataType:'json',
        success: function (data) {
            // console.log(data)
            if(data){
                let html="";
                html+=`${data.content}`
                $(`#${element}`).html(html);
                let img=$('#text-content img')
                // $.each(img, function(index, value){ 
                //     console.log(value.src)
                //     let valueImg = value.src.replace("http://127.0.0.1:5500", "https://huefestival.com")
                //     img[index].setAttribute('src',valueImg)
                // })
                img.map((index, value) => {
                    let valueImg = value.src.replace("http://127.0.0.1:5500", "https://huefestival.com")
                    img[index].setAttribute('src',valueImg)
                })
            }
        },
        error:function(e){
            showAlert('Đã xảy ra lỗi trong quá trình xử lý yêu cầu!','danger')
        }
    })
}

function renderMainContentDetail(element,elementTime,id){
    $.ajax({
        type: 'GET',
        url: `https://huefestival.com/api/APITinBai/v1/News/getNews?newsId=${id}`,
        dataType:'json',
        success: function (data) {
            // console.log(data)
            if(data){
                let html="";
                let time="";
                time+=`${data.publishTime}`
                html+=`
                <h5 class="heading" id="heading-text">${data.summary}</h5>
                <div class="text-content" id="text">${data.content}</div>
                `
                $(`#${element}`).html(html);
                $(`#${elementTime}`).html(time);
                let img=$('#text-content img')
                
                // $.each(img, function(index, value){ 
                //     console.log(value.src)
                //     let valueImg = value.src.replace("http://127.0.0.1:5500", "https://huefestival.com")
                //     img[index].setAttribute('src',valueImg)
                // })
                img.map((index, value) => {
                    let valueImg = value.src.replace("http://127.0.0.1:5500", "https://huefestival.com")
                    img[index].setAttribute('src',valueImg)
                })
            }
        },
        error:function(e){
            showAlert('Đã xảy ra lỗi trong quá trình xử lý yêu cầu!','danger')
        }
    })
}
function renderInternalLink(element,categoryId,idCurrent){
    $.ajax({
        type: 'GET',
        url: `https://huefestival.com/api/APITinBai/v1/News/getListNewsOtherPaging?categoryId=${categoryId}&newsId=${idCurrent}&index=0&size=5`,
        dataType:'json',
        success: function (data) {
            // console.log(data)
            if(data && data.ResultObj && data.ResultObj.length>0){
                let html="";
                $.each(data.ResultObj, function(index,value){
                html+=`
                    <li>
                        <a href="#" class="link">${value.TomTat} <span class="date">(${formatDate(value.ThoiGianCongBo)})</span></a>
                    </li>
                `
                $(`#${element}`).html(html);
                })
            }
        },
        error:function(e){
            showAlert('Đã xảy ra lỗi trong quá trình xử lý yêu cầu!','danger')
        }
    })
}

//render dữ liệu tin bài có pagination
function renderContent(id, element, pageIndex, pageSize){
    // console.log(pageIndex,pageSize)  
    $.ajax({
        type:'GET',
        url:`https://huefestival.com/api/APITinBai/v1/News/getListNewsbyCateIDPaging?categoryId=${id}&index=${pageIndex - 1}&size=${pageSize}`,
        dataType:'json',
        success:function(data){
            if(data && data.ResultObj && data.ResultObj.length>0){
                let html='';
                $.each(data.ResultObj, function(index,value){
                    html+=`
                        <div class="content-item">
                            <a href="#"><img class="img-cover" src='https://huefestival.com/${value.UrlThumbAnhDaiDien ? value.UrlThumbAnhDaiDien : (value.UrlAnhDaiDien ? value.UrlAnhDaiDien : "../assets/images/ve-festival/trong.png")}' alt=""></a>
                            <div class="text">
                                <a href="#" class="text-title">${value.TieuDe}</a>
                                <a href="#" class="text-detail">${value.TomTat}</a>
                            </div>
                        </div>
                    `
                })
                $(`#${element}`).html(html);
                
                if($('#pagination').data("twbsPagination") != null) {
                    $('#pagination').twbsPagination('destroy');
                }
                $('#pagination').twbsPagination({
                    totalPages: Math.ceil(data.TotalRows/pageSize),
                    visiblePages:3,
                    initiateStartPageClick: false,
                    startPage:pageIndex,
                    hideOnlyOnePage:true,
                    first:  '<img src="../../assets/images/tin-tuc-su-kien/First.png" alt="">',
                    prev:   '<img src="../../assets/images/tin-tuc-su-kien/Prev.png" alt="">',
                    next:   '<img src="../../assets/images/tin-tuc-su-kien/Next.png" alt="">',
                    last:   '<img src="../../assets/images/tin-tuc-su-kien/Last.png" alt="">'
                });
            }
        },
        error:function(e){
            showAlert('Đã xảy ra lỗi trong quá trình xử lý yêu cầu!','danger')
        }
    });
}
//thay đổi định dạng DATE từ định dạng ở DB 2023-09-22T00:00:00 -> 22/09/2023 khi render ra view
function formatDate(date){
    if (date != null && date != "") {
        var d = new Date(date),
            month = (d.getMonth() + 1),
            day = d.getDate(),
            year = d.getFullYear()

        if (month<10) month = '0' + month
        if (day<10) day = '0' + day
        return `${day}/${month}/${year}`;
    }
    return "";
};