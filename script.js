$(document).ready(function () {

    $('#content-link').click(function () {
        $('#content').toggle();
    });

    $('.product-image img').bind({
        mouseenter : function () {
            var toolTip = $ (this).attr("title");
            $('.info').after('<p class="toolTip">'+toolTip+'</p>');   
        },
        mouseleave : function () {
            $('p.toolTip').hide();
        }
    });
});