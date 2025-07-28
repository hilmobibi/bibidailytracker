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
