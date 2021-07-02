$(document).ready(function () {
	$(".container button").on("click", function (e) {
		const emailValue = $(
			".container__input.container__input--email input"
		).val();
		const passwordValue = $(
			".container__input.container__input--password input"
		).val();

		$(".container__input.container__input--email i").css(
			"visibility",
			"hidden"
		);
		$(".container__warning").css("display", "none");

		if (!isEmail(emailValue)) {
			$(".container__input.container__input--email i").css(
				"visibility",
				"visible"
			);
			$(".container__warning").css("display", "block");
		}

		function isEmail(email) {
			var regex =
				/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(email);
		}

		if (emailValue === "123@ahmet.com" && passwordValue === "123")
			window.location.assign("http://127.0.0.1:5500/index.html");
		else if (isEmail(emailValue)) {
			$(".container__warning").text(
				"Password or Email is wrong check out repo read.me"
			);
			$(".container__input.container__input--email i").css(
				"visibility",
				"visible"
			);
			$(".container__warning").css("display", "block");
		}
	});

	$(".container__input__eye-icon").on("click", function () {
		if ($(this).hasClass("far fa-eye-slash")) {
			$(this).removeClass("far fa-eye-slash");
			$(this).addClass("far fa-eye");
			$(".container__input.container__input--password input").attr(
				"type",
				"text"
			);
		} else {
			$(this).removeClass("far fa-eye");
			$(this).addClass("far fa-eye-slash");
			$(".container__input.container__input--password input").attr(
				"type",
				"password"
			);
		}
	});
});
