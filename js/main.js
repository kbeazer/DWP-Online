$(document).ready(function()
{
	console.log("I'm working!!!")
	
	$('.displayBox a').click(function(e)
	{
		e.preventDefault();
		$('.phide').slideToggle('slow');
	});
});