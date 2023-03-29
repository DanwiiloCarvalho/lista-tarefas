import { useContext } from 'react';
import { AppContext } from '../App';
import { Task } from '../Task';
import './Todolist.css';

export function Todolist() {
    const {tasks} = useContext(AppContext);

    return (
        <section className="todolist">
            <h2>Lista de tarefas:</h2>
            {tasks.length < 1 && <p>Sem tarefas!</p>}
            {tasks.map(task => <Task key={task.id} id={task.id} title={task.title} duration={task.duration} completed={task.completed}/>)}
        </section>
    );
}