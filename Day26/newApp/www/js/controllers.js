angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope,
    controller:"modalCtrl",
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('browseCtrl', function($scope,$cordovaCamera,$cordovaGeolocation,$cordovaLaunchNavigator, $cordovaFlashlight,$stateParams,$ionicPopup) {
    var browse = this;

  //   browse.popup = function(){

  // $cordovaFlashlight.switchOn()
  //   .then(
  //     function (success) { console.log("on") },
  //     function (error) { /* error */ });
  //   }

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  
      // browse.popup = function(){

      //     $cordovaGeolocation
      //       .getCurrentPosition(posOptions)
      //       .then(function (position) {
      //         var lat  = position.coords.latitude
      //         var long = position.coords.longitude
      //         console.log(lat,long);
      //       }, function(err) {
      //         console.log(err)
      //       });

      // }


  //   browse.popup = function() {
  //   var destination = [26.854528, 75.8131853];
	// var start = "Jaipur";
  //   $cordovaLaunchNavigator.navigate(destination, start).then(function() {
  //     console.log("Navigator launched");
  //   }, function (err) {
  //     console.error(err);
  //   });
  // };




  browse.popup = function(){

  document.addEventListener("deviceready", function () {

       var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
	  correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      console.log(err);
    });

  }, false);

  }






    // browse.popup = function(){
    //   var myPopUp = $ionicPopup.show({
    //      title: 'Enter Wi-Fi Password',
    //      subTitle: 'Please use normal things',
    //      buttons: [
    //   { text: 'Cancel' },
    //   {
    //     text: '<b>Save</b>',
    //     type: 'button-positive',
    //     onTap: function(e) {
    //       if (!$scope.data.wifi) {
    //         //don't allow the user to close unless he enters wifi password
    //         e.preventDefault();
    //       } else {
    //         return $scope.data.wifi;
    //       }
    //     }
    //   }]

    //    });

            
    // }


});
