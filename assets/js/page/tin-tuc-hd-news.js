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
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    console.log(id);
    // shirt

    const cid = urlParams.get('cid')
    console.log(cid);
    // blue
    if(id!="" && id!=null && cid!="" && cid!=null){
        renderMainContent(id,1)
        renderNewsOther(cid,id)
    }
})