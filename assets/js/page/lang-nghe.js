$(document).ready(function() {
    renderNewSideBarDSVH('lang-nghe',1)
    renderContent('6D352DF9-84B5-4949-AF03-B15C00AB15BB','#content-lang-nghe',1, 12);
    $(document).on("page",'#pagination', function(evt, page){
        renderContent('6D352DF9-84B5-4949-AF03-B15C00AB15BB','#content-lang-nghe',page, 12);
    });
})