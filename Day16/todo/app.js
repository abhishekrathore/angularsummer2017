angular.module("todo",["ngRoute"])
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

function data(){
    return {
    }
}

function lists(){
    return [];
}


function homeCtrl(lists,data){
    var home = this;
    home.lists = lists;
    home.addList = function(l){
            home.lists.push(l);
            data[l] =[];
            

    }
}

function todoCtrl(data,$routeParams){
   
   var listname = $routeParams.listname;
   var todo = this;

    todo.tasks = data[listname]  //data.shopping = []
   
  
   todo.completed = 0;
   todo.editMode =0;
   var savedIndex = 0;

   todo.add = function(t){
       todo.tasks.push({"name":t,"status":0,"created_at":new Date()});
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