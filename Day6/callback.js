console.log("callback");


function sum(a,b){
    return a+b;
}

function diff(a,b){
    return a-b;
}

function result(fx,a,b){
    console.log("result :",fx(a,b))
}

function tell(){
    var r =  Math.random()
    console.log("tells",1000+Math.round(r*9000));
}

result(diff,1,2);

//setTimeout(tell,2000);
setInterval(tell,1000);

var d = new Date();

console.log("end",d);