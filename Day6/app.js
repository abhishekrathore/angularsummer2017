//console.log("hello");

var p1 = {name:"abc",age:30};
var p2 = {name:"xyz",age:20};
var p3 = {name:"cde",age:40};


var people = [p1,p2,p3];


for(var i=0;i<people.length;i++){
    console.log(people[i].name,people[i].age);
}

console.log(speak());

function speak(){
    return 1;
}

var talk = function(){
    return 0;
}

talk();








 