$(document).ready(function()
{
	console.log("I'm working!!!")
	
	$('.image').click(function(e)
	{
		e.preventDefault;
		$('phide').slideToggle();
	});
});