window.onload=function(){
var tasks=[];
let enableBut=document.getElementById("task");
function addTasks(){
let task = document.getElementById("task").value;
let taskObject ={
taskItem:task
}
tasks.push(taskObject);
console.log(tasks);

var ul = document.getElementById('tasks');
var li = document.createElement('li');
li.appendChild(document.createTextNode(task));
ul.appendChild(li);

task.value = '';


button.disabled=true;
document.getElementById("task").value=" ";
} 

function enableButton(){
    button.disabled=false;
}

let button= document.getElementById("submit");
button.disabled="true";
button.addEventListener("click",addTasks);
enableBut.addEventListener("input", enableButton)
}
