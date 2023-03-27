import './App.css';
import { Header } from '../Header';
import { Form } from '../Form';
import { Todolist } from '../Todolist';

export function App() {
  return (
    <main id='container'>
      <Header />
      <Form />
      <Todolist />
    </main>
  )
}