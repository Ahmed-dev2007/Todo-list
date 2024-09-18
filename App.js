document.getElementById('addTaskBtn').addEventListener('click', addTask);

        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskText = taskInput.value.trim();
        
            if (taskText !== '') {
                const taskList = document.getElementById('taskList');
                const li = document.createElement('li');
                const taskSpan = document.createElement('span');
                taskSpan.textContent = taskText;
        
                // Complete Task Toggle
                taskSpan.addEventListener('click', function () {
                    this.parentElement.classList.toggle('completed');
                });
        
                // Remove Task Button
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', function () {
                    this.parentElement.remove();
                });
        
                li.appendChild(taskSpan);
                li.appendChild(deleteBtn);
                taskList.appendChild(li);
        
                // Clear input after adding the task
                taskInput.value = '';
            } else {
                alert('Please enter a task');
            }
        }