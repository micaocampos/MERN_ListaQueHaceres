import React, { useState } from 'react';
function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>borrar tarea</button>
    </div>
  );
}
function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState('');
    const addTask = () => {
      if (newTaskText.trim() !== '') {
        const newTask = {
          id: Date.now(),
          text: newTaskText,
          completed: false
        };
        setTasks([...tasks, newTask]);
        setNewTaskText('');
      }
    };
  
    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
    };
  
    const toggleTask = (id) => {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    };
  
    return (
      <div>
        <h2>Lista de tareas</h2>
        <div>
          <input
            type="text"
            placeholder="Agregar tarea"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <button onClick={addTask}>agregar</button>
        </div>
        <div>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleTask}
            />
          ))}
        </div>
      </div>
    );
  }
  export default TaskList