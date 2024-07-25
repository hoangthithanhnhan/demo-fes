$(document).ready(function () {
    renderNewSideBar('tin-tuc-noi-bat',1)
    renderContent('D306DBF2-7DA8-420F-9439-B08500FA7861','#content-tin-vh-dl',1, 12);
    $(document).on("page",'#pagination', function(evt, page){
        // console.log(pageSize)
        // console.log(page)
        renderContent('D306DBF2-7DA8-420F-9439-B08500FA7861','#ccontent-tin-vh-dl',page, 12);
    });
});