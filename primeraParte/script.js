var count= 3

var element = document.querySelector("#like");
console.log(element);

function like(){
    count++;
    element.innerText = count + " like(s)";
}