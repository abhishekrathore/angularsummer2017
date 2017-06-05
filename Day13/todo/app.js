angular.module("todo",[])
.controller("todoCtrl", todoCtrl);

function todoCtrl(){
   var todo = this;
   todo.tasks = [];
   todo.completed = 0;
   todo.editMode =0;
   var savedIndex = 0;

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
  


  


}