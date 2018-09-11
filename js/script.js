"use strict";window,$("#main-slider").slick({prevArrow:'<div class="slick-prev"><svg class="slick-arrow-icon"><use xlink:href="img/icons.svg#icon-arrow-prev"></svg></div>',nextArrow:'<div class="slick-next"><svg class="slick-arrow-icon"><use xlink:href="img/icons.svg#icon-arrow-next"></svg></div>'}),$("#product-slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:"#product-slider-nav"}),$("#product-slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:"#product-slider",focusOnSelect:!0,vertical:!0,verticalSwiping:!0,prevArrow:'<div class="slick-prev"><svg class="slick-arrow-icon"><use xlink:href="img/icons.svg#icon-arrow-prev"></svg></div>',nextArrow:'<div class="slick-next"><svg class="slick-arrow-icon"><use xlink:href="img/icons.svg#icon-arrow-next"></svg></div>',responsive:[{breakpoint:900,settings:{vertical:!1,verticalSwiping:!1}}]}),window,$(".tabs__link").on("click",function(s){s.preventDefault();var i=$(this).closest(".tabs")[0],e=$(i).find(".tabs__content"),r=$(i).find(".tabs__link");$(e).removeClass("active"),$(e.filter(this.hash)[0]).addClass("active"),$(r).removeClass("active"),$(r.filter(this.hash)[0]).addClass("active"),$(this).addClass("active")}),window,$(".b-filter__link").on("click",function(s){s.preventDefault(),$(s.target).closest(".b-filter__item").toggleClass("active")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCIkIiwic2xpY2siLCJwcmV2QXJyb3ciLCJyb290Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJhc05hdkZvciIsImZvY3VzT25TZWxlY3QiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU3dpcGluZyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhYnMiLCJ0aGlzIiwiY2xvc2VzdCIsImNvbnRlbnQiLCJmaW5kIiwiY2FwdGlvbiIsInJlbW92ZUNsYXNzIiwiZmlsdGVyIiwiaGFzaCIsImFkZENsYXNzIiwidGFyZ2V0IiwidG9nZ2xlQ2xhc3MiXSwibWFwcGluZ3MiOiJhQWlDR0EsT0FoQ0ZDLEVBQUUsZ0JBQWdCQyxPQURsQkMsVUFBU0MscUhBQ1RILFVBQUUsdUhBQXNCQSxFQUF4QixtQkFBQUMsT0FNQ0csYUFBYyxFQURmSixlQUFFLEVBQ0RJLFFBQUFBLEVBQ0FDLE1BQUFBLEVBQ0FDLFNBQVEsd0JBSGtCTixFQUEzQix1QkFBQUMsT0FTQ0csYUFBYyxFQURmSixlQUFFLEVBQ0RJLFNBQUFBLGtCQUNBQyxlQUFBQSxFQUNBRSxVQUFVLEVBQ1ZDLGlCQUFlLEVBQ2ZDLFVBQVUscUhBQ1ZDLFVBQUFBLHFIQUNBUixhQUVBUyxXQUNDLElBQ0NDLFVBQ0FDLFVBQVUsRUFDVEosaUJBRFMsT0E0QlhWLE9BbEJGQyxFQUFFLGVBQWVjLEdBQUcsUUFBUyxTQUFBQyxHQUM1QkEsRUFBRUMsaUJBRUYsSUFBSUMsRUFBT2pCLEVBQUVrQixNQUFNQyxRQUFRLFNBQVMsR0FBcENDLEVBQ0FBLEVBQUFBLEdBQVlILEtBQU1JLGtCQURsQkMsRUFFQUEsRUFBQUEsR0FBWUwsS0FBTUksZUFHbEJyQixFQUFFb0IsR0FBU0csWUFBWSxVQUN2QnZCLEVBQUVvQixFQUFRSSxPQUFPTixLQUFLTyxNQUFNLElBQUlDLFNBQVMsVUFHekMxQixFQUFFc0IsR0FBU0MsWUFBWSxVQUN2QnZCLEVBQUVzQixFQUFRRSxPQUFPTixLQUFLTyxNQUFNLElBQUlDLFNBQVMsVUFDekMxQixFQUFFa0IsTUFBTVEsU0FBUyxZQVdoQjNCLE9BSkZDLEVBQUUsbUJBQW1CYyxHQUFHLFFBQVMsU0FBQUMsR0FDaENBLEVBQUVDLGlCQUNGaEIsRUFBRWUsRUFBRVksUUFBUVIsUUFBUSxtQkFBbUJTLFlBQVkiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKHJvb3QpIHtcblx0JCgnI21haW4tc2xpZGVyJykuc2xpY2soe1xuXHRcdHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJzbGljay1wcmV2XCI+PHN2ZyBjbGFzcz1cInNsaWNrLWFycm93LWljb25cIj48dXNlIHhsaW5rOmhyZWY9XCJpbWcvaWNvbnMuc3ZnI2ljb24tYXJyb3ctcHJldlwiPjwvc3ZnPjwvZGl2PicsXG5cdFx0bmV4dEFycm93OiAnPGRpdiBjbGFzcz1cInNsaWNrLW5leHRcIj48c3ZnIGNsYXNzPVwic2xpY2stYXJyb3ctaWNvblwiPjx1c2UgeGxpbms6aHJlZj1cImltZy9pY29ucy5zdmcjaWNvbi1hcnJvdy1uZXh0XCI+PC9zdmc+PC9kaXY+Jyxcblx0fSk7XG5cblx0JCgnI3Byb2R1Y3Qtc2xpZGVyJykuc2xpY2soe1xuXHRcdHNsaWRlc1RvU2hvdzogMSxcblx0XHRzbGlkZXNUb1Njcm9sbDogMSxcblx0XHRhcnJvd3M6IGZhbHNlLFxuXHRcdGZhZGU6IHRydWUsXG5cdFx0YXNOYXZGb3I6ICcjcHJvZHVjdC1zbGlkZXItbmF2J1xuXHR9KTtcblxuXHQkKCcjcHJvZHVjdC1zbGlkZXItbmF2Jykuc2xpY2soe1xuXHRcdHNsaWRlc1RvU2hvdzogMyxcblx0XHRzbGlkZXNUb1Njcm9sbDogMSxcblx0XHRhc05hdkZvcjogJyNwcm9kdWN0LXNsaWRlcicsXG5cdFx0Zm9jdXNPblNlbGVjdDogdHJ1ZSxcblx0XHR2ZXJ0aWNhbDogdHJ1ZSxcblx0XHR2ZXJ0aWNhbFN3aXBpbmc6IHRydWUsXG5cdFx0cHJldkFycm93OiAnPGRpdiBjbGFzcz1cInNsaWNrLXByZXZcIj48c3ZnIGNsYXNzPVwic2xpY2stYXJyb3ctaWNvblwiPjx1c2UgeGxpbms6aHJlZj1cImltZy9pY29ucy5zdmcjaWNvbi1hcnJvdy1wcmV2XCI+PC9zdmc+PC9kaXY+Jyxcblx0XHRuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwic2xpY2stbmV4dFwiPjxzdmcgY2xhc3M9XCJzbGljay1hcnJvdy1pY29uXCI+PHVzZSB4bGluazpocmVmPVwiaW1nL2ljb25zLnN2ZyNpY29uLWFycm93LW5leHRcIj48L3N2Zz48L2Rpdj4nLFxuXHRcdHJlc3BvbnNpdmU6IFtcblx0XHRcdHtcblx0XHRcdFx0YnJlYWtwb2ludDogOTAwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHZlcnRpY2FsOiBmYWxzZSxcblx0XHRcdFx0XHR2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH0pO1xufSkod2luZG93KTtcblxuKGZ1bmN0aW9uKHJvb3QpIHtcblx0JCgnLnRhYnNfX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dmFyIHRhYnMgPSAkKHRoaXMpLmNsb3Nlc3QoXCIudGFic1wiKVswXSxcblx0XHRjb250ZW50ID0gJCh0YWJzKS5maW5kKFwiLnRhYnNfX2NvbnRlbnRcIiksXG5cdFx0Y2FwdGlvbiA9ICQodGFicykuZmluZChcIi50YWJzX19saW5rXCIpO1xuXG5cdFx0Ly8g0L/QtdGA0LXQutC70Y7Rh9C40YLRjCDQstC60LvQsNC00LrRg1xuXHRcdCQoY29udGVudCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoY29udGVudC5maWx0ZXIodGhpcy5oYXNoKVswXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0Ly8g0L/QtdGA0LXQutC70Y7Rh9C40YLRjCDQvdCw0YTQuNCz0LDRhtC40Y5cblx0XHQkKGNhcHRpb24pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQkKGNhcHRpb24uZmlsdGVyKHRoaXMuaGFzaClbMF0pLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdHJldHVybjtcblx0fSk7XG59KSh3aW5kb3cpO1xuXG4oZnVuY3Rpb24ocm9vdCkge1xuXHQkKFwiLmItZmlsdGVyX19saW5rXCIpLm9uKCdjbGljaycsIGUgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHQkKGUudGFyZ2V0KS5jbG9zZXN0KCcuYi1maWx0ZXJfX2l0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cdH0pO1xufSkod2luZG93KTsiXX0=
function setImgCover(e) {
	e.each(function() {
		$(this).parent().css({
			'background-image': 'url("'+$(this).attr('src')+'")',
			'background-repeat': 'no-repeat',
			'background-position': 'center center',
			'background-size': 'cover'
		});
	});
}
$(function() {
	setImgCover($('.img-cover'));
	var isMobile = false;
	var justSwitched = false;
	function detectDevice() {
		var temp = isMobile;
		if ( Modernizr.mq('(max-width:900px)') ) {
			isMobile = true;
		} else {
			isMobile = false;
		}
		if ( temp == isMobile ) {
			justSwitched = false;
		} else {
			justSwitched = true;
		}
	}
	
	$('input[type="radio"]').uniform();
	function setUniform() {
		$('.checker input[type="checkbox"], .radio input[type="radio"]').each(function() {
			var t = $(this).parents('.checker, .radio');
			if ( $(this).is(':checked') ) {
				t.addClass('is-active');
			} else {
				t.removeClass('is-active');
			}
		});
	}
	setUniform();
	$('.checker input[type="checkbox"], .radio input[type="radio"]').on('change', function() {
		setUniform();
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	$('.compare--switch').on('click', function() {
		$(this).toggleClass('is-active');
	});
	function setCompareWidth() {
		var container = $('.compare__container');
		var table = $('.compare__table');
		var totalWidth = container.outerWidth();	
		if ( Modernizr.mq('(min-width:1230px)') ) {
			var size = 5;
		} else if ( Modernizr.mq('(max-width:1229px)') && Modernizr.mq('(min-width:900px)') ) {
			var size = 4;
		} else if ( Modernizr.mq('(max-width:899px)') && Modernizr.mq('(min-width:600px)') ) {
			var size = 3;
		} else if ( Modernizr.mq('(max-width:599px)') ) {
			var size = 2;
		}
		var colWidth = totalWidth/size;
		var colSize = container.find('thead td').length;
		$('.compare__table thead td').outerWidth(colWidth);
		table.width(colWidth*colSize)
	}
	var compareSteps = 0;
	$('.button-next').on('click', function() {
		var table = $('.compare__table');
		var colWidth = table.find('thead td').outerWidth();		
		if ( Modernizr.mq('(min-width:1230px)') ) {
			var size = 5;
		} else if ( Modernizr.mq('(max-width:1229px)') && Modernizr.mq('(min-width:900px)') ) {
			var size = 4;
		} else if ( Modernizr.mq('(max-width:899px)') && Modernizr.mq('(min-width:600px)') ) {
			var size = 3;
		} else if ( Modernizr.mq('(max-width:599px)') ) {
			var size = 2;
		}
		if ( compareSteps < table.find('thead td').length-size ) {
			compareSteps++;
			table.css({
				'-webkit-transform': '-webkit-translateX(-'+colWidth*compareSteps+'px)',
				'transform': 'translateX(-'+colWidth*compareSteps+'px)'
			});
			table.find('th span, td.is-title span').css({
				'-webkit-transform': '-webkit-translateX('+colWidth*compareSteps+'px)',
				'transform': 'translateX('+colWidth*compareSteps+'px)'
			});
		}
	});
	$('.button-prev').on('click', function() {
		var table = $('.compare__table');
		var colWidth = table.find('thead td').outerWidth();
		if ( compareSteps > 0 ) {
			compareSteps--;
			table.css({
				'-webkit-transform': '-webkit-translateX(-'+colWidth*compareSteps+'px)',
				'transform': 'translateX(-'+colWidth*compareSteps+'px)'
			});
			table.find('th span, td.is-title span').css({
				'-webkit-transform': '-webkit-translateX('+colWidth*compareSteps+'px)',
				'transform': 'translateX('+colWidth*compareSteps+'px)'
			});
		}
	});
	setCompareWidth();
	function startApp() {
		detectDevice();
		if ( justSwitched ) {
			if ( isMobile ) {
				if ( $('[data-tabs-rebuild]').length ) {
					$('[data-tabs-rebuild]').each(function() {
						var t = $(this);
						t.find('[data-tab]').each(function() {
							var e = t.find('a[data-nav="'+$(this).attr('data-tab')+'"]');
							$(this).detach().insertAfter(e);
						});
					});
				}
				if ( $('.table.orders').length ) {
					$('.table.orders tbody .orders-header td').each(function() {
						var t = $(this).parents('.table.orders').find('thead th').eq($(this).index()).text();
						$(this).prepend('<span class="table-order--title">'+t+'</span>');
					});
				}
			} else {
				if ( $('[data-tabs-rebuild]').length ) {
					$('[data-tabs-rebuild]').each(function() {
						var t = $(this);
						t.find('[data-tab]').each(function() {
							var e = t.find('[data-tabs-content]');
							$(this).detach().appendTo(e);
						});
					});
				}
				if ( $('.table-order--title').length ) {
					$('.table-order--title').remove();
				}
				if ( $('.menu-drop').hasClass('is-opened') ) {
					menuClose();
				}
			}
		}
		if ( $('.product-page__tabs').length ) {
			if ( Modernizr.mq('(max-width:600px)') ) {
				$('.info-tabs__content').each(function() {
					var t = $(this).attr('id');
					$(this).detach().insertAfter($('.info-tabs__link[href="#'+t+'"]'));
				});
			} else {
				$('.info-tabs__content').each(function() {
					$(this).detach().appendTo($('.info-tabs__container'));
				});
			}
		}
		setCompareWidth();
	}
	$('.compare__container').on('scroll', function() {
		if ( Modernizr.mq('(max-width:900px)') ) {
			var l = $(this).scrollLeft();
			$(this).find('.compare__table th span, .compare__table td.is-title span').css({
				'-webkit-transform': '-webkit-translateX('+l+'px)',
				'transform': 'translateX('+l+'px)'
			});
		}
	});
	startApp();
	var lastWidth = $(window).width();
	$(window).on('resize', _.debounce(function() {
		if ( $(window).width() != lastWidth ) {
			if ( $('.compare__table').length ) {
				compareSteps = 0;
				$('.compare__table').each(function() {
					var table = $(this);
					table.css({
						'-webkit-transform': '-webkit-translateX(0)',
						'transform': 'translateX(0'
					});
					table.find('th span, td.is-title span').css({
						'-webkit-transform': '-webkit-translateX(0)',
						'transform': 'translateX(0)'
					});
				});
				$('.compare__container').scrollLeft(0);
			}
			startApp();
			lastWidth = $(window).width();
		}
	}, 100));
	$('.menu-drop--title').on('click', function(e) {
		if ( !$(this).hasClass('is-opened') ) {
			e.preventDefault();
			$(this).addClass('is-opened');
		}
	});
	function menuOpen() {
		$('.fade-bg, .menu-drop').addClass('is-opened');
		$('body').addClass('is-locked');
	}
	function menuClose() {
		$('.fade-bg, .menu-drop').removeClass('is-opened');
		$('body').removeClass('is-locked');
	}
	$('.header__hamburger').on('click', function() {
		menuOpen();
	});
	$('.menu-drop--close, .fade-bg').on('click', function() {
		menuClose();
	});
	$('[data-tabs-container] [data-nav]').on('click', function(e) {
		e.preventDefault();
		if ( !$(this).hasClass('is-active') ) {
			var id = $(this).attr('data-nav');
			var group = $(this).parents('[data-tabs-container]');
			var links = group.find('[data-nav]');
			var tabs = group.find('[data-tab]');
			links.removeClass('is-active').filter('[data-nav="'+id+'"]').addClass('is-active');
			tabs.removeClass('is-opened').filter('[data-tab="'+id+'"]').addClass('is-opened');
		}
	});
	$('[data-user-login]').on('click', function() {
		$('.modal-user [data-nav="1"]').trigger('click');
	});
	$('[data-user-autorization]').on('click', function() {
		$('.modal-user [data-nav="2"]').trigger('click');
	});
	$('[data-open]').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('is-active');
		var t = $('[data-target="'+$(this).attr('data-open')+'"]');
		t.siblings('[data-target]').removeClass('is-opened is-active');
		$('.fade-bg').addClass('is-opened');
		t.addClass('is-opened');
		var h = $(window).scrollTop()+($(window).height()-t.outerHeight())/2;
		if ( !isMobile ) {
			var diff = 30;
		} else {
			var diff = 15;
		}
		if ( h < $(window).scrollTop()+(diff*2) ) {
			h = $(window).scrollTop()+diff;
		}
		t.css({
			'top': h+'px'
		}).addClass('is-active').siblings('[data-target]').removeClass('is-active');
	});
	$('[data-target] .modal--close, .fade-bg').on('click', function(e) {
		e.preventDefault();
		$('[data-target], .fade-bg').removeClass('is-opened');
		$('[data-open]').removeClass('is-active');
	});
	$('.orders__num').on('click', function(e) {
		e.preventDefault();
		var header = $(this).parents('.orders-header');
		var content = header.next('.orders-content');
		if ( content.length ) {
			if ( !header.hasClass('is-active') ) {
				header.addClass('is-active');
				content.addClass('is-opened');
			} else {
				header.removeClass('is-active');
				content.removeClass('is-opened');
			}
		}
	});
});