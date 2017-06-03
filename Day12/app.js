angular.module("firstApp",[])
.controller("demoCtrl", demoCtrl);

function demoCtrl(){
    console.log("demo");
   var demo = this;

   var names = ["Abc","Xyz","ZZZ"]

   demo.names = names;

   demo.add = function(){
       demo.names.push("aaa");
   }


}