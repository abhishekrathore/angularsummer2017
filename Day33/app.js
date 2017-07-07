angular.module("firstApp",[])
.controller("demoCtrl", demoCtrl)
.directive("popover",popover)



function popover(){

//DDO
return {
    restrict:"AE",
    templateUrl:"popover.html",
    link: function(scope,elem,attrs){

        console.log(attrs.text)
        elem.text(attrs.text);
        console.log(scope);  
        elem.on("click",function(){
            elem.toggleClass("popover");
        })
    },
    controller:function(){

    }

}

}

function demoCtrl(){
 var demo = this;
 console.log("demo")
 demo.text = "xyz";
}