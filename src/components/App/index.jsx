import './App.css';
import { Header } from '../Header';
import { Form } from '../Form';
import { Todolist } from '../Todolist';
import { useState } from 'react';

export function App() {
  const [tasks, setTasks] = useState([]);

  function updateTasks(title, duration) {
    const newTask = {
      title: title,
      duration: duration
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  return (
    <main id='container'>
      <Header />
      <Form updateTasks={updateTasks} />
      <Todolist tasks={tasks} />
    </main>
  )
}