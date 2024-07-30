$(document).ready(function() {
    renderNewSideBar('tin-tuc-noi-bat',1)
    renderContent('FC71DC62-AEFB-4D26-987D-B15C00AA3D8E','content-tin-ky-ket-tai-tro',1, 12);
    $(document).on("page",'#pagination', function(evt, page){
        renderContent('FC71DC62-AEFB-4D26-987D-B15C00AA3D8E','#content-tin-ky-ket-tai-tro',page, 12);
    });
    
})