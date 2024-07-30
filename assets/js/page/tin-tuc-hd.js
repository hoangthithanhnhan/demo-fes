$(document).ready(function() {
    renderNewSideBar('bai-doc-nhieu-nhat',0,'view')
    renderContent('6F533950-0750-4D79-991C-B07A0097FA26','content-tin-tuc-hoat-dong',1, 12);
    $(document).on("page",'#pagination', function(evt, page){
        // console.log(pageSize)
        // console.log(page)
        renderContent('6F533950-0750-4D79-991C-B07A0097FA26','content-tin-tuc-hoat-dong',page, 12);
    });
})

