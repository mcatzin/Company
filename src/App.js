import React from 'react';
import TaskList from './components/Task/TaskList';
import TaskForm from './components/Task/TaskForm';
import './App.css';

function App() {
  return (
    <div className="container-lg">
      <TaskForm />
    </div>
  );
}

export default App;
