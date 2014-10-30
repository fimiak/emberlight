/**
 * Created by Greve on 10/14/14.
 */
$(document).ready(function($) {
	// init controller
	controller = new ScrollMagic();
});

function playme() {
document.getElementById("youtube").src = '//www.youtube.com/embed/rUS1Tj38Uv0';
}

$( ".video" ).click(function() {
  $( "div:hidden" ).show( "medium" );
});

$(document).ready(function($) {
		// build scene
	var scene = new ScrollScene({triggerElement: "#trigger1", duration: 10})
						.setPin("#pin1")
						.addTo(controller);
});