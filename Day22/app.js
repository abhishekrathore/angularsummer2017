angular.module("restapi",[])
.controller("personCtrl",personCtrl)

function personCtrl($http){
  console.log("data")

 var person = this;
  var url = "https://randomuser.me/api/";
  var baseUrl = "http://gateway.marvel.com"
  var path ="/v1/public/characters"

person.search = function(){
    var query ="?nameStartsWith="+person.text+"&apikey=1f1eef6169fc3b523d81a6983f7e14f2"

 var p =  $http.get(baseUrl+path+query)
    p.then(function(result){
      person.superheros= result.data.data.results
    
      console.log(person.data);
    }).catch(function(err){
     console.log(err);
    })
}
 







}
