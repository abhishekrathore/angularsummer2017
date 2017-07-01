angular.module("firebaseapp",["firebase"])
.controller("dataCtrl",dataCtrl)

function dataCtrl($firebaseObject,$firebaseArray,$firebaseStorage){


    var data = this;
 
  var storageRef = firebase.storage().ref('demo');
  var storage = $firebaseStorage(storageRef);
   var p = storage.$getDownloadURL()
   p.then(function(url){
       console.log(url)
       data.url = url;
   })

//    data.upload = function(){

//        var file = document.getElementById('file').files[0];
//         console.log(file);
//        var uploadTask = storage.$put(file);

//    }



     var rootRef =  firebase.database().ref();
     var studentRef = rootRef.child("students");
     data.students  =  $firebaseArray(studentRef);
     var demoRef = rootRef.child("demo");
     data.demo =$firebaseObject(demoRef);


     data.demo.name = "abc";       
     //data.demo.$save();  
    console.log(data.students);
    
     data.add = function(student){
            data.students.$add(student);
            data.student = {};
            console.log(data.students);
     }

         
}