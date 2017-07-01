angular.module("localstorage",[])
.controller("firstCtrl",firstCtrl)


function firstCtrl(){
var first = this;

// var name =localStorage.getItem("name")
 first.person =  {name:"youstart"};
// first.personString = JSON.stringify(first.person);
// localStorage.setItem("person",first.personString);
// person = localStorage.getItem("person");
// var p = JSON.parse(person);
// console.log(p);

//localforage.setItem("people",first.person);

localforage.getItem("people",function(err,data){
    console.log(data);
})

console.log("helo");





}