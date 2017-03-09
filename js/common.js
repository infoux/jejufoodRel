$(document).ready(function() {
    $('.mainMenu').click(function(){
        $('aside#all-menu').css('display', 'block');
        $('aside#all-menu').css('height', $(document).height());
        $('aside#all-menu nav').css('height', $(document).height());


    });
    $('aside#all-menu .close').click(function(){
        $('aside#all-menu').css('display', 'none');
        $('body').css({overflow: ''});
    });

	$('p.btn-area a').click(function(){
		$('section#createPopup').show();
	});
	$('#createPopup div.popContainer div.btn-area a.default').click(function(){
		$('section#createPopup').hide();
	});
    $('#accordion div.accordion-panel div.panel-head').click(function () {
        $('#accordion div.panel-head').removeClass('active');
        $(this).addClass('active');
        $('#accordion div.accordion-panel div.panel-content').slideUp();
        if (!$(this).next().is(':visible')) {
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
			$('#accordion div.panel-head').removeClass('active');
        }
    });

});
