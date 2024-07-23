$(document).ready(function () {
    var pageSize = 10;
    renderData(1, pageSize);
    $(document).on("page",'#pagination', function(evt, page){
        console.log(pageSize)
        console.log(page)
        renderData(page, pageSize);
    });
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
                $('#pagination').twbsPagination({
                    totalPages: Math.ceil(totalRows/pageSize),
                    visiblePages:3,
                    initiateStartPageClick: false,
                    startPage:pageIndex,
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