angular.module("firstApp",[])
.controller("demoCtrl", demoCtrl)
.directive("msg",msg)
.directive("popover",popover)



function popover(){

//DDO
return {
    scope:{
        myName: '=',
        myColor: '@',
        fx:'&fy'
    },
    restrict:"AE",
    require:'^msg',
    templateUrl:"popover.html",
    link: function(scope,elem,attrs,controllers){

        console.log(controllers,"hello");
        console.log(scope.myName);
        console.log(scope.myColor);
        scope.myName = "changedName";
        console.log(scope.name);
        scope.name = "changedName"
        elem.css({"background-color":scope.myColor});

        elem.on("click",function(){
            elem.toggleClass("popover-active");
        })
    },
    controller:function(){
            this.text = "abc";
    },
    controllerAs:"pop"
    
}

}



function msg(){
    return {

        //  template: "<h1>Message</h1>",
        controller:function(){
          this.value = "hello";
        }
    }
}

function demoCtrl($scope){
 var demo = this;
 console.log("demo")
 demo.text = "xyz";

 $scope.name = "demoName"


}