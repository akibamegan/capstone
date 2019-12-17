var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

// new task list elem
var createNewTaskElement = function(taskString) {
	// Create List Item
	var listItem = document.createElement("li");
	// input (checkbox)
	var checkBox = document.createElement("input"); // checkbox
	// label
	var label = document.createElement("label");
	// input (text)
	var editInput = document.createElement("input"); // text
	// button.delete
	var deleteButton = document.createElement("button");

	checkBox.type = "checkbox";
	editInput.type = "text";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(deleteButton);

	return listItem;
}

// new task
var addTask = function() {
	console.log("Add task...");
	var listItem = createNewTaskElement(taskInput.value);
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
	taskInput.value = "";
}

// delete task
var deleteTask = function() {
	console.log("Delete task...");
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	ul.removeChild(listItem);
}

// complete task
var taskCompleted = function() {
	console.log("Task complete...");
	//Append the task list item to the #completed-tasks
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}

// incomplete task
var taskIncomplete = function() {
	//Append the task list item to the #incomplete-tasks
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var deleteButton = taskListItem.querySelector("button.delete");

	deleteButton.onclick = deleteTask;

	checkBox.onchange = checkBoxEventHandler;
}

addButton.addEventListener("click", addTask);

//cycle over incompleteTasksHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
	//bind events to list item's children (taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
	//bind events to list item's children (taskIncomplete)
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

document.getElementById('activeButton').addEventListener('click', function(){
	chrome.tabs.create({active: true, url: 'https://capstone-meak.herokuapp.com/host'});
});



