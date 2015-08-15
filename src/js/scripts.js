$(document).ready(function () {
    'use strict';
    
    $('.modal-link').click(function (e) {
        e.preventDefault();
        
        var $this = $(this),
            content = $($this.attr('data-target')).html(),
            $modal = $("<div class='modal'></di>"),
            $modalcontent = $("<div class='modal-body'></div>"),
            $body = $('body');

        $modalcontent.append(content);
        $modal.append($modalcontent);
        
        $modalcontent.on('click', function(e) {
            e.stopPropagation();
        });
        
        $modal.on('click', function () {
            $modal.off('click');
            $modalcontent.off('click');
            $(this).remove();
            $body.removeClass('noscroll');
        });
        
        $body.prepend($modal);
        $body.addClass('noscroll');
        
    });
    
});