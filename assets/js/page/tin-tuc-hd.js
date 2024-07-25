$(document).ready(function() {
    $('#zoom-in').on('click',function(){
        var currentFontSize = parseFloat($('#text p').css('font-size'));
        $('#text p').css('font-size', (currentFontSize + 2) + 'px');
    })
    $('#zoom-out').on('click',function(){
        var currentFontSize =parseFloat($('#text p').css('font-size'));
        $('#text p').css('font-size', (currentFontSize - 2) + 'px');
    })
    $('#reset').on('click',function(){
        $('#text p').css('font-size','16px');
    })
    $('#print').click(function() {
        window.print();
    });
    renderNewSideBar('bai-doc-nhieu-nhat',0)
    renderContent('6F533950-0750-4D79-991C-B07A0097FA26','#content-tin-tuc-hoat-dong',1, 12);
    $(document).on("page",'#pagination', function(evt, page){
        // console.log(pageSize)
        // console.log(page)
        renderContent('6F533950-0750-4D79-991C-B07A0097FA26','#content-tin-tuc-hoat-dong',page, 12);
    });
})

