angular.module("todo",["ngRoute","firebase"])
.config(function($routeProvider){

$routeProvider
    .when("/home", {
        templateUrl : "views/home.html"
    })
     .when("/list/:listname", {
        templateUrl : "views/list.html"
    })
    .otherwise({
        redirectTo: "/home"
    })



})
.controller("todoCtrl", todoCtrl)
.controller("homeCtrl", homeCtrl)
.factory("data",data)
.factory("lists",lists)
.factory("dblist",dblist)


function data(){
    return {
    }
}

function lists(){
    return [];
}

function dblist(){
    return []
}


function homeCtrl(lists,data,$firebaseObject,$firebaseArray,dblist,$timeout){
    var home = this;

    var listRef = firebase.database().ref("lists");
    home.lists = $firebaseArray(listRef);
   
    home.addList = function(listTitle){
            home.lists.$add({title:listTitle});
    }
}

function todoCtrl(data,$routeParams,dblist,lists,$firebaseArray){
   
   var listname = $routeParams.listname;
   var todo = this;

   var todoRef = firebase.database().ref("todos");
     
     todo.tasks   = $firebaseArray(todoRef.child(listname));

   
  
   todo.completed = 0;
   todo.editMode =0;
   var savedIndex = 0;

   todo.add = function(t){
       todo.tasks.$add({"name":t,"status":0,"created_at":new Date()});
       todo.task="";
       console.log(todo.tasks);
   }

   todo.delete = function(index){
       todo.tasks.splice(index,1);
       console.log(todo.tasks);
   }

   todo.changeStatus = function(index){
       todo.tasks[index].status = todo.tasks[index].status? 0:1 ;
       todo.tasks[index].status? todo.completed++:todo.completed-- ;

       console.log(todo.tasks);
   }

   todo.edit = function(index){
      console.log(index);
      todo.task = todo.tasks[index].name;
      savedIndex = index;
      todo.editMode =1;
   }


   todo.update = function(task){
       todo.tasks[savedIndex].name = task;
       todo.task = ""
       todo.editMode =0;
    console.log(task);
   }

   todo.customComparator = function(value,input){
      //  console.log(value,input);
        return value.length > parseInt(input);
   }
  


  


}