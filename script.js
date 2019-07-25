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
    // MAKE A REMAINING CHARACTER SCRIPT
    $('#status').bind({
        keypress : function(){
            var maxNum = 100;
            var inputText = $(this).val();
            var numChar = inputText.length;
            var charRemain = numChar - maxNum;
            if (numChar <= maxNum) {
                $('.counter').text(charRemain);
            }
            else if (numChar > maxNum) {
                event.preventDefault();
            }
        }
    });
    // SHOWING AND HIDING ELEMENTS USING SHOW AND HIDE
    $('.recipe-name').bind('click', function(){
        $('.recipe').show();
    });
    // one or the other or use .toggle()
    $('.recipe-name').bind('click', function(){
        $('.recipe').hide();
    });
    // SETTING A MESSAGE TO APPEAR ONLY ONCE ON SITE USING THE SHOW METHOD AND COOKIES
    $('.special-offer').bind('click', function(){
        $('#message').show(hideMessage);
    });
    $('.hide').bind('click', function(){
        $('#message').hide(hideMessage);
    });
    function hideMessage() {
        var expirDate=new Date();
        expirDate.setDate(expirDate.getDate()+30);
        document.cookie = "name=hideCookie;expires="+expirDate.toUTCString();
    };
    var messageCookie = document.cookie;
    if (messageCookie) {
        // if message cookie is present, then hide special offer link
        $('.special-offer').hide();
    }
    else {
        // do nothing
    }
    // DISPLAYING ALTERNATIVE SEARCH OPTIONS WITH THE SLIDETOGGLE METHOD
    $('.advanced-search').bind('click', function(){
        $('.advanced').slideToggle();
    });
    // BUILDING A BASIC IMAGE GALLERY WITH A FADETRANSITION
    var slideArray = [
        "pic1.jpg",
        "pic2.jpg",
        "pic3.jpg",
        "pic4.jpg",
        "pic5.jpg"
    ];
    var imgDir = 'img/pic';
    $('.container').append('<div class="slide-image"></div>');
    $('.slide-image').html('<img src="img/'+slideArray[0]+'">');
    $('.slide-image').after('<ul id="nav"></ul>');
    var slideLength = slideArray.length;
    for(i=0; i < slideLength; i++) {
        var slideText = i + 1;
        $('#nav').append('<li><a href="#" rel="'+slideText+'">'+slideText+'</a></li>');
    };
    $('#nav li a').bind('click', function(){
        var numSlide = $(this).attr('rel');
        $('.slide-image').html('<img src="'+imgDir + numSlide +'.jpg">');
        $('.slide-image img').fadeIn();
        $('#nav li a').removeClass('active');
        $(this).addClass('active');
    });
    $('#nav li a').eq(0).click();
})