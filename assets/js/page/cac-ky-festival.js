$(document).ready(function () {
    var pageSize = 10;
    renderData(1, pageSize);
    $(document).on("page",'#pagination', function(evt, page){
        // console.log(pageSize)
        // console.log(page)
        renderData(page, pageSize);
    });
    renderTinNoiBat();
});
function renderData(pageIndex, pageSize) {
    $.ajax({
        type:'GET',
        url:`http://localhost:3000/KyFestival?TrangThai=1&_page=${pageIndex}&_limit=${pageSize}`,
        dataType:'json',
        success:function(data, statusText, request){
            let totalRows = request.getResponseHeader("x-total-count");
            if(data && data.length>0){
                let html='';
                $.each(data, function(index,value){
                    html+=`
                        <li class="event">
                            <span class="ten-ky">${value.TenKy}</span> - <span class="detail">“${value.ChuDe}”</span>
                        </li>
                    `
                })
                $('.list').html(html);
                $('#pagination').twbsPagination('destroy');
                $('#pagination').twbsPagination({
                    totalPages: Math.ceil(totalRows/pageSize),
                    visiblePages:3,
                    initiateStartPageClick: false,
                    startPage:pageIndex,
                    hideOnlyOnePage:true,
                    first:  '<img src="../assets/images/tin-tuc-su-kien/First.png" alt="">',
                    prev:   '<img src="../assets/images/tin-tuc-su-kien/Prev.png" alt="">',
                    next:   '<img src="../assets/images/tin-tuc-su-kien/Next.png" alt="">',
                    last:   '<img src="../assets/images/tin-tuc-su-kien/Last.png" alt="">'
                });
            }
        },
        error:function(e){
            showAlert('Đã xảy ra lỗi trong quá trình xử lý yêu cầu!','danger')
        }
    });
}
function renderTinNoiBat(){
    $.ajax({
        type:'GET',
        url:`http://localhost:3000/TinTucNoiBat`,
        dataType:'json',
        success:function(data){
            if(data && data.length>0){
                let html='';
                $.each(data, function(index,value){
                    html+=`
                        <div class="content">
                            <a href="#"><img class="img" src='${value.Thumbnail ? value.Thumbnail : (value.Image ? value.Image : value.nullImage)}' alt=""></a>
                            <div class="text">
                                <a href="#" class="text-title">${value.Title}</a>
                                <a href="#" class="text-date"><img class="icon-date" src="../assets/images/ve-festival/calendar.png" alt="">${formatDate(value.Date)}</a>
                            </div>
                        </div>
                    `
                })
                $('#tin-tuc-noi-bat').html(html);
            }
        },
        error:function(e){
            showAlert('Đã xảy ra lỗi trong quá trình xử lý yêu cầu!','danger')
        }
    });
}
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