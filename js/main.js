$(document).ready(function()
{
	$('.messDisplay').click(function(e)
	{
		e.preventDefault();

		if($('.welcome').is(':visible'))
		{
			$('.welcome').slideToggle('slow');
			$('.image1').attr('src', 'images/down-arrow.png');
		}
		else
		{
			$('.projectBox').hide();
			$('.image2').attr('src', 'images/down-arrow.png');
			$('.messForm').hide();
			$('.image3').attr('src', 'images/down-arrow.png');
			$('.welcome').slideToggle('slow');
			$('.image1').attr('src', 'images/up-arrow.png');
		}	
	});

	$('.portfolio').click(function(e)
	{
		e.preventDefault();

		if($('.projectBox').is(':visible'))
		{
			$('.projectBox').slideToggle('slow');
			$('.image2').attr('src', 'images/down-arrow.png');
		}
		else
		{
			$('.welcome').hide();
			$('.image1').attr('src', 'images/down-arrow.png');
			$('.messForm').hide();
			$('.image3').attr('src', 'images/down-arrow.png');
			$('.projectBox').slideToggle('slow');
			$('.image2').attr('src', 'images/up-arrow.png');
		}	
	});

	$('.contact').click(function(e)
	{
		e.preventDefault();

		if($('.messForm').is(':visible'))
		{
			$('.messForm').slideToggle('slow');
			$('.image3').attr('src', 'images/down-arrow.png');
		}
		else
		{
			$('.welcome').hide();
			$('.image1').attr('src', 'images/down-arrow.png');
			$('.projectBox').hide();
			$('.image2').attr('src', 'images/down-arrow.png');
			$('.messForm').slideToggle('slow');
			$('.image3').attr('src', 'images/up-arrow.png');
		}	
	});

	$('.link1').hover(function(){
		if($('.welcome').is(':visible'))
		{
			$('.image1').attr('src', 'images/up-arrowA.png');
		}
		else
		{
			$('.image1').attr('src', 'images/down-arrowA.png');
		}
	}, function(){
		if($('.welcome').is(':visible'))
		{
			$('.image1').attr('src', 'images/up-arrow.png');
		}
		else
		{
			$('.image1').attr('src', 'images/down-arrow.png');
		}
	})
	$('.link2').hover(function(){
		if($('.projectBox').is(':visible'))
		{
			$('.image2').attr('src', 'images/up-arrowA.png');
		}
		else
		{
			$('.image2').attr('src', 'images/down-arrowA.png');
		}
	}, function(){
		if($('.projectBox').is(':visible'))
		{
			$('.image2').attr('src', 'images/up-arrow.png');
		}
		else
		{
			$('.image2').attr('src', 'images/down-arrow.png');
		}
	})
	$('.link3').hover(function(){
		if($('.messForm').is(':visible'))
		{
			$('.image3').attr('src', 'images/up-arrowA.png');
		}
		else
		{
			$('.image3').attr('src', 'images/down-arrowA.png');
		}
	}, function(){
		if($('.messForm').is(':visible'))
		{
			$('.image3').attr('src', 'images/up-arrow.png');
		}
		else
		{
			$('.image3').attr('src', 'images/down-arrow.png');
		}
	})

	$('.closeIcon').hover(function(){
		$('.closeIcon').attr('src', 'images/closeA.png');
	}, function(){
		$('.closeIcon').attr('src', 'images/close.png');
	})

	$('.closeIcon').click(function()
	{
		$('.welcome').slideToggle('slow');
		$('.image1').attr('src', 'images/down-arrow.png');
	});

	$('.projectClose').hover(function(){
		$('.projectClose').attr('src', 'images/closeB.png');
	}, function(){
		$('.projectClose').attr('src', 'images/closeA.png');
	})

	$('.projectClose').click(function()
	{
		$('.projectBox').slideToggle('slow');
		$('.image2').attr('src', 'images/down-arrow.png');
	});

	$('.messCloseIcon').hover(function(){
		$('.messCloseIcon').attr('src', 'images/closeB.png');
	}, function(){
		$('.messCloseIcon').attr('src', 'images/closeA.png');
	})

	$('.messCloseIcon').click(function()
	{
		$('.messForm').slideToggle('slow');
		$('.image3').attr('src', 'images/down-arrow.png');
	});

	$('.homeButton').hover(function(){
		$(this).css('backgroundColor', '#5582a5');
		$('homeButton a').css('color', '#fff');
	}, function(){
		$(this).css('backgroundColor', '#295679');
		$('homeButton a').css('color', '#efefef');
	})

	$('.pagination li').hover(function(){
		$(this).css('backgroundColor', '#5582a5');
		$('pagination a').css('color', '#fff');
	}, function(){
		$(this).css('backgroundColor', '#295679');
		$('pagination a').css('color', '#efefef');
	})

	$('.image').hover(function(){
		$(this).fadeTo('slow', .5);
	}, function(){
		$(this).fadeTo('slow', 1);
	})
});