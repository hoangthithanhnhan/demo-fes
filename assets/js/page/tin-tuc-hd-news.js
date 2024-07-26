$(document).ready(function(){
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
    renderMainContentDetail('#content-tin-tuc-hd-news','#publishTime','22548E5D-FE70-4E84-AA4F-B08500FA2098')
    renderInternalLink('#internalLink','6F533950-0750-4D79-991C-B07A0097FA26','22548E5D-FE70-4E84-AA4F-B08500FA2098')
})