
$('[data-menuid]').on("click", function() {
	$(this).toggleClass("active");
})

// Mobile Nav

	$('.hamburger').on('click', function() {
		$(this).toggleClass('active');
		$(this).parent().toggleClass('active');
		if($(this).hasClass('active')){
			$(this).find('span').html('Close');
		}else{
			$(this).find('span').html('Menu');
		}
		$('[data-sv-mainnav]').toggleClass('active');
	});


	$('[data-menu-toggle-parent]').on('click',function(){
		$(this).toggleClass('active');
		var icon = $(this).find('i.fa.fa-plus');
		if(icon.hasClass('fa-plus')){
			icon.removeClass('fa-plus').addClass('fa-minus');
		}
		$(this).parent().find('.mobile-children').slideToggle();
		$(this).parent().find('.parent-arrow').toggleClass('open');
		$(this).parent().toggleClass('selected');
		if($(this).parent().find('.parent-arrow').hasClass("open") || $(this).parent().siblings().find('.parent-arrow').hasClass("open")){
			add_scroll_to_mobile();
		}else{
			remove_scroll();
		}
	});

	$(".mobile-dd ul.mobile-children li.item-child.has-submenu div.arrow").on("click", function(){
		$(this).next().toggleClass("display");
	});

	$('[data-menu-toggle-item]').on('click',function(){
		$(this).next().slideToggle();
		$(this).toggleClass('open');
		$(this).prev('div').toggleClass('selected');
	});

	function add_scroll_to_mobile(){
		var $nav = $('[data-sv-mainnav]');
		var height = $( window ).height();

		$nav.height(height - 67);  // minus height of nav bar
		$nav.addClass('add-scroll');
		$nav.removeClass('no-scroll');
		$('body').addClass('nav-open');
	}

	function remove_scroll(){
		var $nav = $('[data-sv-mainnav]');

		$nav.removeClass('add-scroll');
		$nav.addClass('no-scroll');
		$('body').removeClass('nav-open');
	}
