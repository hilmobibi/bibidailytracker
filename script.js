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


//scrollable timeline const list
const hour00 = document.getElementById('hour00');
const hour01 = document.getElementById('hour01');
const hour02 = document.getElementById('hour02');
const hour03 = document.getElementById('hour03');
const hour04 = document.getElementById('hour04');
const hour05 = document.getElementById('hour05');
const hour06 = document.getElementById('hour06');
const hour07 = document.getElementById('hour07');
const hour08 = document.getElementById('hour08');
const hour09 = document.getElementById('hour09');
const hour10 = document.getElementById('hour10');
const hour11 = document.getElementById('hour11');
const hour12 = document.getElementById('hour12');
const hour13 = document.getElementById('hour13');
const hour14 = document.getElementById('hour14');
const hour15 = document.getElementById('hour15');
const hour16 = document.getElementById('hour16');
const hour17 = document.getElementById('hour17');
const hour18 = document.getElementById('hour18');
const hour19 = document.getElementById('hour19');
const hour20 = document.getElementById('hour20');
const hour21 = document.getElementById('hour21');
const hour22 = document.getElementById('hour22');
const hour23 = document.getElementById('hour23');

//apply add task
function showResult() {
  const select_start_time = document.getElementById('selectStartTime');
  const select_end_time = document.getElementById('selectEndTime');
  const startValue = select_start_time.value;
  const endValue = select_end_time.value;

  if (startValue === "" || endValue === "" ) {
    alert('isi kontol')
  }else {
    console.log(startValue);
    console.log(endValue);
  }
}
