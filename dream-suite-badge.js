function partner_badge() {
	function changePic2() {
		document.getElementById("LabatePartnerBadge").src = "dream-suite-collective.webp";
	}

	function changePic1() {
		document.getElementById("LabatePartnerBadge").src = "dream-suite-badge-w.webp";
	}
	//Create the element using the createElement method.
	var partner_badge_container = document.createElement("div");
	//Set its unique ID.
	partner_badge_container.id = 'dream-suite-badge';
	//Add your content to the DIV
	partner_badge_container.innerHTML = '<div class="partner-badge-holder"><div id="cf"><a href="https://labate.vip/dream-suite" target="_blank" title="Learn more about Dream Suite Collective!"><img class="bottom" src="dream-suite-collective-b.webp"><img class="top" src="dream-suite-collective.webp"></a></div></div>';
	//Finally, append the element to the HTML body
	document.body.appendChild(partner_badge_container);
}

partner_badge();
