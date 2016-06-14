$(document).ready(function (){
	

	$('#nav a').click(function(){
		mixpanel.track("nav clicks")
	})

	$('#btnOne').click(function(){
		mixpanel.track("clicked button one")
	})

	$('#btnTwo').click(function(){
		mixpanel.track("clicked button two")
	})

	// $('')

})