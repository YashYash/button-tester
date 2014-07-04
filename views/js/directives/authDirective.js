/**
 * Created by yash on 7/3/2014.
 */
buttons_app.directive('myWidget', function(){
	var linkFn;
	linkFn = function(scope,element,attrs) {
		var fadeShow, fadeHide;
		fadeShow = function(){
		    $('#login-overlay').fadeIn();
            $('#hidden-login').fadeIn();
		};
		fadeHide = function(){
		    $('#login-overlay').fadeOut();
            $('#hidden-login').fadeOut();
		};
		$("#login-button").on("click", fadeShow);
        $("#login-overlay").on("click", fadeHide);

	};

	return {
		restrict:'E',
		 link: linkFn
	}
});

