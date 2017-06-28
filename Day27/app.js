angular.module("forms",[])
.controller("firstCtrl",firstCtrl)


function firstCtrl(){
   var first = this;
   first.submit  = function(){
       console.log("submit");
   }

   first.check = function(form1){
       console.log(form1);
   }


}