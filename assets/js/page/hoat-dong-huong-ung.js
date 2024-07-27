$(document).ready(function() {
    renderNewSideBar('bai-doc-nhieu-nhat',0,'view')
    renderContent('712A6841-081D-459E-91E7-B15C0095E53A','#content-hd-huong-ung',1, 12);
    $(document).on("page",'#pagination', function(evt, page){
        renderContent('712A6841-081D-459E-91E7-B15C0095E53A','#content-hd-huong-ung',page, 12);
    });
})

