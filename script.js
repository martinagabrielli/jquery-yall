$(document).ready(function () {
    // ADDING AND REMOVING CONTENT TO OR FROM A PAGE WITH A MOUSE CLICK
    $('#content-link').click(function() {
        $('#content').toggle();
    });
    // CREATING A TOOLTIP THAT SHOWS CONTENT DURING THE HOVER EVENT
    $('.product-image img').bind({
        mouseenter : function() {
            var toolTip = $ (this).attr("title");
            $('.info').after('<p class="toolTip">'+toolTip+'</p>');   
        },
        mouseleave : function() {
            $('p.toolTip').hide();
        }
    });
    // CREATING BASIC ADD TO CART FUNCTIONALITY WITH MOUSEDOWN AND MOUSEUP EVENTS
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
    // CREATING A ROLLOVER EFFECT ON AN IMAGE
    $('.compass').hover(
        function() {$(this).attr('src', 'img/compass.png');},
        function() {$(this).attr('src', 'img/compass-bw.png');}
        );
    // ADDING A BORDER TO A FORM FIELD WHEN THE USER ADDS FOCUS
    $('first-name').bind('focus', function(){
        $(this).css('border', '1px solid red');
    });
});