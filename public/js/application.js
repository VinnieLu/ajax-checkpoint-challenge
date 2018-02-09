$(document).ready(function () {
	$(".flex-column .flex").on("click", ".dark", function(event) {
		event.preventDefault()
		$.ajax({
			url: "/_new_horse",
			type: "POST",
			data: $(this).serialize()
		})
		.done(function(response){
			$(".flex .flex-column").after(response)
			$(".flex .flex-column").hide()
		})
	})

	$("#new-horse-form").on("submit", function(event) {
		event.preventDefault()
		$.ajax({
			url: "/horses",
			type: "POST",
			data: $(this).serialize()
		})
		.done(function(response) {
			$(".list li").last().append(response)
			// console.log($(this)[0])
			// console.log($(this)[1])
			// console.log($(this)[2])
			// $(this)[0].reset()
			// $(this)[1].reset()
			// $(this)[2].reset()
		})
	})
	$(".list").on("click", ".fancy-text", function(event) {
		event.preventDefault()
		button = $(this)
		$.ajax({
			url: button.attr("href"),
			type: "GET",
			data: button.serialize()
		})
		.done(function(response) {
			if (button.siblings("ul").length === 0) {
				button.after(response)
			}
		})
	})
});
