document.addEventListener("DOMContentLoaded", function() {
	
	


	(function($) {
		$(function() {
	  
		  $('ul.js-tab__list').on('click', 'li:not(.tab__link--active)', function() {
			$(this)
			  .addClass('tab__link--active').siblings().removeClass('tab__link--active')
			  .closest('div.js-tab').find('div.tab__item').removeClass('tab__item--active')
			  .eq($(this).index()).addClass('tab__item--active');
          });
          
          $('ul.js-subtab__list').on('click', 'li:not(.subtab__link--active)', function() {
			$(this)
			  .addClass('subtab__link--active').siblings().removeClass('subtab__link--active')
			  .closest('div.js-subtab').find('div.subtab__item').removeClass('subtab__item--active')
			  .eq($(this).index()).addClass('subtab__item--active');
		  });

		});
	  })($);



	$('.faq__head').on("click", function(){
        if (!$(this).next('.faq__body').hasClass('in')) {
			$(this).next('.faq__body').find('.faq__answer').slideDown();
			$(this).next('.faq__body ').addClass('in');
            $(this).addClass('in');
        }
        else {
			$(this).next('.faq__body').find('.faq__answer').slideUp();
			$(this).next('.faq__body ').removeClass('in');
            $(this).removeClass('in');
        }
        return false;
    });
    
    
	
	



	var galleryThumbs = new Swiper('.faq__thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.faq__gallery', {
		spaceBetween: 10,
		autoHeight: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs
	}
	});

	  
	

});
