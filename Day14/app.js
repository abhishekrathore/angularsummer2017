angular.module("routing",["ngRoute"])
.config(config)
.controller("firstCtrl",firstCtrl)
.controller("secondCtrl",secondCtrl)
.factory("data",data)


function data(){
    return {}
}


function config($routeProvider){

    $routeProvider
      .when("/",{
          templateUrl : "views/home.html"
      })
      .when("/profile",{
          templateUrl : "views/profile.html"
      })
      .otherwise(
          {redirectTo : "/profile"}
      )

}



function firstCtrl(data){

 var first = this;
 first.person = data;

}



function secondCtrl(data){
     var second = this;
 second.person = data;

}