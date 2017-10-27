$(document).ready(function () {
	$('.registration-form fieldset:first-child').fadeIn('slow');

	$('.registration-form input[type="text"]').on('focus', function () {
		$(this).removeClass('input-error');
	});

		// next step
		$('.registration-form .btn-next').on('click', function () {
			var parent_fieldset = $(this).parents('fieldset');
			var next_step = true;

			parent_fieldset.find('input[type="text"],input[type="radio"]:checked').each(function () {

				if ($(this).val() == "" || $(this).val() == "0") {
							// if (isChecked.length <= 0 ) {
							//     console.log('não marcou');
							// };
							$(this).addClass('input-error');
							next_step = false;
						} else {
							$(this).removeClass('input-error');
						}

					});


			if (next_step) {
				parent_fieldset.fadeOut(10, function () {
					$(this).next().fadeIn();
				});
			}

		});

		// previous step
		$('.registration-form .btn-previous').on('click', function () {
			$(this).parents('fieldset').fadeOut(10, function () {
				$(this).prev().fadeIn();
			});
		});

		// submit
		$('.registration-form').on('submit', function (e) {

			$(this).find('input[type="text"],input[type="email"]').each(function () {
				if ($(this).val() == "") {
					e.preventDefault();
					$(this).addClass('input-error');
				} else {
					$(this).removeClass('input-error');
				}
			});

		});

	});

var app = angular.module("myApp", []);


app.controller('ingredientes', function($scope, $http) {

	$http({
		method : "GET",
		url : "http://186.215.80.43:82/api/ingredientes"
	}).then(function mySuccess(response) {
		$scope.ingredientes = response.data;
	}, function myError(response) {
		$scope.ingredientes = response.statusText;
	});

});

app.controller('bordas', function($scope, $http) {

	$http({
		method : "GET",
		url : "http://186.215.80.43:82/api/bordas"
	}).then(function mySuccess(response) {
		$scope.bordas = response.data;
	}, function myError(response) {
		$scope.bordas = response.statusText;
	});
});

app.controller('tamanhos', function($scope, $http) {

	$http({
		method : "GET",
		url : "http://186.215.80.43:82/api/tamanhos"
	}).then(function mySuccess(response) {
		$scope.tamanhos = response.data;
	}, function myError(response) {
		$scope.tamanhos = response.statusText;
	});
});