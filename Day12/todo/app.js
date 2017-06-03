angular.module("todo",[])
.controller("todoCtrl", todoCtrl);

function todoCtrl(){
   var todo = this;
   todo.tasks = [];
   todo.completed = 0;

   todo.add = function(t){
       todo.tasks.push({"name":t,"status":0});
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

   todo.edit = function(){

     

   }

  


  


}