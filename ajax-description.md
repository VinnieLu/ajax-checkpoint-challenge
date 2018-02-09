# What is AJAX?
AJAX is a way to change some data on your page without reloading the whole page. It usually functions on an event like a click or a form submission, and it sends specified information to the server during the AJAX call. Then when the call is done and the response recieved, it takes a specification for something to replace in the DOM, and you can replace that one thing instead of the whole page.


# How to Make an AJAX Call
Here is a typical ajax call:

$(document).ready(function() {
	$("SOME_DOM_ELEMENT").on("click", function(event) {
		event.preventDefault()
		SOME_FORM_OR_BUTTON = $(this)
		$.ajax({
			url: SOME_FORM_OR_BUTTON.attr("SOME_ACTION")
			type: SOME_FORM_OR_BUTTON.attr("SOME_METHOD")
			data: SOME_FORM_OR_BUTTON.serialize()
		})
		.done(function(response) {
			$("SOME_DOM_ELEMENT").text("SOME_REPLACEMENT_TEXT")
		})
	})
})
