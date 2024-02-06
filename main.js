document.querySelector('.add-task-form').onsubmit = addANewTask; 
let taskList = document.querySelector('.task-list');
let result = '';
let taskNumber = 1;


let checkboxNum=0
   


function getTaskData(e){
    e.preventDefault();
    let taskInputText = document.querySelector('#taskInputText');
    let taskText = taskInputText.value;
    taskInputText.value='';
    return taskText;
}

function  addANewTask (e){
    let taskData = getTaskData(e);
    if(taskData!=''){

     result += `
    <div class="task">
        <input type="checkbox" name="task-${taskNumber}" id="task-${taskNumber}" class="taskCheck" />
        <label for="task-${taskNumber}">${taskData}</label>
    </div>
    `
    taskNumber++;
    checkboxNum++;
    taskList.innerHTML=result;

    let checkbox = document.querySelectorAll('input[type="checkbox"]');
    for ( let i=0 ; i<checkbox.length;i++){
        checkbox[i].onclick=setToDoneTask;
    }
   // console.log(document.querySelectorAll('.task')[0].children[0])
}  
}


  






function setToDoneTask(e){
 //   console.log(e.target)
 //   console.log(e.target.id)
  // console.log(`label[for="${e.target.id}"]`)
 //  console.log( document.querySelector( `label[for="task-1"]`))
 
 let taskLabel =  document.querySelector(`label[for="${e.target.id}"]`);
 if (taskLabel.classList.contains("line-through")) {
    taskLabel.classList.remove("line-through"); 
} else {
    taskLabel.classList.add("line-through"); 
}

 result=taskList.innerHTML;
 


}