$(document).ready(function(){
	mixpanel.identify(Math.floor(Math.random() * 100))
	mixpanel.track("landed on page")
	mixpanel.people.set({
		$created: Date(),
		dank: true

	})

	$('#nav a').click(function(){
		mixpanel.track("nav clicks")
	})

	$('#btnOne').click(function(){
		mixpanel.track("clicked button one")
	})

	$('#btnTwo').click(function(){
		mixpanel.track_link("clicked button two")
	})

	$('#product-carousel').mouseover(function(){
		mixpanel.track_link("moused over carousel")
	})

	$('#mixpanelLogo').click(function(){
		mixpanel.track_link("clicked Mixpanel link")
	})
})