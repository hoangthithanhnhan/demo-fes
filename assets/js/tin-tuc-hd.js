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
})

