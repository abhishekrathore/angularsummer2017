angular.module("todo",["firebase"])

.controller("todoCtrl", todoCtrl)

function todoCtrl($firebaseAuth){

    var todo = this;
    var auth = $firebaseAuth();   
    todo.user = {}
    todo.google = google;
    todo.facebook = facebook;


  function google(){
    var promise = auth.$signInWithPopup("google");  
    promise.then(function(result){

     console.log(result.user.displayName,result.user.photoURL);
     todo.user.name = result.user.displayName;
     todo.user.img = result.user.photoURL;
    }).catch(function(err){
     console.log(err);
    });

  }

 function facebook(){
    var promise = auth.$signInWithPopup("facebook");  
    promise.then(function(result){

     console.log(result.user.displayName,result.user.photoURL);
     todo.user.name = result.user.displayName;
     todo.user.img = result.user.photoURL;
    }).catch(function(err){
     console.log(err);
    });

  }

    
    console.log("todo")
}
