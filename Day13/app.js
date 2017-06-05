angular.module("services",[])
.controller("firstCtrl",firstCtrl)
.controller("secondCtrl",secondCtrl)
.factory("dataFactory",dataFactory)


function firstCtrl($rootScope,dataFactory){
    var first = this;
    console.log("first")
    $rootScope.name = "abc";
    $rootScope.person = {};
    $rootScope.person.name = "xyz";

    dataFactory.name ="prop1";
    first.person = dataFactory;

}


function secondCtrl($rootScope,dataFactory){
    var second = this;
    $rootScope.people = {}
    console.log(dataFactory.name);

    second.person = dataFactory;
    
}


function dataFactory(){
return {
    "sum":function(){}
}

}