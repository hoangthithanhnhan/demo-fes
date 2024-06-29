$(document).ready(function() {
    $('#zoom-in').on('click',function(){
        var currentFontSize = parseInt($('#text p').css('font-size'));
        var currentFontLineHeight = parseInt($('#text p').css('line-height'));
        $('#text p').css('font-size', (currentFontSize + 2) + 'px');
        $('#text p').css('line-height', (currentFontLineHeight + 2) + 'px');
    })
    $('#zoom-out').on('click',function(){
        var currentFontSize = parseInt($('#text p').css('font-size'));
        var currentFontLineHeight = parseInt($('#text p').css('line-height'));
        $('#text p').css('font-size', (currentFontSize - 2) + 'px');
        $('#text p').css('line-height', (currentFontLineHeight - 2) + 'px');
    })
    $('#reset').on('click',function(){
        $('#text p').css('font-size','16px');
        $('#text p').css('line-height','24px');
    })
    $('#print').click(function() {
        window.print();
    });
})

