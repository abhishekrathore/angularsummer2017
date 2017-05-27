console.log("angular")

var input1 = document.getElementById("input1");
var text = document.getElementById("text1");

function getValue(){
    console.log(input1.value);
    console.log(text);
    console.log(text.innerText);
    text.innerText = input1.value;
}

