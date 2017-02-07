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
		if($(this).find('i').hasClass('fa-angle-down')){
			$(this).find('i').removeClass('fa-angle-down');
			$(this).find('i').addClass('fa-angle-up');
		} else {
			$(this).find('i').removeClass('fa-angle-up');
			$(this).find('i').addClass('fa-angle-down');
		};
        $(this).addClass('active');
        $('#accordion div.accordion-panel div.panel-content').slideUp();
        if (!$(this).next().is(':visible')) {
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
        }
    });


});
