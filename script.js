let tasks = [];

document.getElementById('addTaskButton').addEventListener('click', function () {
    let taskName = document.querySelector('.taskName').value;
    let taskDesc = document.querySelector('.taskDesc').value;
    let date = document.querySelector('.date').value;
    let time = document.querySelector('.time').value;

    //create an object task list as an array
    function taskInstance(taskName, taskDesc, date, time) {
        let taskObj = { name: taskName, description: taskDesc, date: date, time: time };
        tasks.push(taskObj);
        //display
        displayContent();
        console.log(taskObj);
    }

    taskInstance(taskName, taskDesc, date, time);

})

function displayContent() {
    let name = document.getElementById('task-contents');
    let clearNoTasks = document.querySelector('.noTasks');
    clearNoTasks.textContent = "";
    date = new Date();

    let taskElement = document.createElement('div');
    taskElement.className = "contents"
    tasks.forEach(function (task) {
        name.appendChild(taskElement);
        taskElement.innerHTML = "<p class='taskName'>"+task.name +
         "<span class= 'space'></span><button><img class='bin' src='assets/bin.png' /></button></p><p class = 'taskDesc'>" +
          task.description + "</p><br /><p class= 'deadline'>Deadline:</p><p class='dateTime'>Date:" + 
          task.date +" Time:"+ task.time + "</p>";
    })

}

