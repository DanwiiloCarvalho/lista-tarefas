import './Todolist.css';
import { Task } from '../Task';

export function Todolist() {
    return (
        <section className="todolist">
            <h2>Lista de tarefas:</h2>
            <Task title="Minha nova tarefa" duration="4h" />
            <Task title="Minha nova tarefa 2" duration="5h" />
        </section>
    );
}