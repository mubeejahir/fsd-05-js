//on form submit
let toDoEle = document.getElementsById('todo-list')
    toDoValue = toDoEle.value;

function handleDone(e){
    e.preventDefault();

    let currentElement = this,
        liEle = currentElement.parentNode,
        spanEle = liEle.querySelector('span');
    spanEle.classlist.add('done');
}

function handleDelete(e){
    e.preventDefault();

    let currentElement = this,
        liEle = currentElement.parentNode;
    liEle.remove();
}

function handleEdit(e){
    e.preventDefault();

    
}

function addtask(){
   
    
DoneEle.addEventListener('click',handleDone);

    

}

toDoEle.addEventListener('submit',addtask);