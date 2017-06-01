angular.module("todo",[])
.controller("todoCtrl", todoCtrl);

function todoCtrl(){
   var todo = this;
   todo.tasks = [];

   todo.add = function(t){
       todo.tasks.push(t);
       todo.task="";
       console.log(todo.tasks);
   }

   todo.delete = function(index){
       todo.tasks.splice(index,1);
       console.log(todo.tasks);
   }

  


  


}