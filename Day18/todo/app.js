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


function homeCtrl(lists,data,$firebaseObject,dblist,$timeout){
    var home = this;

    var rootRef = firebase.database().ref();
    var temp = $firebaseObject(rootRef);

    $timeout(function(){
     home.lists = Object.keys(temp);
     firebaseRefs.push(firebase.database().ref(home.lists[i]));
  

},3000)


   // home.lists = lists;
    firebaseRefs = dblist;
    home.addList = function(l){
            home.lists.push(l);
            firebaseRefs.push(firebase.database().ref(l));
            data[l] =[];
            

    }
}

function todoCtrl(data,$routeParams,dblist,lists,$firebaseArray){
   
   var listname = $routeParams.listname;
   var todo = this;

    console.log(dblist);
    console.log(lists);
    var dbref =  dblist[lists.indexOf(listname)];
     todo.tasks   = $firebaseArray(dbref);

    //todo.tasks = data[listname]  //data.shopping = []
   
  
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