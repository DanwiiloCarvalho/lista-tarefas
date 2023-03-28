import './Todolist.css';
import { Task } from '../Task';

export function Todolist({tasks}) {
  
    return (
        <section className="todolist">
            <h2>Lista de tarefas:</h2>
            {/* {tasks.length < 1 && <p>Sem tarefas!</p>} */}
            {/* {tasks.map(task => <Task title={task.title} duration={task.duration}/>)} */}
        </section>
    );
}