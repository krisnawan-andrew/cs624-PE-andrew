# PE03 - todos

**REFERENCE:**

**Dabit, N. (2019). React
Native in Action. Manning Publications. (ISBN 9781617294051)**

# Input

The tools usd for this app are React, Expo, and VS Code/GitHub Codespace for optional Cloud IDE.

The input is a text from user to enter in a task for the todo list, with an option to mark the task as done by clicking the Done button or to remove the task from the list by using the Delete button. The user can select the tab bar at the bottom to view all tasks, active tasks, and completed tasks.

# Process

The user enter in a String to be added into the list by typing in a task in the TextInput in the Input.js component. The Todo.js is responsible to display the newly added task individually along with its Done and Delete button. Clicking the Done button highlights the button and changed the state of this task to be completed. Clicking the Delete button will remove the task from the list. TodoList.js is responsible to display the entire task(s) in the list by calling the Todo component.

There are three tabs (All, Active, and Complete) that can be clicked at the bottom, utilizing TouchableHighlight component, to "highlight" the seleceted tab. Each respective tab will show all tasks available in the list, only active tasks in the list, or completed tasks in the list.

# Output

The output of this program is a simple task tracker to show all available tasks, tasks that are not done yet, or tasks that have been completed. User can add new tasks to the list and track them by either clicking the Done button to show that they are completed or completely removing the task by clicking the Delete button.
