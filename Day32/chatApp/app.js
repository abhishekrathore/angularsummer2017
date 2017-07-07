/**
 * Created by abhishekrathore on 6/23/16.
 */
angular.module("chatApp",["firebase","ngRoute"])
.controller("chatCtrl", chatCtrl)
.controller("loginCtrl", loginCtrl)
.factory("auth",function($firebaseAuth){
  return $firebaseAuth();
}).run(function(){
    
})
.config(function($routeProvider){

     $routeProvider
     .when("/login",{
         "templateUrl":"templates/login.html",
         "controller":"loginCtrl",
         "controllerAs":"login",
         "resolve":{
             user : function(auth,$location){
                     return auth.$waitForSignIn()
                
             }
         }
        })
     .when("/chat",{
         "templateUrl":"templates/chat.html",
         "controller":"chatCtrl",
         "controllerAs":"chat",
         "resolve":{
             chats : function($firebaseArray){
                 var chatsRef = firebase.database().ref("chats");
                 return $firebaseArray(chatsRef).$loaded();
             },
             user : function(auth){
                return auth.$waitForSignIn()
             }
         }
    })
     .otherwise({redirectTo:"/login"})


})


function loginCtrl($firebaseAuth,$location,auth,user){
    var login = this;
    if(user.uid){
        $location.path("/chat");
    }
    login.google = google;

     var firebaseUser = auth.$getAuth();

        if (firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
        } else {
        console.log("Signed out");
    }
    
    function google(){

   var auth = $firebaseAuth()
     auth.$signInWithPopup("google").then(function(result) {
        console.log("Signed in as:", result.user.uid);
 
         $location.path("/chat");

        }).catch(function(error) {
        console.error("Authentication failed:", error);
        });
}
}

function chatCtrl($firebaseArray,$firebaseAuth,auth,chats,user){
    var chat = this;

     chat.me = user.uid;
  var firebaseUser = auth.$getAuth();

        if (firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
        } else {
        console.log("Signed out");
    }



    chat.chats =  chats;


    chat.add = function(text){
        chat.chats.$add({
            "text":text,
            "user":chat.me
        })

        chat.input = "";
        scrollChange()
    }



    function scrollChange(){
       
    }


}


