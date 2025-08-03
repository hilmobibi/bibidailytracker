//add task button
const addTaskBtn = document.getElementById('addTask');
const menu = document.getElementById('menu');

  addTaskBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Optional: Close menu if you click outside
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && e.target !== addTaskBtn) {
      menu.classList.add('hidden');
    }
  });


//delete task button
const deleteTaskBtn = document.getElementById('deleteTask');
deleteTaskBtn.addEventListener('click', () => {
    alert("beneran kamuh?")
})



//apply add task
function showResult() {
  const select_start_time = document.getElementById('selectStartTime');
  const select_end_time = document.getElementById('selectEndTime');
  const nameTask = document.getElementById('taskName');
  const startValue = parseInt(select_start_time.value); // convert to number
  const endValue = parseInt(select_end_time.value);
  const nameValue = nameTask.value;


  if (isNaN(startValue) || isNaN(endValue) || nameValue === "") {
    alert('isi kontol');
  } else {
    console.log(startValue, endValue);

    // Validate that end is after start
    if (endValue <= startValue) {
      alert("End time must be after start time!");
      return;
    }

    // Height of each hour block (for example 5vw)
    const hourBlockHeight = 21.015; // in vw

    // Calculate top and height
    const top = startValue * hourBlockHeight;
    const height = (endValue - startValue) * hourBlockHeight;

    // Create the task element
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerText = `${startValue} - ${endValue} \n${nameValue}`;
    task.style.position = "absolute";
    task.style.left = "10vw";
    task.style.top = `calc(${top}vw + 9px)`;
    task.style.height = `calc(${height}vw)`;
    task.style.background = "rgba(0, 150, 255, 0.7)";
    task.style.width = "20vw";
    task.style.borderRadius = "1vw";
    task.style.color = "#fff";
    task.style.textAlign = "center";

    // Append to container
    document.querySelector("#scrollableTimeline").appendChild(task);
  }
}

