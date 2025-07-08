const input=document.getElementById('input')
const list=document.getElementById('list')

function AddTask(){
    if(input.value===''){
        alert('u have have to add something')
    }
    else{
        let li=document.createElement('li');
        li.innerText=input.value;
        list.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    input.value="";
    saveData();
}
list.addEventListener("click",function(e){
    if(e.target.tagName==="li"){
      e.target.classsList.toggle("checked");
      saveData();
    }
    else if(e.target.tagName==="span"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);

}

function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
