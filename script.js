$(document).ready(function () {

    $('#content-link').click(function() {
        $('#content').toggle();
    });

    $('.product-image img').bind({
        mouseenter : function() {
            var toolTip = $ (this).attr("title");
            $('.info').after('<p class="toolTip">'+toolTip+'</p>');   
        },
        mouseleave : function() {
            $('p.toolTip').hide();
        }
    });

    $('.product').bind({
        mousedown : function() {
            $(this).css('border','3px solid red');
        },
        mouseup: function() {
            $(this).css('border', '3px solid #ccc');
            $('.cart').append('Apple iPhone 4 is now in the cart<br>');
            $('.cart h2').text('Shopping Cart contains 1 item!');
            $(this).hide();
        }
    });

    $('.compass').hover(
        function() {$(this).attr('src', 'img/compass.png');},
        function() {$(this).attr('src', 'img/compass-bw.png');}
        );
});