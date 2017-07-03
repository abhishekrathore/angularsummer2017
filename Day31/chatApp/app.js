/**
 * Created by abhishekrathore on 6/23/16.
 */
angular.module("chatApp",["firebase"])
.controller("chatCtrl", chatCtrl)

function chatCtrl($firebaseArray,$firebaseAuth){
    var chat = this;

    var auth = $firebaseAuth();

auth.$signInWithPopup("google").then(function(result) {
  console.log("Signed in as:", result.user.uid);
  chat.me = result.user.uid;
}).catch(function(error) {
  console.error("Authentication failed:", error);
});
    var chatsRef = firebase.database().ref("chats");
    chat.chats =  $firebaseArray(chatsRef);


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


