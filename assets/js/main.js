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
})

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
                $(`${element}`).html(html);
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
                $(`${element}`).html(html);
                
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