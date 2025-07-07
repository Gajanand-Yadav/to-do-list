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
}