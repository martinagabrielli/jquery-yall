$(document).ready(function () {
    // ADDING AND REMOVING CONTENT TO OR FROM A PAGE WITH A MOUSE CLICK
    $('#content-link').click(function() {
        $('#content-click').toggle();
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
    // $('.recipe-name').bind('click', function(){
    //     $('.recipe').hide();
    // });
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
    // BUILDING A BASIC IMAGE GALLERY WITH A FADE TRANSITION
    var slideArray = [
        "pic1.jpg",
        "pic2.jpg",
        "pic3.jpg",
        "pic4.jpg",
        "pic5.jpg"
    ];
    var imgDir = 'img/pic';
    $('.container').append('<div class="slide-image-first"></div>');
    $('.slide-image-first').html('<img src="img/'+slideArray[0]+'">');
    $('.slide-image-first').after('<ul id="nav"></ul>');
    var slideLength = slideArray.length;
    for(i=0; i < slideLength; i++) {
        var slideText = i + 1;
        $('#nav').append('<li><a href="#" rel="'+slideText+'">'+slideText+'</a></li>');
    };
    $('#nav li a').bind('click', function(){
        var numSlide = $(this).attr('rel');
        $('.slide-image-first').html('<img src="'+imgDir + numSlide +'.jpg">');
        $('.slide-image-first img').fadeIn();
        $('#nav li a').removeClass('active');
        $(this).addClass('active');
    });
    $('#nav li a').eq(0).click();
    // ADDING DELAY TO CREATE A TIMED ANIMATION
    $('.show-tip').hover(function(){
        $('.tool-tip').fadeIn(900);
    },
    function(){
        $('.tool-tip').delay(10000).fadeOut(900)
    });
    // CHAINING MULTIPLE EFFECTS TOGETHER
    // The first is by creating three statements that each select the element and apply CSS to it:
    $('#politics').css('border', '1px solid red');
    $('#finance').css('display', 'none');
    $('#local').css('border', '1px solid green');

    // The second way of achieving this is by chaining all of the elements and methods into one statement by utilizing the end() method:
    $('#news').find('#politics').css('border', '1px solid red').end().find('#finance').hide().end().find('#local').css('border', '1px solid blue');
    // CREATING A NEWS FEEDTICKER WITH MULTIPLE EFFECTS
    var newsArray = [
        "Delhomme, Wallace sharp early for Browns",
        "Bucs expect to have injured QB Freeman for opener",
        "Report: Haynesworth likely has rhabdomyolysis",
        "QB Orton effectively leading Broncos in preseason",
        "Vernon Gholston not offended by set-up fight",
        "Cubs’ Piniella to retire after Sunday",
        "Bradley interested in Aston Villa job",
        "Federer beats Fish for Cincinnati title",
        "Garcia 3-hits Giants, Cardinals roll 9-0",
        "Cano, CC power Yankees over M’s 10-0"
    ];
    var newsLength = newsArray.length;
    var newsInterval = 2000;
    $('#news-feedticker').after('<ul id="news-feed"></ul>');
    for(i = 0; i < newsLength; i++){
        $('#news-feed').append('<li>'+newsArray[i]+'</li>');
    };
    function slideHeadline(){
        $('#news-feed li:last').clone().prependTo('#news-feed').css('display', 'none');
        $('#news-feed li:first').fadeIn(1000).slideDown(500);
        $('#news-feed li:last').remove();
    };
    setInterval(slideHeadline, newsInterval);
    // BUILDING AN IMAGE GALLERY WITH TEXT CAPTIONS USING ADVANCED ANIMATIONS *** not working ***
    var slideArraySecond = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg"];
    var textArray = ["Rusty Cable.","Watch Dogs.","Plant Sink.","Urban Cowboy"];
    var urlArray = ["http://www.google.com", "http://www.onerutter.com", "http://www.flickr.com", "http://www.facebook.com"];
    $('.container-last').append('<div class="slide-container">');
    $('.container-last').after('<ul id="nav-second" class="clearfix"></ul>');
    for(i=0; i < slideArraySecond.length; i++){
        var slideNum = i + 1;
        $('#nav-second').append('<li><a href="#" rel="'+slideNum+'">'+slideNum+'</a></li>');
        var slideInfo = '<div class="slide-image'+slideNum+' slides">';
        slideInfo += '<div class="slide-text">'+slideArraySecond[i]+'</div>';
        slideInfo += '<img src="img/pic'+slideNum+'.jpg"></div>';

        $('.slide-container').append(slideInfo);
    }
    var slideTotal = slideArraySecond.length;
    slideWidth = 400;
    var slideContainer = slideWidth * slideTotal;
    $(".slide-container").css({'width' : slideContainer});
    $('#nav-second li a').bind('click', function(){
        $('#nav-second li a').removeClass('active');
        $(this).addClass('active');
        $(".slide-text").css({
            'top':'-100px',
            'right': '0px'
        });
        $(".slide-text").stop();
        $(".slide-text").clearQueue();

        var active = $('#nav-second li a.active').attr("rel") -1;
        var slidePos = active * slideWidth;
        var slideNum = $('#nav-second li a.active').attr("rel");

        $(".slide-container").animate({
            left: -slidePos,
            },1000, function(){
                $('slide-image'+slideNum+'.slideText').addClass('textStrip').animate({
                    top:0,
                    left:slidePos,
                    right:0,
                },1000, function(){
                $('.slide-text').delay(5000).animate({
                    top:-100
                },1000);
            });
        });
    });
    // SETTING ALL LINKS ON A PAGE TO OPEN IN A NEW WINDOW
    $('#links li a').attr('target', '_blank');
    // SETTING AN ACTIVE ITEM IN YOUR NAVIGATION MENU
    var path = location.pathname;
    var pathArray = path.split('/');
    var pArrLength = pathArray.length;
    for(i=0; i<pArrLength; i++) {
        $("a[href*='"+pathArray[i]+"']").addClass("selected").css({
            'font-weight': 'bold',
            'text-decoration': 'underline'
        });
    }
    // CREATING A BASIC DROP-DOWN MENU (just change .animate for .slideDown('slow') in 1st function & .slideUp('fast') in 2nd function
    // ADDING ADVANCED EFFECTS TO THE BASIC DROP-DOWN MENU USING ANIMATE (currently on)
    $('#navigation li').hover(function(){
        $(this).find('.subnav').animate({opacity: 1.0, height: 'toggle'}, 500);
        $(this).find('a').addClass('active');
    }, function() {
        $(this).find('.subnav').animate({opacity: 0, height: 'toggle'}, 500);
        $(this).find('a').removeClass('active');
    });
    // CREATING AN ACCORDION MENU
    $('.accordion-content').not(':first').hide();
    $('.accordion-content:first').show();
    $('.accordion.header:first').addClass('header-active');
    $('.accordion-header:first').find('span').addClass('icon-active');
    $('.accordion-header').click(function(){
        $('.accordion-content:visible').slideUp('slow').prev().removeClass('.header-active');
        $('icon-active:visible').removeClass('icon-active');
        $(this).addClass('header-active').next().slideDown('slow');
        $(this).find('span').addClass('icon-active');
    });
    // CREATING TABBED CONTENT
    $('.content:first').show();
    $('#tabs li a:first').addClass('tab-active');
    $('#tabs li a').hover(
        function() {
            // mouseenter event
            $(this).animate({left: 20}, 300, function() {
                $(this).animate({left: 0}, 50);
            });
        },
        function () {
            // mouseleave event
        }
    );
    $('ul#tabs li a').bind('click', function() {
        var linkIndex = $('#tabs li a').index(this);
        $('#tabs li a').removeClass('tab-active');
        $('.content:visible').hide();
        $('.content:eq('+linkIndex+')').show();
        $(this).addClass('tab-active');
        return false;
    });
    // STYLING THE DATA IN TABLES
        $('tbody tr:even').css('background', '#dedede');
        $('tbody tr:odd').css('background', '#ffffff');
        $(document).ready(function(){
            $('tr').hover(function() {
                $(this).css('background', 'pink');
            }, function() {
                $(this).css('background', 'white');
            });
    });
    // ADDING AN ADVANCED HOVER EFFECT TO ROWS
    $('tr').hover(function (){
        $(this).children().append('<div class="editme"><a href="">Edit Me</a></div>');
    }, function() {
        $('.editme').remove();
    });
    // MANIPULATINGTHE DATA IN TABLES
        // ADDING A MESSAGE AFTER THE FIRST/LAST ROWS OF THE TABLE
        $('#products tr:first').after('<tr><td colspan="4" class="special">Special Offer TODAY</td></tr>');
        // REMOVING A ROW USING A FILTER SELECTOR
        $('tr:last').remove();
        // ADDING A ROW AFTER A ROW BASED ON ITS INDEX VALUE
        $("tr:eq(5)").after('<tr><td colspan="4" class="special">Special Offer TODAY</td></tr>');
        // REMOVING A ROW BASED ON ITS INDEX VALUE
        $("tr:eq(1)").remove();
        // ADDING A MESSAGE AFTER ROWS WITH SPECIFIC CONTENT
        $('tr:contains("Clothing")').after('<tr><td colspan="4" class="special">Special Offer TODAY</td></tr>');
        // REMOVING A ROW BASED ON ITS CONTENT
        $("tr").remove(":contains('Clothing')");
})
