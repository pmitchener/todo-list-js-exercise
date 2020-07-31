// Arrays to keep track of each task's state
//const taskTitles = [];
//const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
/*function newTask(title) {
  taskTitles.push(title);
  taskComplete.push(false);
}*/
const newTask = (title, description) => {
  return {
    title,
    description,
    complete:false,
    logState(){
      //this did not work well as arrow function. keep returning undefined for title. something about context invocation. have to research more.
      //using ECMA6 shorthand function syntax instead. old function keyword also works.
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted(){
      this.complete = true;
    }
  };
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "Just get it done."); // task 1

const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
