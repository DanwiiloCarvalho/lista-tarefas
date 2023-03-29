import './App.css';
import { Header } from '../Header';
import { Form } from '../Form';
import { Todolist } from '../Todolist';
import { createContext, useState } from 'react';

export const AppContext = createContext();

export function App() {
  const [tasks, setTasks] = useState([]);

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