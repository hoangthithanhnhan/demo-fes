$(document).ready(function(){
    //var pageSize = 10;
    renderContent(1, 12);
    $(document).on("page",'#pagination', function(evt, page){
        // console.log(pageSize)
        // console.log(page)
        renderContent(page, 12);
    });
    renderNewSideBar('tin-tuc-noi-bat');
})
function renderContent(pageIndex, pageSize){
    console.log({pageIndex, pageSize})
    $.ajax({
        type:'GET',
        url:`https://huefestival.com/api/APITinBai/v1/News/getListNewsbyCateIDPaging?categoryId=FC71DC62-AEFB-4D26-987D-B15C00AA3D8E&index=${pageIndex - 1}&size=${pageSize}`,
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
                $('#content-tin-ky-ket-tai-tro').html(html)
                $('#pagination').twbsPagination('destroy');
                $('#pagination').twbsPagination({
                    totalPages: Math.ceil(data.TotalRows/pageSize),
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