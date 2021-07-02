$(".container__input").on("keyup", function (e) {
	if (e.keyCode == 13 && $(".container__input").val() !== "") {
		console.log($(".container__input").val());
		const task = $(
			"<div class='container__task container__task--not-completed'></div>"
		).text($(".container__input").val());

		const trash = $(
			'<i class="container__task__icon  fas fa-trash-alt"></i>'
		).on("click", function (e) {
			task.remove();
		});
		const check = $('<i class="container__task__icon fas fa-check"></i>').on(
			"click",
			function (e) {
				task.removeClass("container__task--not-completed");
				task.addClass("container__task--completed");
				$("#completed").append(task);
			}
		);

		task.append(trash, check);

		$("#not-completed").append(task);
		$(".container__input").val("");
	}
});

const a = 34;
