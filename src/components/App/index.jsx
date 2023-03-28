import './App.css';
import { Header } from '../Header';
import { Form } from '../Form';
import { Todolist } from '../Todolist';
import { createContext, useState } from 'react';

export function App() {
  const [tasks, setTasks] = useState([]);
  const AppContext = createContext();

  /* function updateTasks(title, duration) {
    const newTask = {
      title: title,
      duration: duration
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  } */

  return (
    <main id='container'>
      <Header />
      <AppContext.Provider value={{tasks, setTasks}}>
        <Form />
        <Todolist />
      </AppContext.Provider>
    </main>
  )
}