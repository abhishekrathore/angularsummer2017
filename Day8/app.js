var app = angular.module("firstApp",[]);
app.controller("loginCtrl", loginCtrl);
app.controller("signupCtrl", signupCtrl);

function loginCtrl($interval){

var login = this;
login.age = 20;
login.name = "xyzzz";
login.subject = "angular";
login.changeName = changeName;

function changeName(){
    console.log(login.name);
    login.name+="Z";
}

console.log(login);

// $interval(changeName, 1000);


}

function signupCtrl(){

var signup = this;
var name = "xyz";
signup.age = 25;
signup.name = name;
signup.subject = "node";
signup.changeName = changeName;


function changeName(){
    console.log(signup.name);
    signup.name+="Z";
}


}