let tasks = [];

document.getElementById('addTaskButton').addEventListener('click', function () {
    let taskName = document.querySelector('.taskName').value;
    let taskDesc = document.querySelector('.taskDesc').value;
    let dateTime = document.querySelector('.dateTime').value;

    //create an object task list as an array
    function taskInstance(taskName, taskDesc, dateTime) {
        let taskObj = { name: taskName, description: taskDesc, dateAndTime: dateTime };
        tasks.push(taskObj);
        //display
        displayContent();
        console.log(taskObj);
    }

    taskInstance(taskName, taskDesc, dateTime);

})

function displayContent() {
    let name = document.getElementById('task-contents');
    let clearNoTasks = document.querySelector('.noTasks');
    let taskElement = document.createElement('p');
    clearNoTasks.textContent = ""
    tasks.forEach(function (task) { 
       taskElement.textContent += task.name + " : " + task.description+ "\n";
       name.appendChild(taskElement);
    })

}

