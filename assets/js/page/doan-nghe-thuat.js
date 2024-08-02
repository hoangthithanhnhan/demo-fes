$(document).ready(function() {
    renderNewSideBar('tin-tuc-noi-bat',1)
    renderContent('6F533950-0750-4D79-991C-B07A0097FA26','content-doan-nghe-thuat',1, 12);
    $(document).on("page",'#pagination', function(evt, page){
        renderContent('6F533950-0750-4D79-991C-B07A0097FA26','content-doan-nghe-thuat',page, 12);
    });
})

