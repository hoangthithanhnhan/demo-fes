$(document).ready(function() {
    renderNewSideBarDSVH('le-hoi',1)
    renderContent('D99C80DE-B22E-45C5-8CB4-B15C00AB49BF','content-le-hoi',1, 12);
    $(document).on("page",'#pagination', function(evt, page){
        renderContent('D99C80DE-B22E-45C5-8CB4-B15C00AB49BF','content-le-hoi',page, 12);
    });
})