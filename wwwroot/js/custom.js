$(function() {
    "use strict";
	
	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	})
	
	// Bottom To Top Scroll Script
	$(window).on('scroll', function() {
		var height = $(window).scrollTop();
		if (height > 100) {
			$('#back2Top').fadeIn();
		} else {
			$('#back2Top').fadeOut();
		}
	});
	
	//Fixed on scroll
	$(window).on('scroll',function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= 150) {
			$(".advance-search").addClass("advn-fixed");
		} else {
			$(".advance-search").removeClass("advn-fixed");
		}
	});
	
	// Extra Service Show
	$("#extra-services").click(function(){
		$("#showing").slideToggle("slow");
	});
	
	// Dropdown
	$(".drp-select a").on('click', function(){

		$(this).parents(".dropdown").find('.selection').text($(this).text());
		$(this).parents(".dropdown").find('.selection').val($(this).text());

	});
	
	$("#back2Top").on('click', function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	
	// Filter Search Option
	$("#guest").click(function(){
		$("#g-showing").slideToggle("slow");
	});
	
	// Filter Search Option
	$("#hotel-guest").click(function(){
		$("#hotelg-showing").slideToggle("slow");
	});
	
	$("#worktrip").click(function(){
		$("#w-showing").slideToggle("slow");
	});
	
	$("#placetype").click(function(){
		$("#p-showing").slideToggle("slow");
	});
	
	$("#prices").click(function(){
		$("#pr-showing").slideToggle("slow");
	});
	
	$("#instantbook").click(function(){
		$("#in-showing").slideToggle("slow");
	});
	
	$("#tripduration").click(function(){
		$("#tr-showing").slideToggle("slow");
	});
	
	$("#activitylevel").click(function(){
		$("#sac-howing").slideToggle("slow");
	});

    $('nav.headnavbar').coreNavigation({
		menuPosition: "right", // left, right, center, bottom
		container: true, // true or false
		animated: true,
		animatedIn: 'flipInX',
		animatedOut: 'bounceOut',
		dropdownEvent: 'click', // Hover, Click & Accordion
		onOpenDropdown: function(){
			console.log('open');
		},
		onCloseDropdown: function(){
			console.log('close');
		},
		onOpenMegaMenu: function(){
			console.log('Open Megamenu');
		},
		onCloseMegaMenu: function(){
			console.log('Close Megamenu');
		}
	});
	
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$(".header").addClass("header-fixed");
		} else {
			$(".header").removeClass("header-fixed");
		}
	});
	
	// Range Slider
	$(".range-slider-ui").each(function () {
        var minRangeValue = $(this).attr('data-min');
        var maxRangeValue = $(this).attr('data-max');
        var minName = $(this).attr('data-min-name');
        var maxName = $(this).attr('data-max-name');
        var unit = $(this).attr('data-unit');

        $(this).append("" +
            "<span class='min-value'></span> " +
            "<span class='max-value'></span>" +
            "<input class='current-min' type='hidden' name='"+minName+"'>" +
            "<input class='current-max' type='hidden' name='"+maxName+"'>"
        );
        $(this).slider({
            range: true,
            min: minRangeValue,
            max: maxRangeValue,
            values: [minRangeValue, maxRangeValue],
            slide: function (event, ui) {
                event = event;
                var currentMin = parseInt(ui.values[0], 10);
                var currentMax = parseInt(ui.values[1], 10);
                $(this).children(".min-value").text( currentMin + " " + unit);
                $(this).children(".max-value").text(currentMax + " " + unit);
                $(this).children(".current-min").val(currentMin);
                $(this).children(".current-max").val(currentMax);
            }
        });

        var currentMin = parseInt($(this).slider("values", 0), 10);
        var currentMax = parseInt($(this).slider("values", 1), 10);
        $(this).children(".min-value").text( currentMin + " " + unit);
        $(this).children(".max-value").text(currentMax + " " + unit);
        $(this).children(".current-min").val(currentMin);
        $(this).children(".current-max").val(currentMax);
    });
	
	// Guest Count Js
	$('.children').prop('disabled', true);
		$(document).on('click','.cplus',function(){
			$('.children').val(parseInt($('.children').val()) + 1 );
		});
		$(document).on('click','.cminus',function(){
		$('.children').val(parseInt($('.children').val()) - 1 );
		if ($('.children').val() == 0) {
			$('.children').val(0);
		}
	});
	
	$('.guest').prop('disabled', true);
		$(document).on('click','.gplus',function(){
			$('.guest').val(parseInt($('.guest').val()) + 1 );
		});
		$(document).on('click','.gminus',function(){
		$('.guest').val(parseInt($('.guest').val()) - 1 );
		if ($('.guest').val() == 0) {
			$('.guest').val(0);
		}
	});
	
	// smart-textimonials
	$('#smart-textimonials').slick({
	  slidesToShow:1,
	  arrows: false,
	  autoplay:true,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			slidesToShow:1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			slidesToShow:1
		  }
		}
	  ]
	});

	// Single Sidebar Property Slide
	$('.sidebar-property-slide').slick({
	  slidesToShow:1,
	  arrows: true,
	  autoplay:true,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: true,
			slidesToShow:1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: true,
			slidesToShow:1
		  }
		}
	  ]
	});
	
	// Property Slide
	$('.testi-slide').slick({
	  slidesToShow:2,
	  arrows: false,
	  autoplay:true,
	  responsive: [
		{
		  breakpoint: 1023,
		  settings: {
			arrows: false,
			slidesToShow:1
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			slidesToShow:1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			slidesToShow:1
		  }
		}
	  ]
	});
	
	/*---- New List Slide ---*/
	$('.list-slides').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  infinite: true,
	  slidesToShow:3,
	  dots: true,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
		  }
		}
	  ]
	});
	
	$('#lists-slide').owlCarousel({
		loop:true,
		margin:10,
		dots:true,
		center: true,
		autoplay:true,
		autoplayTimeout:3000,
		stagePadding: 50,
		nav:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:2,
				nav:false,
				loop:false
			},
			1199:{
				items:3,
				nav:false,
				dots:true,
				loop:true
			}
		}
	});
	
	// Featured Slick Slider
	$('.featured-slick-slide').slick({
		centerMode: true,
		centerPadding: '80px',
		slidesToShow:2,
		responsive: [
		{
		breakpoint: 768,
		settings: {
		arrows:true,
		centerMode: true,
		centerPadding: '60px',
		slidesToShow:2
		}
		},
		{
		breakpoint: 480,
		settings: {
		arrows: false,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 1
		}
		}
		]
	});
	
	$('#categorie-slide').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:3000,
		dots:true,
		nav:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:3,
				nav:false,
				loop:false
			},
			1199:{
				items:5,
				nav:false,
				dots:true,
				loop:true
			}
		}
	});
	
	$('#ab-categorie-slide').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:3000,
		dots:true,
		nav:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:3,
				nav:false,
				loop:false
			},
			1199:{
				items:4,
				nav:false,
				dots:true,
				loop:true
			}
		}
	});
	
	// Select Category
	$('#list-category').select2({
		placeholder: "Choose Category",
		allowClear: true
	});
	
	// Event Select Category
	$('#event-list-category').select2({
		placeholder: "Choose Category",
		allowClear: true
	});
	
	// Select Rooms
	$('#rooms').select2({
		placeholder: "Choose Rooms",
		allowClear: true
	});
	
	// Select Cities
	$('#choose-city').select2({
		placeholder: "Select City",
		allowClear: true
	});
	
	// Home Slider
	$('.home-slider').slick({
	  centerMode:false,
	  slidesToShow:1,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows:true,
			slidesToShow:1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			slidesToShow:1
		  }
		}
	  ]
	});
	
	$('.click').slick({
	  slidesToShow:1,
	  slidesToScroll: 1,
	  autoplay:false,
	  autoplaySpeed: 2000,
	});
	
	// Add Pricing
	function newMenuItem() {
		var newElem = $('tr.pricing-list-item.pattern').first().clone();
		newElem.find('input').val('');
		newElem.appendTo('table#price-list-wrap');
	}
	if ($("table#price-list-wrap").is('*')) {
		$('.add-pr-item-btn').on('click', function(e) {
			e.preventDefault();
			newMenuItem();
		});
		$(document).on("click", "#price-list-wrap .delete", function(e) {
			e.preventDefault();
			$(this).parent().parent().remove();
		});
		$('.add-cat-btn').on('click', function(e) {
			e.preventDefault();
			var newElem = $('' +
				'<tr class="pricing-list-item pricing-submenu">' +
				'<td>' +
				'<div class="box-move"><i class="ti-move"></i></div>' +
				'<div class="box-input"><input type="text" class="frm-control" placeholder="Category Title" /></div>' +
				'<div class="box-close"><a class="delete" href="#"><i class="ti-close"></i></a></div>' +
				'</td>' +
				'</tr>');
			newElem.appendTo('table#price-list-wrap');
		});
		$('table#price-list-wrap tbody').sortable({
			forcePlaceholderSize: true,
			forceHelperSize: false,
			placeholder: 'sortableHelper',
			zIndex: 999990,
			opacity: 0.6,
			tolerance: "pointer",
			start: function(e, ui) {
				ui.placeholder.height(ui.helper.outerHeight());
			}
		});
	}
	var fieldUnit = $('.pr-price').children('input').attr('data-unit');
	$('.pr-price').children('input').before('<i class="data-unit">' + fieldUnit + '</i>');
	$("a.close").removeAttr("href").on('click', function() {
		function slideFade(elem) {
			var fadeOut = {
				opacity: 0,
				transition: 'opacity 0.5s'
			};
			elem.css(fadeOut).slideUp();
		}
		slideFade($(this).parent());
	});
	$(".price-add-wrapper").each(function() {
		var switcherSection = $(this);
		var switcherInput = $(this).find('.switch input');
		if (switcherInput.is(':checked')) {
			$(switcherSection).addClass('switch-on');
		}
		switcherInput.change(function() {
			if (this.checked === true) {
				$(switcherSection).addClass('switch-on');
			} else {
				$(switcherSection).removeClass('switch-on');
			}
		});
	});
	
	// Advance Single Slider
	$(function() { 
	// Card's slider
	  var $carousel = $('.slider-for');

	  $carousel
		.slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  adaptiveHeight: true,
		  asNavFor: '.slider-nav'
		})
		.magnificPopup({
		  type: 'image',
		  delegate: 'a:not(.slick-cloned)',
		  closeOnContentClick: false,
		  tLoading: 'Загрузка...',
		  mainClass: 'mfp-zoom-in mfp-img-mobile',
		  image: {
			verticalFit: true,
			tError: '<a href="%url%">Фото #%curr%</a> не загрузилось.'
		  },
		  gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>', // markup of counte
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		  },
		  zoom: {
			enabled: true,
			duration: 300
		  },
		  removalDelay: 300, //delay removal by X to allow out-animation
		  callbacks: {
			open: function() {
			  //overwrite default prev + next function. Add timeout for css3 crossfade animation
			  $.magnificPopup.instance.next = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
			  };
			  $.magnificPopup.instance.prev = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
			  };
			  var current = $carousel.slick('slickCurrentSlide');
			  $carousel.magnificPopup('goTo', current);
			},
			imageLoadComplete: function() {
			  var self = this;
			  setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			},
			beforeClose: function() {
			  $carousel.slick('slickGoTo', parseInt(this.index));
			}
		  }
		});
	  $('.slider-nav').slick({
		slidesToShow:6,
		slidesToScroll:1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: false,
		focusOnSelect: true
	  });
	  
	  
	});

	
	// MagnificPopup
	$('body').magnificPopup({
		type: 'image',
		delegate: 'a.mfp-gallery',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: false,
		preloader: true,
		removalDelay: 0,
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true
		}
	});
	
});