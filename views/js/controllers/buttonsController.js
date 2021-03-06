/**
 * Created by yash on 7/2/2014.
 */
 buttons_app.controller('buttonsController', function($scope, $location, $firebase, buttons_appService) {
  console.log("controller is working")
  var ref = new Firebase("https://buttonclicker.firebaseio.com/click-count");

   ref.once('value', function(dataSnapshot) {
       refSnapshot = dataSnapshot;
       $scope.data = refSnapshot.val();
   });
   $scope.click_function = function(color){
       if ($scope.data[color]) {
           $scope.data[color]++;
       } else {
          $scope.data[color] = 1;
       }
       ref.set($scope.data);
       window.location('/results');
   };

    console.log("reached here");
    myUser = -1;
	$scope.auth = { username: "", password: ""};

	$scope.register = function(){
		var email = $scope.auth.username;
		var password = $scope.auth.password;
        authClient.createUser(email, password, function (error, user) {
            if (!error) {
                console.log('New user registered');
                authService.doLogin(email, password);
                $location.path("/");
                console.log("new user logged in");

            } else {
                alert(error);
            }
        });
        console.log("logging in " + $scope.auth.username);
    };

	$scope.login = function(){
		console.log('trying to login: ' + $scope.auth.username);
		var email = $scope.auth.username;
		var password = $scope.auth.password;
        buttons_appService.doLogin(email, password);
    };

	$scope.fblogin = buttons_appService.fblogin;

	$scope.twitterlogin = buttons_appService.twitterlogin;

	$scope.logout = buttons_appService.logout;


	var authClient = new FirebaseSimpleLogin(ref, function (error, user) {
	    if (error) {
	        alert(error);
	        return;
	    }
	    if (user) {
	        // User is already logged in.
	        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
	        myUser = user;
	        // doLogin(user);
	        console.log('logged in')
	    } else {
	        // User is logged out.
	        console.log('logged out');
	    }
	});


});