$(document).ready(function()
{
	var $arrow = 'down';

	$('.box1').click(function(e)
	{
		e.preventDefault();
		$('.phide').slideToggle('slow');
	});

	$('.box2').click(function(e)
	{
		e.preventDefault();
		$('.phide2').slideToggle('slow');
	});

	$('.box3').click(function(e)
	{
		e.preventDefault();
		$('.phide3').slideToggle('slow');
	});

	$('.box4').click(function(e)
	{
		e.preventDefault();
		$('.phide4').slideToggle('slow');
	});

	$('.box5').click(function(e)
	{
		e.preventDefault();
		$('.phide5').slideToggle('slow');
	});

	$('.box6').click(function(e)
	{
		e.preventDefault();
		$('.phide6').slideToggle('slow');
	});

	$('.box7').click(function(e)
	{
		e.preventDefault();
		$('.phide7').slideToggle('slow');
	});

	$('.box8').click(function(e)
	{
		e.preventDefault();
		$('.phide8').slideToggle('slow');
	});

	$('.box9').click(function(e)
	{
		e.preventDefault();
		$('.phide9').slideToggle('slow');
	});

	$('.box10').click(function(e)
	{
		e.preventDefault();
		$('.phide10').slideToggle('slow');
	});

	$('.messDisplay').click(function(e)
	{
		e.preventDefault();

		if($arrow == 'up')
		{
			$('.image1').attr('src', 'images/down-arrow.png');
			$('.welcome').slideToggle('slow');
			$arrow = 'down';
		}
		else
		{
			$('.welcome').slideToggle('slow');
			$('.image1').attr('src', 'images/up-arrow.png');
			$arrow = 'up';
		}	
	});

	$('.contact').click(function(e)
	{
		e.preventDefault();

		if($arrow == 'up')
		{
			$('.image3').attr('src', 'images/down-arrow.png');
			$('.messForm').slideToggle('slow');
			$arrow = 'down';
		}
		else
		{
			$('.messForm').slideToggle('slow');
			$('.image3').attr('src', 'images/up-arrow.png');
			$arrow = 'up';
		}	
	});

	$('.link1').hover(function(){
		if($arrow == 'up')
		{
			$('.image1').attr('src', 'images/up-arrowA.png');
		}
		else
		{
			$('.image1').attr('src', 'images/down-arrowA.png');
		}
	}, function(){
		if($arrow == 'up')
		{
			$('.image1').attr('src', 'images/up-arrow.png');
		}
		else
		{
			$('.image1').attr('src', 'images/down-arrow.png');
		}
	})
	$('.link2').hover(function(){
		$('.image2').attr('src', 'images/down-arrowA.png');
	}, function(){
		$('.image2').attr('src', 'images/down-arrow.png');
	})
	$('.link3').hover(function(){
		if($arrow == 'up')
		{
			$('.image3').attr('src', 'images/up-arrowA.png');
		}
		else
		{
			$('.image3').attr('src', 'images/down-arrowA.png');
		}
	}, function(){
		if($arrow == 'up')
		{
			$('.image3').attr('src', 'images/up-arrow.png');
		}
		else
		{
			$('.image3').attr('src', 'images/down-arrow.png');
		}
	})
});